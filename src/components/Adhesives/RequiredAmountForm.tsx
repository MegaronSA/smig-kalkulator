/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput, NativeSelect } from 'components/shared/inputs'
import {
  Adhesive,
  adhesivesNames,
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
  selectedProduct: Adhesive | undefined
  setSelectedProduct: (product: Adhesive) => void
}

export const RequiredAmountForm: React.FC<Props> = ({
  setResult,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [area, setArea] = useState<string>('')
  const [trowelSize, setTrowelSize] = useState<TrowelSize>()

  const parsedArea = _.toNumber(area.replace(',', '.'))
  const isAreaValid = !_.isNaN(parsedArea) && parsedArea > 0
  const allowed = /^0[.,]?$|^$/

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
        <NativeSelect
          value={selectedProduct}
          onChange={setSelectedProduct}
          label="Produkt"
          name="product"
          options={adhesivesNames}
          valid={Boolean(selectedProduct)}
        />
      </div>
      <div>
        <AdornedInput
          label="Powierzchnia:"
          name="area"
          adornmentContent="m²"
          className="mt-1 block w-full input"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          valid={isAreaValid}
          error={
            !isAreaValid && !area.match(allowed)
              ? 'Powierzchnia musi być prawidłową liczbą dodatnią'
              : undefined
          }
        />
      </div>
      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-end">
        <div>
          <NativeSelect
            value={trowelSize}
            onChange={setTrowelSize}
            label="Rozmiar pacy zębatej (mm):"
            name="trowelSize"
            options={trowelSizes}
            valid={Boolean(trowelSize)}
            hideIcon
          />
        </div>
        <div className="py-3 px-1">
          <span className=" text-gray-500 font-medium">lub</span>
        </div>
        <div>
          <NativeSelect
            value={trowelSize}
            onChange={setTrowelSize}
            label="Format płytki (cm):"
            name="tileSize"
            options={tileSizes.map((tileSize) =>
              tileSizeToTrowelSize(tileSize),
            )}
            valid={Boolean(trowelSize)}
          />
        </div>
      </div>
    </section>
  )
}

const tileSizeToTrowelSize = (tileSize: TileSize): TrowelSize => {
  const tileIdx = tileSizes.indexOf(tileSize)
  return trowelSizes[tileIdx]
}
