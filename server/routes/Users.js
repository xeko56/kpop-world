import { pool } from '../utils/MariaDB.js';
import { Router } from 'express';

const router = Router();

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
      if (exists[0].user_password == req.body.password) {
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

router.post('/register', async (req, res) => {
  try {
    let conn = await pool.getConnection();
    const username = req.body.username;
    let sql = `SELECT * FROM users WHERE username = '${username}'`;
    const exists = await conn.query(sql);
    
    if (exists.length) {
      return res.status(409).json({ error: 'Username already exists.'});
    }
    const newUserInfo = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    sql = `INSERT INTO users VALUES (NULL, '${newUserInfo.firstname}', '${newUserInfo.lastname}', '${newUserInfo.email}', '${newUserInfo.username}', '${newUserInfo.password}');`
    const newData = await conn.query(sql);
    conn.end();
    return res.status(200).json({ data: newUserInfo.username });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
    throw err;    
  }
});

export default router;