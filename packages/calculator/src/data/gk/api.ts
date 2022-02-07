import { GK, gks, SurfaceArea, surfaceAreas } from './gk'

export const getGKEfficiency = (gk: GK, surfaceArea?: SurfaceArea) => {
  if (!surfaceArea) return gks[gk].efficiences[gks[gk].efficiences.length - 1]
  const surfaceAreaIdx = surfaceAreas.indexOf(surfaceArea)
  return gks[gk].efficiences[surfaceAreaIdx]
}

export const getPackageSize = (gk: GK): number[] => {
  return gks[gk].packSizes
}
