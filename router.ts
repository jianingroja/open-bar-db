import { Router } from 'express';
import { getRandomBar, getBarByIndex } from './controller';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).send('Welcome to Open Bar DB 🍻');
});

router.get('/bar/random', getRandomBar);
router.get('/bar/:index', getBarByIndex);

export { router };
