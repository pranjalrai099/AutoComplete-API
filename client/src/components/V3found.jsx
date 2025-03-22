import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";

const Autocomplete3 = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [countv3, setcountv3] = useState(0);
  const [result, setResult] = useState(0);

  const fetchSuggestions = async (input) => {
    if (input.length === 0) {
      setSuggestions([]);
      setResult(0);
      return;
    }
    try {
      const response = await fetch(`/api/v3/autocomplete?query=${input}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      setcountv3((prevCount) => prevCount + 1);
      setSuggestions(data.results || []);
      setResult(data.count || 0);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 1000),
    []
  );

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    debouncedFetchSuggestions(input);
  };

  return (
    <div className="p-6 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Autocomplete Search (v3)
      </h1>

      <div className="text-gray-600 text-sm text-center mb-2">
        <p>No. of searches: <span className="font-bold text-blue-600">{countv3}</span></p>
        <p>Results Found: <span className="font-bold text-green-600">{result}</span></p>
      </div>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Start typing..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      {suggestions.length > 0 && (
        <ul className="mt-3 border border-gray-300 rounded-lg bg-white shadow-md max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 hover:bg-blue-100 cursor-pointer transition duration-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function App3() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <Autocomplete3 />
    </div>
  );
}
