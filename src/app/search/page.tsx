'use client'

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import SearchBar from '../components/SearchBar'
import IssueResults from '../components/IssueResults'
import Header from '../components/Header'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/button'

enum FilterType {
  ALL = 'all',
  OPEN = 'open',
  CLOSED = 'closed',
  PULL_REQUESTS = 'pull-requests',
}

const filterTypes = [
  { type: FilterType.ALL, label: 'All' },
  { type: FilterType.OPEN, label: 'Open' },
  { type: FilterType.CLOSED, label: 'Closed' },
  { type: FilterType.PULL_REQUESTS, label: 'Pull Requests' },
]

const SearchPage: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const urlParam = searchParams.get('url')
  const filterParam = searchParams.get('filter') || FilterType.ALL

  const [query, setQuery] = useState(urlParam || '')
  const [issues, setIssues] = useState<Issue[]>([])
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([])
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>(filterParam as FilterType)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const inMemoryCache = useRef<{ [key: string]: Issue[] }>({})
  
  useEffect(() => {
    if (urlParam) {
      handleSearch(urlParam)
    }
  }, [urlParam])

  useEffect(() => {
    applyFilter(filter)
  }, [issues, filter])

  const handleSearch = useCallback(
    async (newQuery: string) => {
      if (inMemoryCache.current[newQuery]) {
        setIssues(inMemoryCache.current[newQuery])
        setError(null)
        return
      }
      try {
        setIsLoading(true)
        setQuery(newQuery)
        setFilter(FilterType.ALL)
        router.push(
          `${pathname}?url=${encodeURIComponent(newQuery)}&filter=${filter}`,
        )

        const repoPath = new URL(newQuery).pathname.slice(1)

        if (!repoPath || !repoPath.includes('/')) {
          throw new Error('Invalid GitHub repository URL')
        }

        const response = await fetch(
          `https://api.github.com/repos/${repoPath}/issues?state=all`,
        )
        if (!response.ok) {
          throw new Error('Failed to fetch issues from the repo link')
        }
        const data = await response.json()
        inMemoryCache.current[newQuery] = data
        setIssues(data)
        setError(null)
      } catch (err) {
        setError((err as Error).message)
        setIssues([])
      } finally {
        setIsLoading(false)
      }
    },
    [filter, router, pathname],
  )

  const applyFilter = useCallback(
    (filter: FilterType) => {
      const filtered = issues.filter((issue: Issue) => {
        switch (filter) {
          case FilterType.OPEN:
            return issue.state === 'open'
          case FilterType.CLOSED:
            return issue.state === 'closed'
          case FilterType.PULL_REQUESTS:
            return !!issue.pull_request
          default:
            return true
        }
      })
      setFilteredIssues(filtered)
    },
    [issues],
  )

  const handleFilterChange = useCallback(
    (newFilter: FilterType) => {
      setFilter(newFilter)
      router.push(
        `${pathname}?url=${encodeURIComponent(query)}&filter=${newFilter}`,
      )
    },
    [pathname, query],
  )

  const filterButtons = useMemo(
    () =>
      filterTypes.map(({ type, label }) => (
        <Button
          key={type}
          onClick={() => handleFilterChange(type)}
          className={`text-sm h-7 mr-1 ${
            filter === type ? 'bg-green-600' : ''
          }`}
        >
          {label}
        </Button>
      )),
    [filter, handleFilterChange],
  )

  return (
    <main className="min-h-screen  bg-stone-900 w-screen">
      <div className="sticky top-0">
        <Header />
        <div className="search-wrapper w-screen flex flex-col items-center justify-start border-b border-emerald-400 h-40 mb-2 bg-stone-900">
          <SearchBar queryString={query ?? undefined} onSearch={handleSearch} />
          {error && !isLoading && (
            <p className="text-red-500 mt-4 mb-4">{error}</p>
          )}
          {!error && (
            <div className="filter-buttons mt-14">{filterButtons}</div>
          )}
        </div>
      </div>

      {isLoading ? (
        <p className="text-white text-center mt-40">Loading...</p>
      ) : (
        <IssueResults issues={filteredIssues} />
      )}
    </main>
  )
}

export default SearchPage
