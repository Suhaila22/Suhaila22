import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSearch}>
        <input
          className="border p-2 mr-2"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button className="bg-blue-500 text-white p-2" type="submit">Search</button>
      </form>

      <ul className="mt-4">
        {results.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
