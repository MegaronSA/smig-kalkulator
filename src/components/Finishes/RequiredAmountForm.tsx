/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput } from 'components/shared'
import {
  Finish,
  Surface,
  finishes,
  surfaces,
  getFinishEfficiency,
} from 'data/finishes'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'

interface Props {
  selectedProduct: Finish,
  setSelectedProduct: (product: Finish) => void,
  setResult: (result: number | undefined) => void
}

export const RequiredAmountForm: React.FC<Props> = ({ setResult, selectedProduct, setSelectedProduct }) => {
  const [area, setArea] = useState<string>('')
  const [surface, setSurface] = useState<Surface>()

  const parsedArea = parseFloat(area)
  const isAreaValid = _.isNumber(parsedArea) && !_.isNaN(parsedArea)

  useEffect(() => {
    const isValid = selectedProduct && isAreaValid && surface
    if (!isValid) return setResult(undefined)
    const efficiency = getFinishEfficiency(selectedProduct, surface)
    const result = parsedArea / efficiency
    setResult(result)
  }, [selectedProduct, area, surface])

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <label className="input-label" htmlFor="product">
          Produkt:
        </label>
        <select
          name="product"
          className="mt-1 block w-full input"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value as Finish)}
        >
          {getProductOptions()}
        </select>
      </div>
      <div>
        <label className="input-label">Powierzchnia:</label>
        <AdornedInput
          adornmentContent="m²"
          className="mt-1 block w-full input"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div>
        <h6 className="input-label">Rodzaj podłoża:</h6>
        <div className="flex flex-col gap-1 mt-1">
          {getSurfaceOptions(surface, setSurface)}
        </div>
      </div>
    </section>
  )
}

const getProductOptions = () =>
  Object.keys(finishes).map((finish) => <option key={finish}>{finish}</option>)

const getSurfaceOptions = (
  selectedSurface: Surface | undefined,
  onChange: (surface: Surface) => void,
) =>
  surfaces.map((surface) => (
    <div className="flex flex-row gap-4 items-center" key={surface}>
      <input
        type="radio"
        name="surfaces"
        value={surface}
        checked={selectedSurface === surface}
        onChange={(e) => onChange(e.target.value as Surface)}
      />
      <label htmlFor={surface}>{surface}</label>
    </div>
  ))
