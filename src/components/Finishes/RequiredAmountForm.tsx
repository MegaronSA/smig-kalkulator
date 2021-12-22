/* eslint-disable react-hooks/exhaustive-deps */
import { AreaCalculator } from 'components/shared/AreaCalculator'
import { NativeSelect } from 'components/shared/inputs'
import {
  Finish,
  finishesNames,
  getFinishEfficiency,
  Surface,
  surfaces,
} from 'data/finishes'
import _ from 'lodash'
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
  const [area, setArea] = useState<string>('')
  const [surface, setSurface] = useState<Surface>()

  const parsedArea = _.toNumber(area.replace(',', '.'))
  const isAreaValid = !_.isNaN(parsedArea) && parsedArea > 0

  useEffect(() => {
    const isValid = selectedProduct && isAreaValid && surface
    if (!isValid) return setResult(undefined)
    const efficiency = getFinishEfficiency(selectedProduct, surface)
    const result = parsedArea * efficiency
    setResult(result)
  }, [selectedProduct, area, surface])

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <NativeSelect
          value={selectedProduct}
          onChange={setSelectedProduct}
          label="Produkt"
          name="product"
          options={finishesNames}
          valid={Boolean(selectedProduct)}
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
