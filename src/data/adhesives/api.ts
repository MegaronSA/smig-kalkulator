import { TrowelSize } from '.'
import { Adhesive, adhesives, trowelSizes } from './adhesives'

export const getAdhesiveEfficiency = (
  adhesive: Adhesive,
  trowelSize: TrowelSize,
) => {
  const trowelSizeIdx = trowelSizes.indexOf(trowelSize)
  return adhesives[adhesive][trowelSizeIdx]
}
