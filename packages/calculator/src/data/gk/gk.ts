export const gks = Object.freeze({
  'ŚMIG C-50': {
    efficiences: [0.49, 0.53, 0.71, 1, 0.4],
    packSizes: [1.5, 5, 10, 17],
  },
  'ŚMIG A-2': {
    efficiences: [0.54, 0.59, 0.78, 1.1, 0.44],
    packSizes: [1.5, 5, 20],
  },
  'ŚMIG D-3': {
    efficiences: [0.37, 0.4, 0.53, 0.75, 0.3],
    packSizes: [10],
  },
  'ŚMIG D-4': {
    efficiences: [0.37, 0.4, 0.53, 0.75, 0.3],
    packSizes: [10],
  },
  'Megaron Gs-1': {
    efficiences: [0.37, 0.4, 0.53, 0.75, 0.3],
    packSizes: [5, 10, 20],
  },
  'Megaron Gs-2': {
    efficiences: [0.37, 0.4, 0.53, 0.75, 0.3],
    packSizes: [20],
  },
  'Megaron Gs-3': {
    efficiences: [0.37, 0.4, 0.53, 0.75, 0.3],
    packSizes: [20],
  },
  'Megaron Gs-10': {
    efficiences: [0.37, 0.4, 0.53, 0.75, 0.3],
    packSizes: [5, 10],
  },
})

export const gkNames = Object.freeze(Object.keys(gks) as GK[])
export type GK = keyof typeof gks
export const isGK = (name: any): name is GK => gkNames.includes(name as GK)

export const surfaceAreas = Object.freeze([
  '260 x 120',
  '200 x 120',
  '190 x 80',
  '120 x 60',
] as const)

export type SurfaceArea = typeof surfaceAreas[number]
