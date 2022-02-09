import React from 'react'

interface Props<T extends string> {
  value: T | undefined
  onChange: (value: T) => void
  options: Readonly<T[]>
  label: string
  name: string
  valid?: boolean
}

export const NativeSelect = <T extends string>({
  value,
  onChange,
  options,
  label,
  name,
  valid,
}: Props<T>) => {
  return (
    <div className="w-full">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          className={`mt-1 block w-full input  ${
            valid
              ? 'border-green-700 focus:border-green:700 focus:ring-green-600 focus:ring-opacity-30'
              : ''
          }`}
          value={value ?? 'none'}
          onChange={(e) => onChange(e.target.value as T)}
        >
          <option hidden disabled value={'none'} />
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
