/* eslint-disable react-hooks/exhaustive-deps */
import { productNameToImagePath } from 'components/shared'
import { AreaCalculator } from 'components/shared/AreaCalculator'
import { NativeSelect, VisualizedSelect } from 'components/shared/inputs'
import {
  Finish,
  finishesNames,
  getFinishEfficiency,
  Surface,
  surfaces,
} from 'data/finishes'
import React, { useEffect, useState } from 'react'

interface Props {
  selectedProduct: Finish | undefined
  setSelectedProduct: (product: Finish) => void
  setResult: (result: number | undefined) => void
}

export const RequiredAmountForm: React.FC<Props> = ({
  setResult,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [area, setArea] = useState<number | undefined>()
  const [surface, setSurface] = useState<Surface>()

  useEffect(() => {
    const isValid = selectedProduct && area && surface
    if (!isValid) return setResult(undefined)
    const efficiency = getFinishEfficiency(selectedProduct, surface)
    const result = area * efficiency
    setResult(result)
  }, [selectedProduct, area, surface])

  console.log(productNameToImagePath('ŚMIG A-2'))

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <VisualizedSelect
          value={selectedProduct}
          onChange={setSelectedProduct}
          label="Produkt"
          name="product"
          options={finishesNames}
          valid={Boolean(selectedProduct)}
          getImageUrl={productNameToImagePath}
        />
      </div>
      <div>
        <AreaCalculator area={area} setArea={setArea} />
      </div>
      <div>
        <NativeSelect
          value={surface}
          onChange={setSurface}
          label="Rodzaj podłoża:"
          name="surface"
          options={surfaces}
          valid={Boolean(surface)}
        />
      </div>
    </section>
  )
}
