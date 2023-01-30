import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB, insertDocument } from '../../../src/helpers/mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({
        message: 'Invalid email address.',
      });
      return;
    }

    let client;

    try {
      client = await connectMongoDB();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', {
        email,
      });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' });
    }

    client.close();

    res.status(201).json({
      message: 'success',
      email,
    });
  }
}

export default handler;
