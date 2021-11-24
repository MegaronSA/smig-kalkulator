/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput } from 'components/shared'
import { PackageType, packageTypes } from 'data/finishes'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'

interface Props {
  result: number
  setPackagesToBuy: (packageToBuy: number | undefined) => void
  packagesToBuy: number | undefined
  setPriceSum: (priceSum: number | undefined) => void
}

const initialPackageType: PackageType = 5

export const ShoppingListForm: React.FC<Props> = ({
  result,
  setPackagesToBuy,
  packagesToBuy,
  setPriceSum,
}) => {
  const [packageType, setPackageType] = useState<PackageType>(
    initialPackageType,
  )
  const [pricePerPackage, setPricePerPackage] = useState<string>('')

  useEffect(() => {
    if (!packageType) return setPackagesToBuy(undefined)
    const ceiled = Math.ceil(result / packageType)
    setPackagesToBuy(ceiled)
  }, [result, packageType])

  useEffect(() => {
    const parsedPrice = parseFloat(pricePerPackage)
    if (!packagesToBuy || !_.isNumber(parsedPrice) || _.isNaN(parsedPrice))
      return setPriceSum(undefined)
    setPriceSum(packagesToBuy * parsedPrice)
  }, [packagesToBuy, pricePerPackage])

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <h6 className="input-label">Opakowanie:</h6>
        <div className="flex flex-row gap-4 mt-1">
          {getPackagingOptions(packageType, setPackageType)}
        </div>
      </div>
      <div>
        <label className="input-label">Cena za opakowanie:</label>
        <AdornedInput
          adornmentContent="zł"
          className="mt-1 block w-full input"
          value={pricePerPackage}
          onChange={(e) => setPricePerPackage(e.target.value)}
        />
      </div>
    </section>
  )
}

const getPackagingOptions = (
  selectedPackageType: PackageType,
  onChange: (packageType: PackageType) => void,
) =>
  packageTypes.map((packageType) => {
    const isSelected = selectedPackageType === packageType
    const selectedStyles = isSelected
      ? 'bg-blue-600 text-white border-0'
      : 'border'
    return (
      <div
        className={`px-4 py-2 input cursor-pointer ${selectedStyles}`}
        onClick={() => onChange(packageType)}
      >{`${packageType} kg`}</div>
    )
  })
