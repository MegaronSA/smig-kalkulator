import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { AppearTransition } from '../styled'

interface Props {
  adornmentContent: string
  className?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  name: string
  valid?: boolean
  error?: string
}

export const AdornedInput: React.FC<Props> = ({
  adornmentContent,
  className,
  value,
  onChange,
  label,
  name,
  valid,
  error,
}) => {
  return (
    <div>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          className={`${className} ${
            error
              ? 'border-red-700 focus:ring-red-200 focus:border-red-700'
              : ''
          } ${
            valid
              ? 'border-green-700 focus:border-green:700 focus:ring-green-600 focus:ring-opacity-30'
              : ''
          }`}
          type="text"
          value={value}
          onChange={onChange}
        />
        <div
          className={`absolute h-full right-0 top-0 border-l flex items-center justify-center bg-white transform scale-95 rounded-r-md w-12 `}
        >
          <span className="px-3 font-bold text-gray-500">
            {adornmentContent}
          </span>
        </div>
        <AppearTransition show={Boolean(valid)}>
          <CheckCircleIcon className="absolute w-6 top-2 -right-7 sm:-right-8 text-green-700" />
        </AppearTransition>
        <AppearTransition show={Boolean(error)}>
          <XCircleIcon className="absolute w-6 top-2 -right-7 sm:-right-8 text-red-700" />
        </AppearTransition>
      </div>
      {error && <p className="text-sm mt-1 text-red-700">{error}</p>}
    </div>
  )
}
