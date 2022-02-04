/* eslint-disable react-hooks/exhaustive-deps */
import { AdornedInput } from "components/shared/inputs";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  result: number;
  setPackagesToBuy: (packageToBuy: number | undefined) => void;
  packagesToBuy: number | undefined;
  setPriceSum: (priceSum: number | undefined) => void;
  packageTypes: number[];
  initialPackSize: number | undefined;
}

export const ShoppingListForm: React.FC<Props> = ({
  result,
  setPackagesToBuy,
  packagesToBuy,
  setPriceSum,
  packageTypes,
  initialPackSize,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [packageType, setPackageType] = useState<number | undefined>();
  const [pricePerPackage, setPricePerPackage] = useState<number | undefined>();

  const getPackageTypeToPropose = () =>
    packageTypes.reduce<number>(
      (prev, current) => (current <= result ? current : prev),
      packageTypes[0]
    );

  const onPackageTypeChange = (value: number) => {
    if (searchParams.get("packSize") !== null) {
      const paramsToSet = searchParams;
      paramsToSet.delete("packSize");
      setSearchParams(paramsToSet);
    }
    setPackageType(value);
  };

  useEffect(() => {
    if (!packageType) return setPackagesToBuy(undefined);
    const ceiled = Math.ceil(result / packageType);
    setPackagesToBuy(ceiled);
  }, [result, packageType]);

  useEffect(() => {
    if (!packagesToBuy || !pricePerPackage) return setPriceSum(undefined);
    setPriceSum(packagesToBuy * pricePerPackage);
  }, [packagesToBuy, pricePerPackage]);

  useEffect(() => {
    setPackageType(initialPackSize ?? getPackageTypeToPropose());
  }, [packageTypes, result]);

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <h6 className="input-label">Opakowanie:</h6>
        <div className="flex flex-row gap-4 mt-1 flex-wrap">
          {getPackagingOptions(packageTypes, packageType, onPackageTypeChange)}
        </div>
      </div>
      <div>
        <AdornedInput
          label={"Cena za opakowanie:"}
          name="pricePerPackage"
          adornmentContent="zł"
          classes={{ input: "mt-1 block w-full input" }}
          value={pricePerPackage}
          onChange={setPricePerPackage}
          error="Cena musi być prawidłową liczbą dodatnią"
        />
      </div>
    </section>
  );
};

const getPackagingOptions = (
  packageTypes: number[],
  selectedPackageType: number | undefined,
  onChange: (packageType: number) => void
) =>
  packageTypes.map((packageType) => {
    const isSelected = selectedPackageType === packageType;
    const selectedStyles = isSelected
      ? "bg-blue-600 text-white border-0"
      : "border";
    return (
      <div
        key={`${packageType}`}
        className={`px-4 py-2 input cursor-pointer ${selectedStyles}`}
        onClick={() => onChange(packageType)}
      >{`${packageType} kg`}</div>
    );
  });
