import { pool } from '../utils/MariaDB.js';
import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
    try {
        let conn = await pool.getConnection();
        let sql = '';
        sql = `SELECT id, user_nr, card_nr, username, card_name, price, amount, status_name, status_abbre FROM sale_cards
                        LEFT JOIN users USING (user_nr)
                        LEFT JOIN cards USING (card_nr)
                        LEFT JOIN card_status USING (status_nr)`;      
        const rows = await conn.query(sql);
        conn.end();
        res.status(200).json({ data: rows });
        return rows;
      } catch (err) {
          res.status(500).json({ message: 'Cannot get card list. Please try again later.' });
          throw err;
      }
});

router.get('/:card_nr', async (req, res) => {
    let card_nr = req.params.card_nr;
    try {
      let conn = await pool.getConnection();
      let sql = `SELECT id, user_nr, card_nr, username, card_name, price, amount, status_name, status_abbre FROM sale_cards
                    LEFT JOIN users USING (user_nr)
                    LEFT JOIN cards USING (card_nr)
                    LEFT JOIN card_status USING (status_nr)
                    WHERE card_nr = ${card_nr}`;
      const rows = await conn.query(sql);
      conn.end();
      res.status(200).json({ data: rows });
      return rows;
    } catch (err) {
        res.status(500).json({ message: 'Cannot get card list. Please try again later.' });
        throw err;
    } 
});

export default router;