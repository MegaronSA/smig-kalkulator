import React from 'react'

interface Props {
  result: number
}

export const RequiredAmountResult: React.FC<Props> = ({ result }) => {
  return (
    <section className="w-full animate-slideFromRight text-center">
      <h5 className="text-gray-700 text-lg font-bold">Potrzebujesz:</h5>
      <h2 className="font-roboto-slab font-bold text-gray-900 text-4xl mt-2">
        {`${result.toFixed(2)}kg`}
      </h2>
    </section>
  )
}
