'use strict';

import { Request, Response } from 'express';

import { governmentService } from '../../../services';

export default async (req: Request, res: Response): Promise<Response<any>> => {
  const primeMinisters = await governmentService.getPrimeMinisters();
  return res.json(primeMinisters);
};
