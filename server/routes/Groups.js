import { pool } from '../utils/MariaDB.js';
import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
    try {
        let conn = await pool.getConnection();
        let sql = "SELECT * FROM groups LEFT JOIN group_types USING (group_type_id)";
        const rows = await conn.query(sql);
        conn.end();
        res.status(200).json({ data: rows });
        return rows;
      } catch (err) {
        throw err;
    }
});

router.get('/grouptypes', async (_req, res) => {
  try {
      let conn = await pool.getConnection();
      let sql = "SELECT * FROM group_types";
      const rows = await conn.query(sql);
      conn.end();
      res.status(200).json({ data: rows });
      return rows;
    } catch (err) {
      throw err;
  }
});

export default router;
