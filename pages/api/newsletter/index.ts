import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const {email} = req.body;

  if (req.method === 'POST') {
    console.log(email);
    res.status(201).json({
      message: 'success',
      email,
    });
  }
}

export default handler;