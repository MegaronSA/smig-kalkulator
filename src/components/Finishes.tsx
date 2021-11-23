import {
  Finish,
  finishes,
  getFinishEfficiency,
  Surface,
  surfaces,
} from 'data/finishes'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'

interface Props {}

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

const initialProduct: Finish = 'A-2'

export const Finishes: React.FC<Props> = () => {
  const [product, setProduct] = useState<Finish>(initialProduct)
  const [area, setArea] = useState<string>('')
  const [surface, setSurface] = useState<Surface>()

  const [result, setResult] = useState<number | undefined>()

  useEffect(() => {
    const parsedArea = parseFloat(area)
    if (!product || !_.isNumber(parsedArea) || !surface) return
    const efficiency = getFinishEfficiency(product, surface)
    const result = parsedArea / efficiency
    setResult(result)
  }, [product, area, surface])

  return (
    <div className="container mx-auto px-8 py-6 shadow-lg">
      <h5 className="font-semibold text-gray-400 text-sm">1. Zużycie gładzi</h5>
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
            type="number"
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
      <section className="w-full flex flex-row">
        <div className="w-1/2">
          <h5 className="text-gray-700 text-lg font-bold">Potrzebujesz:</h5>
          <h2 className="font-roboto-slab font-bold text-gray-900 text-4xl mt-2">
            {result ? `${result.toFixed(2)}kg` : '?'}
          </h2>
        </div>
        <aside className="w-1/2 relative -right-4">
          <img src="/smig_presents.png" alt="rezultat_img" />
        </aside>
      </section>
    </div>
  )
}
