export const adhesives = Object.freeze({
  'F-60': [1.9, 2.4, 3.7, 4.4, 5.3],
  'F-2': [1.9, 2.4, 3.7, 4.4, 5.3],
  'S-3': [1.8, 2.4, 3, 3.6, 4.2],
  'S-4': [1.8, 2.4, 3, 3.6, 4.2],
  'S-6': [1.8, 2.4, 3, 3.6, 4.2],
  'Dw-13': [1.9, 2.4, 3.7, 4.4, 5.3],
})

export type Adhesive = keyof typeof adhesives

export const trowelSizes = Object.freeze([4, 6, 8, 10, 12] as const)

export type TrowelSize = typeof trowelSizes[number]
