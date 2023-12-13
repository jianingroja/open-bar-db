import type { Request, Response } from 'express';
import { Bar, BarWithIndex } from './type';
import Bars from './bars.json';

const getRandomBar = (req: Request, res: Response) => {
  try {
    const random = Math.floor(Math.random() * 30);
    const bar = Bars.data[random] as Bar;
    const result = { bar, index: random } as BarWithIndex;

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getBarByIndex = (req: Request, res: Response) => {
  try {
    const { index } = req.params;
    const bar = Bars.data[+index];

    return res.status(200).send({ bar });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export { getRandomBar, getBarByIndex };
