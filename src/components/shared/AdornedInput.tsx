import React from 'react'

interface Props {
  adornmentContent: string
  className?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AdornedInput: React.FC<Props> = ({
  adornmentContent,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        className={className}
        type="number"
        value={value}
        onChange={onChange}
      />
      <div className="absolute h-full right-0 top-0 border-l flex items-center justify-center bg-white transform scale-95 rounded-r-md w-12">
        <span className="px-3 font-bold text-gray-500">{adornmentContent}</span>
      </div>
    </div>
  )
}
