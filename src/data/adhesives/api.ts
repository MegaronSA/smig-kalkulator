import { TrowelSize } from ".";
import { Adhesive, adhesives, trowelSizes } from "./adhesives";

export const getAdhesiveEfficiency = (
  adhesive: Adhesive,
  trowelSize: TrowelSize
) => {
  const trowelSizeIdx = trowelSizes.indexOf(trowelSize);
  return adhesives[adhesive].efficiencies[trowelSizeIdx];
};

export const getPackageSize = (adhesive: Adhesive) => {
  return adhesives[adhesive].packSizes;
};
