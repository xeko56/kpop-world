import express from 'express';
import cookieParser from 'cookie-parser';
import * as path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cookieParser());

import userRoutes from './routes/Users.js';
import groupRoutes from './routes/Groups.js';
import cardRoutes from './routes/Cards.js';
import saleCardsRoutes from './routes/SaleCards.js'

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/users', userRoutes);
app.use('/groups', groupRoutes);
app.use('/cards', cardRoutes);
app.use('/salecards', saleCardsRoutes);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});