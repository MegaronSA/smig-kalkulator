import { RequiredAmountResult } from 'components/Finishes/RequiredAmountResult'
import { ShoppingListForm } from 'components/shared/ShoppingListForm'
import { ShoppingListResult } from 'components/shared/ShoppingListResult'
import React, { useState } from 'react'
import { RequiredAmountForm } from './RequiredAmountForm'

interface Props {}

export const Adhesives: React.FC<Props> = (props) => {
  const [result, setResult] = useState<number>()
  const [packagesToBuy, setPackagesToBuy] = useState<number>()
  const [priceSum, setPriceSum] = useState<number>()

  return (
    <div className="container mx-auto max-w-lg overflow-x-hidden">
      <div className="px-8 py-6 z-10 bg-white relative">
        <h5 className="font-semibold text-gray-400 text-sm">
          1. Zużycie kleju
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
          {packagesToBuy && (
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
