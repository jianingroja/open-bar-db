import { Router } from 'express';
import { getRandomBar } from './controller';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Open Bar DB 🍻');
});

router.get('/bar', getRandomBar);

export { router };
