import { ShoppingListForm, ShoppingListResult } from 'components/shared'
import { Finish, getInitialData, getPackageSize } from 'data/finishes'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RequiredAmountForm } from './RequiredAmountForm'
import { RequiredAmountResult } from './RequiredAmountResult'

interface Props {}

export const Finishes: React.FC<Props> = () => {
  const [searchParams] = useSearchParams()
  const initialData = getInitialData(searchParams)
  const [selectedProduct, setSelectedProduct] = useState<Finish | undefined>(
    initialData.name,
  )

  const [result, setResult] = useState<number>()
  const [packagesToBuy, setPackagesToBuy] = useState<number>()
  const [priceSum, setPriceSum] = useState<number>()

  return (
    <div className="container mx-auto max-w-lg overflow-x-hidden">
      <div className="px-8 pt-6 z-10 bg-white relative">
        <h5 className="font-semibold text-gray-400 text-sm">
          <span>1. Zużycie gładzi</span>
        </h5>
        <RequiredAmountForm
          setResult={setResult}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        {result && <RequiredAmountResult result={result} />}
      </div>
      {result && selectedProduct && (
        <div className="px-8 py-6 animate-slideFromTop z-0 relative">
          <h5 className="font-semibold text-gray-400 text-sm">2. Zakupy</h5>
          <ShoppingListForm
            result={result}
            setPackagesToBuy={setPackagesToBuy}
            packagesToBuy={packagesToBuy}
            setPriceSum={setPriceSum}
            packageTypes={getPackageSize(selectedProduct)}
            initialPackSize={initialData.packageSize}
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
