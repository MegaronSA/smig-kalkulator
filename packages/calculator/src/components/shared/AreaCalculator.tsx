/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { AdornedInput } from './inputs'
import { Dialog, useDialog } from './styled/Dialog'

interface Props {
  area: number | undefined
  setArea: (area: number | undefined) => void
}

export const AreaCalculator: React.FC<Props> = ({ area, setArea }) => {
  const dialog = useDialog('powierzchnia')

  const [height, setHeight] = useState<number | undefined>()
  const [width, setWidth] = useState<number | undefined>()

  const calculateAreaEnabled = height && width

  const onCalculateArea = () => {
    if (!calculateAreaEnabled) return setArea(undefined)
    const calculatedArea = height * width
    dialog.close()
    if (area !== calculatedArea) setArea(calculatedArea)
    setHeight(undefined)
    setWidth(undefined)
  }

  return (
    <div>
      <Dialog name={dialog.name} className="w-full max-w-xs">
        <div className="flex flex-col w-full gap-4 justify-between">
          <AdornedInput
            label="Długość:"
            name="height"
            adornmentContent="m"
            classes={{ input: 'mt-1 block input w-full' }}
            value={height}
            onChange={setHeight}
            error="Długość musi być prawidłową liczbą dodatnią"
          />
          <AdornedInput
            label="Szerokość:"
            name="width"
            adornmentContent="m"
            classes={{ input: 'mt-1 block input w-full' }}
            value={width}
            onChange={setWidth}
            error="Szerokość musi być prawidłową liczbą dodatnią"
          />
          <button
            className="bg-blue-600 border border-blue-600 text-white px-4 py-2 font-semibold rounded-md w-full mt-2 disabled:opacity-60"
            disabled={!calculateAreaEnabled}
            onClick={onCalculateArea}
          >
            Wylicz
          </button>
        </div>
      </Dialog>
      <div className="flex items-end">
        <AdornedInput
          label="Powierzchnia:"
          name="area"
          adornmentContent="m²"
          classes={{ input: 'mt-1 block w-full input', container: 'w-full' }}
          value={area}
          onChange={setArea}
          error="Powierzchnia musi być prawidłową liczbą dodatnią"
        />
        <button
          className="bg-blue-600 border border-blue-600 text-white px-4 py-2 font-semibold rounded-md ml-4 w-20"
          style={{ minWidth: '85px' }}
          onClick={dialog.open}
        >
          Wylicz
        </button>
      </div>
    </div>
  )
}
