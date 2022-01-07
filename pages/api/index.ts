// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse<ApiResult>) => {
  if (req.method === 'GET') {
    const date = new Date();
    return res
      .status(200)
      .send({ unix: date.valueOf(), utc: date.toUTCString() });
  }

  res.status(401).send({ error: 'Invalid Command' });
};

export default handler;
