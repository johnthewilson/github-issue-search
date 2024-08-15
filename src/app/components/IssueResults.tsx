import React from 'react'

type IssueResultsProps = {
  issues: Issue[]
}

const closedLabel = () => {
  return (
    <div className="flex items-center p-1 h4 border rounded border-red-400 p-1 mr-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4 fill-red-400"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-red-400 font-bold text-xs ml-0.1 ">CLOSED</p>
    </div>
  )
}
const openLabel = () => {
  return (
    <div className="h4 border rounded border-green-400 p-1 mr-1">
      <p className="text-green-400 font-bold text-xs">OPEN</p>
    </div>
  )
}
const pullRequestLabel = () => {
  return (
    <div className="flex items-center h4 border rounded border-green-400 p-1 mr-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 fill-green-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>

      <p className="text-green-400 font-bold text-xs ml-0.1">PR OPEN</p>
    </div>
  )
}

const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const isClosed = issue.state === 'closed' ? closedLabel() : null
  const isOpen = issue.state === 'open' ? openLabel() : null
  const isPr =
    issue.state === 'open' &&
    !!issue.pull_request &&
    !issue.pull_request?.merged_at
      ? pullRequestLabel()
      : null

  return (
    <li key={issue.id} className="border-0.12  border-gray-700 p-4 mb-1">
      <a
        href={issue.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-300"
      >
        {issue.title}
      </a>
      <div className="flex mt-1">
        {isClosed}
        {isOpen}
        {isPr}
      </div>
    </li>
  )
}

const IssueResults: React.FC<IssueResultsProps> = ({ issues }) => (
  <div className="results-wrapper w-9/12 flex items-center justify-center m-0 mx-auto">
    <ul className=" w-full flex flex-col ">
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </ul>
  </div>
)

export default IssueResults
