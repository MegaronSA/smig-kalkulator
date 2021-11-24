import { isTrowelSize, tileSizes } from '.'
import { Adhesive, AdhesiveOption, adhesives, trowelSizes } from './adhesives'

export const getAdhesiveEfficiency = (
  adhesive: Adhesive,
  option: AdhesiveOption,
) => {
  const idx = isTrowelSize(option)
    ? trowelSizes.indexOf(option)
    : tileSizes.indexOf(option)
  return adhesives[adhesive][idx]
}
