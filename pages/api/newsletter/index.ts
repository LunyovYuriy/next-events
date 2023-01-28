import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '../../../src/helpers/mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({
        message: 'Invalid email address.',
      });
      return;
    }

    const client = await connectMongoDB();

    const db = client.db('events');
    await db.collection('newsletter').insertOne({
      email,
    });
    client.close();

    res.status(201).json({
      message: 'success',
      email,
    });
  }
}

export default handler;
