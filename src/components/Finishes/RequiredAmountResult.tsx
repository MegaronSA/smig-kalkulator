import React from 'react'

interface Props {
  result: number
}

const imgUrl = `${process.env.PUBLIC_URL}/smig_presents.png`

export const RequiredAmountResult: React.FC<Props> = ({ result }) => {
  return (
    <section className="w-full flex flex-row">
      <div className="w-1/2">
        <h5 className="text-gray-700 text-lg font-bold">Potrzebujesz:</h5>
        <h2 className="font-roboto-slab font-bold text-gray-900 text-4xl mt-2">
          {`${result.toFixed(2)}kg`}
        </h2>
      </div>
      <aside className="w-1/2 relative -right-4">
        <img src={imgUrl} alt="rezultat_img" />
      </aside>
    </section>
  )
}
