import { NextApiRequest, NextApiResponse } from 'next';
import IFeedbacks from '../../../src/pages/Feedback/interfaces/IFeedbacks';
import { extractFeedback } from '.';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const {feedbackId} = req.query;
  const feedbacks = extractFeedback();
  const selectedFeedback = feedbacks.find(
    (feedback: IFeedbacks) => feedback.id === feedbackId
  );

  res.status(200).json({ feedback: selectedFeedback })
}

export default handler;
