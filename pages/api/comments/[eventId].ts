import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.query;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name.trim() || !text.trim()) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const comment = {
      id: uuid(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: 'success', comment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      {
        id: 'c1',
        name: 'Yuriy',
        text: 'Hello GET request world',
        email: 'lunyov.yu@gmail.com',
      },
      {
        id: 'c2',
        name: 'Ksenia',
        text: 'Hello world!',
        email: 'ksuchum@gmail.com',
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
