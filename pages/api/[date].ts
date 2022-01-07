// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse<ApiResult>) => {
  if (req.method === 'GET') {
    const { date: dateString } = req.query;

    const date = new Date(
      !isNaN(dateString as unknown as number)
        ? parseInt(dateString as string)
        : (dateString as string)
    );

    if (date.valueOf()) {
      return res
        .status(200)
        .send({ unix: date.valueOf(), utc: date.toUTCString() });
    } else {
      return res.status(401).send({ error: 'Invalid Date' });
    }
  }

  res.status(401).send({ error: 'Invalid Command' });
};

export default handler;
