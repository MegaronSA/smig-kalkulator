import React from 'react'

interface Props {
  packagesToBuy: number
  priceSum: number | undefined
}

const imgUrl = `${process.env.PUBLIC_URL}/smig_thinking.png`

export const ShoppingListResult: React.FC<Props> = ({
  packagesToBuy,
  priceSum,
}) => {
  return (
    <section className="w-full flex flex-row items-center">
      <aside className="w-2/5 relative -left-4 py-2">
        <img src={imgUrl} alt="lista_img" />
      </aside>
      <div className="w-3/5 h-full flex flex-col justify-start py-4 text-right">
        <h5 className="text-gray-700 text-lg font-bold">Lista zakupów:</h5>
        <div>
          <h6 className=" font-roboto-slab text-gray-400 font-medium text-sm">
            Opakowań do kupienia:
          </h6>
          <h2 className="font-roboto-slab font-bold text-gray-900 text-4xl mt-2">
            {packagesToBuy}
          </h2>
        </div>
        {priceSum && (
          <div className="animate-slideFromRight">
            <h6 className=" font-roboto-slab text-gray-400 font-medium text-sm">
              Całkowity koszt:
            </h6>
            <h2 className="font-roboto-slab font-bold text-gray-900 text-4xl mt-2">
              {priceSum.toLocaleString('pl-PL', {
                style: 'currency',
                currency: 'PLN',
              })}
            </h2>
          </div>
        )}
      </div>
    </section>
  )
}
