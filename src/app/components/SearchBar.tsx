'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface SearchBarProps {
  queryString?: string
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, queryString }) => {
  const [query, setQuery] = useState(queryString || '')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(query)
    }
  }
  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className="flex items-center w-full md:w-6/12 ">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Paste GitHub repo URL here"
        className="mr-4 flex-grow"
      />
      <Button
        onClick={handleSearch}
        className="bg-neutral-900 text-emerald-600 border-2 border-emerald-600"
      >
        Search
      </Button>
    </div>
  )
}

export default SearchBar
