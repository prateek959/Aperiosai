import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { db } from './config/db.js';
import { dataRouter } from './routes/data.routes.js';
import {rateLimit} from 'express-rate-limit';
const app = express();
app.use(express.json());
const limiter = rateLimit({
    windowMs:15 * 60 * 1000,
    limit:50
});
app.use(limiter);

app.use(cors({
    origin:'*'
}));

app.use('/data',dataRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT,async ()=>{
   await db();
    console.log(`Server is running ${PORT}`);
});