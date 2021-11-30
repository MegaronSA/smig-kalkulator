import React from 'react'
import { Link } from 'react-router-dom'

export type Tab = 'gladzie' | 'kleje'

interface Props {
  currentTab: Tab
}

const imgUrl = `${process.env.PUBLIC_URL}/smig_logo.png`

export const TopBar: React.FC<Props> = ({ currentTab }) => {
  const selectedStyles = 'text-white bg-blue-600'
  const buttonStyles = 'font-semibold px-4 py-2 rounded-md w-24'

  return (
    <div className="w-full px-8 py-2 shadow-md flex mb-2 items-center">
      <a href="https://smig.pl/">
        <img
          src={imgUrl}
          alt="smig_logo"
          className=" w-16 cursor-pointer relative z-10"
        ></img>
      </a>

      <div className="w-full text-gray-700 flex gap-4 justify-center transform -translate-x-8">
        <Link to="/gladzie">
          <button
            className={`${buttonStyles} ${
              currentTab === 'gladzie'
                ? selectedStyles
                : 'border border-gray-300'
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
    </div>
  )
}
