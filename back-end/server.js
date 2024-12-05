import express from 'express';
import cors from 'cors'
import { configDotenv } from 'dotenv';
import { connectDB, connection } from './config/db.js'
// import userRoute from './routes/userRoute.js';

configDotenv();

const app = express();
const port = 5000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));


app.get('/', )

app.listen(port, () => { console.log(`listening on port ${port}`); });

const connectData = {
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

connectDB(connectData)