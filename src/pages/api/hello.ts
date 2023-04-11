// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

type Data = {
  name: string
}


/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case 'GET':
      //...
      res.status(200).json({ name: 'Hello World!' });
      break;
    case 'POST':
      //...
      break;
    case 'PUT':
      //...
      break;
    case 'DELETE':
      //...
      break;
    default:
      res.status(405).end(); // Method not allowed
      break;
  }
};


export async function middleware (req: NextApiRequest) {
  return NextResponse.next();
}

export default handler;
