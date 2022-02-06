/* eslint-disable react-hooks/exhaustive-deps */
import { AreaCalculator } from "components/shared/AreaCalculator";
import { NativeSelect, VisualizedSelect } from "components/shared/inputs";
import {
  Adhesive,
  adhesivesNames,
  getAdhesiveEfficiency,
  TileSize,
  tileSizes,
  TrowelSize,
  trowelSizes,
} from "data/adhesives";
import _ from "lodash";
import React, { useEffect, useState } from "react";

interface Props {
  setResult: (result: number | undefined) => void;
  selectedProduct: Adhesive | undefined;
  setSelectedProduct: (product: Adhesive) => void;
}

export const RequiredAmountForm: React.FC<Props> = ({
  setResult,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [area, setArea] = useState<number | undefined>();
  const [trowelSize, setTrowelSize] = useState<TrowelSize>();

  useEffect(() => {
    const isValid = selectedProduct && area && trowelSize;
    if (!isValid) return setResult(undefined);
    const efficiency = getAdhesiveEfficiency(selectedProduct, trowelSize);
    const result = area * efficiency;
    setResult(result);
  }, [selectedProduct, area, trowelSize]);

  return (
    <section className="my-6 flex flex-col gap-6">
      <div>
        <VisualizedSelect
          value={selectedProduct}
          onChange={setSelectedProduct}
          label="Produkt"
          name="product"
          options={adhesivesNames}
          valid={Boolean(selectedProduct)}
        />
      </div>
      <div>
        <AreaCalculator area={area} setArea={setArea} />
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
            value={trowelSize ? trowelSizeToTileSize(trowelSize) : undefined}
            onChange={(tileSize) =>
              setTrowelSize(tileSizeToTrowelSize(tileSize))
            }
            label="Format płytki (cm):"
            name="tileSize"
            options={tileSizes}
            valid={Boolean(trowelSize)}
          />
        </div>
      </div>
    </section>
  );
};

const tileSizeToTrowelSize = (tileSize: TileSize): TrowelSize => {
  const tileIdx = tileSizes.indexOf(tileSize);
  return trowelSizes[tileIdx];
};

const trowelSizeToTileSize = (trowelSize: TrowelSize): TileSize => {
  const trowelIdx = trowelSizes.indexOf(trowelSize);
  return tileSizes[trowelIdx];
};
