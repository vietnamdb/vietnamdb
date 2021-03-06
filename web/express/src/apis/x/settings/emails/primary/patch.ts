'use strict';

import _ from 'lodash';
import { Request, Response } from 'express';

import { xService } from '../../../../../services';

export default async (req: Request, res: Response) => {
  const user = _.get(res, 'locals.user', {});
  const email: string = _.get(req, 'body.email');
  const result = await xService.updatePrimaryEmail(email, user);
  return res.json(result);
};
