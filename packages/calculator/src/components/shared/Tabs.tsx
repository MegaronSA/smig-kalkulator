import React from 'react'
import { Link } from 'react-router-dom'

export type Tab = 'gladzie' | 'kleje' | 'gk'

interface Props {
  currentTab: Tab
}

export const Tabs: React.FC<Props> = ({ currentTab }) => {
  const selectedStyles = 'text-white bg-blue-600'
  const buttonStyles = 'font-semibold px-4 py-2 rounded-md w-24'

  return (
    <div className="w-full text-gray-700 flex gap-4 justify-center mt-8 flex-wrap container mx-auto px-8">
      <Link to="/gladzie">
        <button
          className={`${buttonStyles} ${
            currentTab === 'gladzie' ? selectedStyles : 'border border-gray-300'
          }`}
        >
          Gładzie
        </button>
      </Link>
      <Link to="/kleje">
        <button
          className={`${buttonStyles} ${
            currentTab === 'kleje' ? selectedStyles : 'border border-gray-300'
          }`}
        >
          Kleje
        </button>
      </Link>
      <Link to="/gk">
        <button
          className={`${buttonStyles} w-44 ${
            currentTab === 'gk' ? selectedStyles : 'border border-gray-300'
          }`}
        >
          Łączenie płyt g-k
        </button>
      </Link>
    </div>
  )
}
