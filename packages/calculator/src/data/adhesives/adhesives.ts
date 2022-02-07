export const adhesives = Object.freeze({
  'ŚMIG F-60': {
    efficiencies: [1.9, 2.4, 3.7, 4.4, 5.3, 10.6],
    packSizes: [5, 15, 18],
  },
  'ŚMIG F-2': {
    efficiencies: [1.9, 2.4, 3.7, 4.4, 5.3, 10.6],
    packSizes: [5, 15],
  },
  'ŚMIG S-3': { efficiencies: [1.8, 2.4, 3, 3.6, 4.2, 8.4], packSizes: [25] },
  'ŚMIG S-4': { efficiencies: [1.8, 2.4, 3, 3.6, 4.2, 8.4], packSizes: [20] },
  'ŚMIG S-6': { efficiencies: [1.8, 2.4, 3, 3.6, 4.2, 8.5], packSizes: [20] },
  'Megaron Dw-13': {
    efficiencies: [1.9, 2.4, 3.7, 4.4, 5.3, 10.6],
    packSizes: [5, 15],
  },
})

export type Adhesive = keyof typeof adhesives

export const adhesivesNames = Object.freeze(
  Object.keys(adhesives) as Adhesive[],
)

export const isAdhesive = (name: any): name is Adhesive =>
  adhesivesNames.includes(name)

export const trowelSizes = Object.freeze([
  '4',
  '6',
  '8',
  '10',
  '12',
  '2x12',
] as const)
export const tileSizes = Object.freeze([
  '<30',
  '30-60',
  '60-100',
  '100-150',
  '>150',
  '>180',
] as const)

export type TrowelSize = typeof trowelSizes[number]
export type TileSize = typeof tileSizes[number]
