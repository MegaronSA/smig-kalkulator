/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput } from 'components/shared'
import {
  Adhesive,
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
  selectedProduct: Adhesive
  setSelectedProduct: (product: Adhesive) => void
}


export const RequiredAmountForm: React.FC<Props> = ({ setResult, selectedProduct, setSelectedProduct }) => {
  const [area, setArea] = useState<string>('')
  const [trowelSize, setTrowelSize] = useState<TrowelSize>('4')

  const parsedArea = parseFloat(area)
  const isAreaValid = _.isNumber(parsedArea) && !_.isNaN(parsedArea)

  console.log(trowelSize)

  useEffect(() => {
    const isValid = selectedProduct && isAreaValid && trowelSize
    if (!isValid) return setResult(undefined)
    const efficiency = getAdhesiveEfficiency(selectedProduct, trowelSize)
    const result = parsedArea / efficiency
    setResult(result)
  }, [selectedProduct, area, trowelSize])

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
          onChange={(e) => setSelectedProduct(e.target.value as Adhesive)}
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
      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-end">
        <div>
          <label className="input-label" htmlFor="trowelSize">
            Rozmiar pacy zębatej (mm):
          </label>
          <select
            name="trowelSize"
            className="mt-1 block w-full input"
            value={trowelSize}
            onChange={(e) => setTrowelSize(e.target.value as TrowelSize)}
            defaultValue={'default'}
          >
            <option hidden disabled value={'default'} />
            {getTrowelSizesOptions()}
          </select>
        </div>
        <div className="py-3 px-1">
          <span className=" text-gray-500 font-medium">lub</span>
        </div>
        <div>
          <label className="input-label" htmlFor="tileSize">
            Format płytki (cm):
          </label>
          <select
            name="tileSize"
            className="mt-1 block w-full input"
            value={trowelSize}
            onChange={(e) => setTrowelSize(e.target.value as TrowelSize)}
            defaultValue={'default'}
          >
            <option hidden disabled value={'default'} />
            {getTileSizeOptions()}
          </select>
        </div>
      </div>
    </section>
  )
}

const getProductOptions = () =>
  Object.keys(adhesives).map((adhesive) => (
    <option key={adhesive}>{adhesive}</option>
  ))

const getTrowelSizesOptions = () =>
  trowelSizes.map((trowelSize) => (
    <option key={trowelSize}>{trowelSize}</option>
  ))

const getTileSizeOptions = () =>
  tileSizes.map((tileSize) => (
    <option key={tileSize} value={tileSizeToTrowelSize(tileSize)}>
      {tileSize}
    </option>
  ))

const tileSizeToTrowelSize = (tileSize: TileSize): TrowelSize => {
  const tileIdx = tileSizes.indexOf(tileSize)
  return trowelSizes[tileIdx]
}
