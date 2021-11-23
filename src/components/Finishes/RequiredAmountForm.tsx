/* eslint-disable react-hooks/exhaustive-deps */
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
  setResult: (result: number | undefined) => void
}

const initialProduct: Finish = 'A-2'

export const RequiredAmountForm: React.FC<Props> = ({ setResult }) => {
  const [product, setProduct] = useState<Finish>(initialProduct)
  const [area, setArea] = useState<string>('')
  const [surface, setSurface] = useState<Surface>()

  useEffect(() => {
    const parsedArea = parseFloat(area)
    if (!product || !_.isNumber(parsedArea) || _.isNaN(parsedArea) || !surface)
      return setResult(undefined)
    const efficiency = getFinishEfficiency(product, surface)
    const result = parsedArea / efficiency
    setResult(result)
  }, [product, area, surface])

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <label className="input-label" htmlFor="product">
          Produkt:
        </label>
        <select
          name="product"
          className="mt-1 block w-full input"
          value={product}
          onChange={(e) => setProduct(e.target.value as Finish)}
        >
          {getProductOptions()}
        </select>
      </div>
      <div>
        <label className="input-label">Powierzchnia:</label>
        <input
          className="mt-1 block w-full input"
          type="text"
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
