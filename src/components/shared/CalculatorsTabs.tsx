import React from 'react'
import { Link } from 'react-router-dom'

export type Tab = 'gladzie' | 'kleje'

interface Props {
  currentTab: Tab
}

export const CalculatorsTabs: React.FC<Props> = ({ currentTab }) => {
  const selectedStyles = 'text-white bg-blue-600'
  const buttonStyles = 'font-semibold px-4 py-2 rounded-md w-24'
  return (
    <div className="w-full text-gray-700 flex gap-4 mt-4 justify-center">
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
    </div>
  )
}
