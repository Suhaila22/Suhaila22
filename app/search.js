export default function handler(req, res) {
  const { query } = req.query;

  const data = [
    { id: 1, title: 'Health Information System' },
    { id: 2, title: 'Patient Data Analysis' },
    { id: 3, title: 'AI in Healthcare' },
    { id: 4, title: 'Medical Device Control' },
  ];

  if (!query || query.trim() === '') {
    return res.status(200).json([]);
  }

  const results = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(results);
}
