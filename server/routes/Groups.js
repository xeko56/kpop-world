import { pool } from '../utils/MariaDB.js';
import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
    try {
        let conn = await pool.getConnection();
        let sql = "SELECT * FROM groups";
        const rows = await conn.query(sql);
        conn.end();
        res.status(200).json({ data: rows });
        return rows;
      } catch (err) {
        throw err;
    }
});

export default router;
