import React, { useState, ChangeEvent } from 'react';

interface SearchComponentProps {
  onSearch: (query: string, apiUrl: string) => void;
  placeholder?: string;
  apiUrl: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch, placeholder, apiUrl }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the current query and apiUrl
    onSearch(query, apiUrl);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
