import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const feedbackFilePath = path.join(
  process.cwd(),
  'src',
  'mocks',
  'feedback.json'
);

export function extractFeedback() {
  const fileData = fs.readFileSync(feedbackFilePath);
  const data = JSON.parse(String(fileData));

  return data;
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, text } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const data = extractFeedback();
    data.push(newFeedback);
    fs.writeFileSync(feedbackFilePath, JSON.stringify(data));

    res.status(201).json({
      message: 'success',
      feedback: newFeedback,
    });
  } else {
    const data = extractFeedback();
    res.status(200).json({
      message: 'success',
      feedbacks: data,
    });
  }
}

export default handler;
