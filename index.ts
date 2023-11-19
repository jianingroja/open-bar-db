import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './router';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🍻Express your love for beer at port ${PORT}`);
});

export default app;
