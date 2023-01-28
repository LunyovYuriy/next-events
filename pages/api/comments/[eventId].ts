import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '../../../src/helpers/mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectMongoDB();
  const { eventId } = req.query;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name.trim() || !text.trim()) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const comment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db('events');
    const result = await db.collection('comments').insertOne(comment);

    const resultComment = {
      _id: result.insertedId,
      ...comment,
    };

    res.status(201).json({ message: 'success', resultComment });
  }

  if (req.method === 'GET') {
    const db = client.db('events');

    const documents = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  client.close();
}

export default handler;
