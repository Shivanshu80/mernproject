import type { RequestHandler } from 'express';

const getUser: RequestHandler = (_req, res) => {
  res.send('fetch user');
};

export { getUser };
