/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput } from 'components/shared'
import {
  Adhesive,
  adhesives,
  getAdhesiveEfficiency,
  TrowelSize,
  trowelSizes,
} from 'data/adhesives'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'

interface Props {
  setResult: (result: number | undefined) => void
}

const initialProduct: Adhesive = 'S-3'

export const RequiredAmountForm: React.FC<Props> = ({ setResult }) => {
  const [product, setProduct] = useState<Adhesive>(initialProduct)
  const [area, setArea] = useState<string>('')
  const [trowelSize, setTrowelSize] = useState<TrowelSize>()

  const parsedArea = parseFloat(area)
  const isAreaValid = _.isNumber(parsedArea) && !_.isNaN(parsedArea)

  useEffect(() => {
    const isValid = product && isAreaValid && trowelSize
    if (!isValid) return setResult(undefined)
    const efficiency = getAdhesiveEfficiency(product, trowelSize)
    const result = parsedArea / efficiency
    setResult(result)
  }, [product, area, trowelSize])

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
          onChange={(e) => setProduct(e.target.value as Adhesive)}
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
        <h6 className="input-label">Rozmiar pacy zębatej (mm):</h6>
        <div className="flex flex-col gap-1 mt-1">
          {getTrowelSizesOptions(trowelSize, setTrowelSize)}
        </div>
      </div>
    </section>
  )
}

const getProductOptions = () =>
  Object.keys(adhesives).map((adhesive) => (
    <option key={adhesive}>{adhesive}</option>
  ))

const getTrowelSizesOptions = (
  selectedTrowelSize: TrowelSize | undefined,
  onChange: (trowelSize: TrowelSize) => void,
) =>
  trowelSizes.map((trowelSize) => (
    <div className="flex flex-row gap-4 items-center" key={trowelSize}>
      <input
        type="radio"
        name="surfaces"
        value={trowelSize}
        checked={selectedTrowelSize === trowelSize}
        onChange={(e) => onChange(e.target.value as TrowelSize)}
      />
      <label htmlFor={trowelSize}>{trowelSize}</label>
    </div>
  ))