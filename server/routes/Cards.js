import { pool } from '../utils/MariaDB.js';
import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
    try {
        let conn = await pool.getConnection();
        let sql = '';
        sql = `SELECT card_nr, card_name, era_name, group_name, type_name, release_date, img_url FROM cards
                        LEFT JOIN groups USING (group_nr)
                        LEFT JOIN eras USING (era_nr)
                        LEFT JOIN card_types USING (type_nr)`;      
        if(_req.query.group_nr) {
          sql = `SELECT card_nr, card_name, era_name, group_name, type_name, release_date, img_url FROM cards
                        LEFT JOIN groups USING (group_nr)
                        LEFT JOIN eras USING (era_nr)
                        LEFT JOIN card_types USING (type_nr)
                      WHERE group_nr = ${_req.query.group_nr}`;
        }
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
    let sql = `SELECT card_nr, card_name, era_name, group_name, type_name, release_date, img_url FROM cards
                    LEFT JOIN groups USING (group_nr)
                    LEFT JOIN eras USING (era_nr)
                    LEFT JOIN card_types USING (type_nr)
                    WHERE card_nr = ${card_nr}`;
    const rows = await conn.query(sql);
    conn.end();
    res.status(200).json({ data: rows });
    return rows;
  } catch (err) {
      res.status(500).json({ message: 'Cannot get card info. Please try again later.' });
      throw err;
  } 
});

export default router;