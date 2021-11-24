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
  setResult: (result: number | undefined) => void
}

const initialProduct: Finish = 'A-2'

export const RequiredAmountForm: React.FC<Props> = ({ setResult }) => {
  const [product, setProduct] = useState<Finish>(initialProduct)
  const [area, setArea] = useState<string>('')
  const [surface, setSurface] = useState<Surface>()

  const parsedArea = parseFloat(area)
  const isAreaValid = _.isNumber(parsedArea) && !_.isNaN(parsedArea)

  useEffect(() => {
    const isValid = product && isAreaValid && surface
    if (!isValid) return setResult(undefined)
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
        <AdornedInput
          adornmentContent="m²"
          className="mt-1 block w-full input"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div>
        <label className="input-label" htmlFor="product">
          Rodzaj podłoża:
        </label>
        <select
          name="product"
          className="mt-1 block w-full input"
          value={surface}
          onChange={(e) => setSurface(e.target.value as Surface)}
        >
          {getSurfaceOptions()}
        </select>
      </div>
    </section>
  )
}

const getProductOptions = () =>
  Object.keys(finishes).map((finish) => <option key={finish}>{finish}</option>)

const getSurfaceOptions = () =>
  surfaces.map((surface) => <option key={surface}>{surface}</option>)
