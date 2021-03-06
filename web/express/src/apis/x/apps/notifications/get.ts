'use strict';

import _ from 'lodash';
import { Request, Response } from 'express';

import { xService } from '../../../../services';

export default async (req: Request, res: Response) => {
  const user = _.get(res, 'locals.user', {});
  const pendingContacs = await xService.getPendingContacs(user);
  return res.json(pendingContacs);
};
