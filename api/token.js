export default function handler(req, res) {
  res.status(200).json({
    token: process.env.HF_API_TOKEN
  });
}

