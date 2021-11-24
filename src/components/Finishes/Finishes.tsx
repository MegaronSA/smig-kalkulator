import React, { useState } from 'react'
import { RequiredAmountForm } from './RequiredAmountForm'
import { RequiredAmountResult } from './RequiredAmountResult'
import { ShoppingListForm } from './ShoppingListForm'
import { ShoppingListResult } from './ShoppingListResult'

interface Props {}

export const Finishes: React.FC<Props> = () => {
  const [result, setResult] = useState<number>()
  const [packagesToBuy, setPackagesToBuy] = useState<number>()
  const [priceSum, setPriceSum] = useState<number>()

  console.log('ptb', packagesToBuy)
  console.log('ps', priceSum)
  return (
    <div className="container mx-auto max-w-lg overflow-x-hidden">
      <div className="px-8 py-6 z-10 bg-white relative">
        <h5 className="font-semibold text-gray-400 text-sm">
          1. Zużycie gładzi
        </h5>
        <RequiredAmountForm setResult={setResult} />
        {result && <RequiredAmountResult result={result} />}
      </div>
      {result && (
        <div className="px-8 py-6 animate-slideFromTop z-0 relative">
          <h5 className="font-semibold text-gray-400 text-sm">2. Zakupy</h5>
          <ShoppingListForm
            result={result}
            setPackagesToBuy={setPackagesToBuy}
            packagesToBuy={packagesToBuy}
            setPriceSum={setPriceSum}
          />
          {packagesToBuy && priceSum && (
            <ShoppingListResult
              packagesToBuy={packagesToBuy}
              priceSum={priceSum}
            />
          )}
        </div>
      )}
    </div>
  )
}
