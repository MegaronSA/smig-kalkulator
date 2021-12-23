/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { AdornedInput } from './inputs'

interface Props {
  area: string
  setArea: (area: string) => void
}

export const AreaCalculator: React.FC<Props> = ({ area, setArea }) => {
  const [isManual, setIsManual] = useState<boolean>(false)

  const [height, setHeight] = useState<string>('')
  const [width, setWidth] = useState<string>('')

  const parsedArea = _.toNumber(area.replace(',', '.'))
  const isAreaValid = !_.isNaN(parsedArea) && parsedArea > 0
  const parsedHeight = _.toNumber(height.replace(',', '.'))
  const isHeightValid = !_.isNaN(parsedHeight) && parsedHeight > 0
  const parsedWidth = _.toNumber(width.replace(',', '.'))
  const isWidthValid = !_.isNaN(parsedWidth) && parsedWidth > 0

  const allowed = /^0[.,]?$|^$/

  useEffect(() => {
    if (!isHeightValid || !isWidthValid) return setArea('')
    const calculatedArea = (parsedHeight * parsedWidth).toFixed(2)
    if (area !== calculatedArea) setArea(calculatedArea)
  }, [height, width])

  useEffect(() => {
    if (!isManual) return
    setHeight('')
    setWidth('')
  }, [area])

  return (
    <div>
      <div
        className={`flex w-full gap-4 justify-between ${
          isManual ? 'opacity-40' : ''
        }`}
        onFocus={() => setIsManual(false)}
      >
        <AdornedInput
          label="Długość:"
          name="height"
          adornmentContent="m"
          classes={{ input: 'mt-1 block input w-full', container: 'w-1/2' }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          valid={isHeightValid}
          hideIcon
          error={
            !isHeightValid && !height.match(allowed)
              ? 'Długość musi być prawidłową liczbą dodatnią'
              : undefined
          }
        />
        <AdornedInput
          label="Szerokość:"
          name="width"
          adornmentContent="m"
          classes={{ input: 'mt-1 block input w-full', container: 'w-1/2' }}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          valid={isWidthValid}
          error={
            !isWidthValid && !width.match(allowed)
              ? 'Szerokość musi być prawidłową liczbą dodatnią'
              : undefined
          }
        />
      </div>
      <div className="my-2">
        <span className=" text-gray-500 font-medium">lub</span>
      </div>
      <div onFocus={() => setIsManual(true)}>
        <AdornedInput
          label="Powierzchnia:"
          name="area"
          adornmentContent="m²"
          classes={{ input: 'mt-1 block w-full input' }}
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
    </div>
  )
}
