export default function handler(req, res) {
  const token = process.env.HF_API_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'Token not found' });
  }
  res.status(200).json({ token });
}
