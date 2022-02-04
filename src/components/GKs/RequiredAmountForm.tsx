/* eslint-disable react-hooks/exhaustive-deps */
import { AreaCalculator } from "components/shared/AreaCalculator";
import { AdornedInput, NativeSelect } from "components/shared/inputs";
import {
  getGKEfficiency,
  GK,
  gkNames,
  SurfaceArea,
  surfaceAreas,
} from "data/gk";
import _ from "lodash";
import React, { useEffect, useState } from "react";

interface Props {
  selectedProduct: GK | undefined;
  setSelectedProduct: (product: GK) => void;
  setResult: (result: number | undefined) => void;
}

export const RequiredAmountForm: React.FC<Props> = ({
  setResult,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [area, setArea] = useState<number | undefined>();

  const [selectionType, setSelectionType] = useState<SelectionType>();
  const [surfaceArea, setSurfaceArea] = useState<SurfaceArea>();

  useEffect(() => {
    const isValid =
      selectedProduct &&
      area &&
      ((selectionType === "surfaceArea" && surfaceArea) ||
        selectionType === "alternative");
    if (!isValid) return setResult(undefined);
    const efficiency = getGKEfficiency(
      selectedProduct,
      selectionType === "surfaceArea" ? surfaceArea : undefined
    );
    const result = area * efficiency;
    setResult(result);
  }, [selectedProduct, area, surfaceArea, selectionType]);

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <NativeSelect
          value={selectedProduct}
          onChange={setSelectedProduct}
          label="Produkt"
          name="product"
          options={gkNames}
          valid={Boolean(selectedProduct)}
        />
      </div>
      <div className="flex gap-2 justify-between">
        <SelectionChip
          selectionType="surfaceArea"
          currentSelectionType={selectionType}
          setSelectionType={setSelectionType}
          label="Powierzchnia suchej zabudowy"
        />
        <SelectionChip
          selectionType="alternative"
          currentSelectionType={selectionType}
          setSelectionType={setSelectionType}
          label="Metry b. spoiny"
        />
      </div>
      {selectionType === "alternative" && (
        <AdornedInput
          name="runningMeters"
          label="Metry bieżące:"
          adornmentContent="m.b."
          value={area}
          onChange={setArea}
          classes={{ input: "mt-1 block input w-full" }}
          error="Metry bieżące muszą być prawidłową liczbą dodatnią"
        />
      )}
      {selectionType === "surfaceArea" && (
        <>
          <div>
            <AreaCalculator area={area} setArea={setArea} />
          </div>
          <div>
            <NativeSelect
              value={surfaceArea}
              onChange={setSurfaceArea}
              label="Format płyt"
              name="surfaceArea"
              options={surfaceAreas}
              valid={Boolean(surfaceArea)}
            />
          </div>
        </>
      )}
    </section>
  );
};

const SelectionChip: React.FC<{
  setSelectionType: (selection: SelectionType) => void;
  selectionType: SelectionType;
  label: string;
  currentSelectionType: SelectionType | undefined;
}> = ({ selectionType, setSelectionType, currentSelectionType, label }) => {
  const isSelected = selectionType === currentSelectionType;
  const selectedStyles = isSelected
    ? "bg-blue-600 text-white border-0"
    : "border";
  return (
    <div
      className={`px-6 py-2 input cursor-pointer ${selectedStyles}`}
      onClick={() => setSelectionType(selectionType)}
    >
      {label}
    </div>
  );
};

type SelectionType = "surfaceArea" | "alternative";
