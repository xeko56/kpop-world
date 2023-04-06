import { Router } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import {User} from '../schema/User.js';

dotenv.config();

const main = async () => {
    const connectionString = process.env.MONGOOSE_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/users';

    await mongoose.connect(connectionString).then(() => console.log('Database connected!'));
};

main().catch((err) => console.log(err));

const router = Router();

router.get('/', async (_req, res) => {
    const users = await User.find();
    res.status(200).json({ data: users });
});

router.post('/login', async (req, res) => {
    console.log( req.body);
    const username = req.body.username;
    console.log( username);
    const exists = await User.findOne({ username });
    if (exists) {
        return res.status(200).json({ data: exists});
    }
    return res.status(404).json({ error: `Cannot find username ${username}.` });
});

router.post('/register', async (req, res) => {
    console.log( req.body);
    const username = req.body.username;
    console.log( username);
    const exists = await User.findOne({ username });
    if (exists) {
        return res.status(409).json({ error: 'Username already exists.' });
    }
    const newUserInfo = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    };
    const newUser = new User(newUserInfo);
    newUser.save();

    return res.status(200).json({ data: newUser });
});

export default router;

