import { pool } from '../utils/MariaDB.js';
import { Router } from 'express';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import auth from '../middleware/Auth.js';

const router = Router();
const jwtExpirySeconds = 3600;

router.get('/', async (_req, res) => {
    try {
        let conn = await pool.getConnection();
        let sql = '';
        sql = `SELECT * FROM users`;      
        const rows = await conn.query(sql);
        conn.end();
        res.status(200).json({ data: rows });
        return rows;
      } catch (err) {
          res.status(500).json({ error: 'Something went wrong' });
          throw err;
      }
});

router.post('/login', async (req, res) => {
  try {
    let conn = await pool.getConnection();
    const username = req.body.username;
    let sql = `SELECT * FROM users WHERE username = '${username}'`;
    const exists = await conn.query(sql);
    conn.end();
    if (exists.length) {
      const user_password = exists[0].user_password;
      if (await bcrypt.compare(req.body.password, user_password)) {

        // Create token
        const token = jwt.sign(
          { credentials: username},
          process.env.TOKEN_KEY,
          {
            expiresIn: jwtExpirySeconds,
          }
        );
        console.log("tokenLogin:", token);
        res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
            
        return res.status(200).json({ data: exists});
      } 
      else {
        return res.status(401).json({ error: "Wrong password"});
      }
    }
    return res.status(404).json({ error: `Cannot find username ${username}.` });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
    throw err;    
  }
});

router.post('/auth', auth, async (req, res) => {
	res.send(`Welcome !`);
});

router.post('/register', async (req, res) => {
  try {
    let conn = await pool.getConnection();
    const username = req.body.username;
    let sql = `SELECT * FROM users WHERE username = '${username}'`;
    const exists = await conn.query(sql);
    
    if (exists.length) {
      return res.status(409).json({ error: 'Username already exists.'});
    }

    let encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const newUserInfo = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: encryptedPassword,
    };
    sql = `INSERT INTO users VALUES (NULL, '${newUserInfo.firstname}', '${newUserInfo.lastname}', '${newUserInfo.email}', '${newUserInfo.username}', '${newUserInfo.password}');`
    const newData = await conn.query(sql);
    conn.end();

    // Create token
    const token = jwt.sign(
      { credentials: newUserInfo.username},
      process.env.TOKEN_KEY,
      {
        expiresIn: jwtExpirySeconds,
      }
    );
    console.log("token:", token);
    newUserInfo.token = token;
    res.cookie(
      "token", token, 
      { 
        maxAge: jwtExpirySeconds * 1000,
        httpOnly: false
      }
    );

    return res.status(200).json({ data: newUserInfo });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
    throw err;    
  }
});

export default router;