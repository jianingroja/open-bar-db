import type { Request, Response } from 'express';
import Bars from './bars.json';

const getRandomBar = (req: Request, res: Response) => {
  try {
    const random = Math.floor(Math.random() * 30);
    const bar = Bars.data[random];

    res.status(200).send(bar);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getRandomBar };
