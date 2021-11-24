/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput } from 'components/shared'
import {
  Adhesive,
  AdhesiveOption,
  adhesives,
  getAdhesiveEfficiency,
  TileSize,
  tileSizes,
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
  const [option, setOption] = useState<AdhesiveOption>()

  const parsedArea = parseFloat(area)
  const isAreaValid = _.isNumber(parsedArea) && !_.isNaN(parsedArea)

  useEffect(() => {
    const isValid = product && isAreaValid && option
    if (!isValid) return setResult(undefined)
    const efficiency = getAdhesiveEfficiency(product, option)
    const result = parsedArea / efficiency
    setResult(result)
  }, [product, area, option])

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
      <div className="flex justify-between items-center">
        <div>
          <h6 className="input-label">Rozmiar pacy zębatej (mm):</h6>
          <div className="flex flex-col gap-1 mt-1">
            {getTrowelSizesOptions(option, setOption)}
          </div>
        </div>
        <div>
          <p className="font-semibold text-gray-600">lub</p>
        </div>
        <div>
          <h6 className="input-label">Format płytki:</h6>
          <div className="flex flex-col gap-1 mt-1">
            {getTileSizeOptions(option, setOption)}
          </div>
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
  selectedTrowelSize: AdhesiveOption | undefined,
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

const getTileSizeOptions = (
  selectedTrowelSize: AdhesiveOption | undefined,
  onChange: (trowelSize: TileSize) => void,
) =>
  tileSizes.map((tileSize) => (
    <div className="flex flex-row gap-4 items-center" key={tileSize}>
      <input
        type="radio"
        name="surfaces"
        value={tileSize}
        checked={selectedTrowelSize === tileSize}
        onChange={(e) => onChange(e.target.value as TileSize)}
      />
      <label htmlFor={tileSize}>{tileSize}</label>
    </div>
  ))
