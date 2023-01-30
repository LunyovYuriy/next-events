import { NextApiRequest, NextApiResponse } from 'next';
import {
  connectMongoDB,
  getAllDocuments,
  insertDocument,
} from '../../../src/helpers/mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    client = await connectMongoDB();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  const { eventId } = req.query;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name.trim() || !text.trim()) {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }

    const comment = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await insertDocument(client, 'comments', comment);

      const resultComment = {
        _id: result.insertedId,
        ...comment,
      };

      res.status(201).json({ message: 'success', resultComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' });
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments');

      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'Unable to get comments' });
    }
  }

  client.close();
}

export default handler;
