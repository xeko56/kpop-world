import express from "express";
import path from 'path';
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

import userRoutes from './routes/Users';
app.use('/users', userRoutes);

app.get("/api", (req:any, res:any) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req:any, res:any) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});