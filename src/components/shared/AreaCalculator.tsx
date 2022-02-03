/* eslint-disable react-hooks/exhaustive-deps */
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AdornedInput } from "./inputs";
import { Dialog, useDialog } from "./styled/Dialog";

interface Props {
  area: string;
  setArea: (area: string) => void;
}

export const AreaCalculator: React.FC<Props> = ({ area, setArea }) => {
  const dialog = useDialog("powierzchnia");

  const [height, setHeight] = useState<string>("");
  const [width, setWidth] = useState<string>("");

  const parsedArea = _.toNumber(area.replace(",", "."));
  const isAreaValid = !_.isNaN(parsedArea) && parsedArea > 0;
  const parsedHeight = _.toNumber(height.replace(",", "."));
  const isHeightValid = !_.isNaN(parsedHeight) && parsedHeight > 0;
  const parsedWidth = _.toNumber(width.replace(",", "."));
  const isWidthValid = !_.isNaN(parsedWidth) && parsedWidth > 0;

  const allowed = /^0[.,]?$|^$/;

  const calculateAreaEnabled =
    isWidthValid && isHeightValid && height !== "" && width !== "";

  const onCalculateArea = () => {
    if (!calculateAreaEnabled) return setArea("");
    const calculatedArea = (parsedHeight * parsedWidth).toFixed(2);
    dialog.close();
    if (area !== calculatedArea) setArea(calculatedArea);
    setHeight("");
    setWidth("");
  };

  return (
    <div>
      <Dialog name={dialog.name} className="w-full max-w-xs">
        <div className="flex flex-col w-full gap-4 justify-between">
          <AdornedInput
            label="Długość:"
            name="height"
            adornmentContent="m"
            classes={{ input: "mt-1 block input w-full" }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            hideIcon
            type="number"
            error={
              !isHeightValid && !height.match(allowed)
                ? "Długość musi być prawidłową liczbą dodatnią"
                : undefined
            }
          />
          <AdornedInput
            label="Szerokość:"
            name="width"
            adornmentContent="m"
            classes={{ input: "mt-1 block input w-full" }}
            value={width}
            hideIcon
            type="number"
            onChange={(e) => setWidth(e.target.value)}
            error={
              !isWidthValid && !width.match(allowed)
                ? "Szerokość musi być prawidłową liczbą dodatnią"
                : undefined
            }
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
          type="number"
          adornmentContent="m²"
          classes={{ input: "mt-1 block w-full input", container: "w-full" }}
          value={area}
          hideIcon
          onChange={(e) => setArea(e.target.value)}
          valid={isAreaValid}
          error={
            !isAreaValid && !area.match(allowed)
              ? "Powierzchnia musi być prawidłową liczbą dodatnią"
              : undefined
          }
        />
        <button
          className="bg-blue-600 border border-blue-600 text-white px-4 py-2 font-semibold rounded-md ml-4"
          onClick={dialog.open}
        >
          Wylicz
        </button>
      </div>
    </div>
  );
};
