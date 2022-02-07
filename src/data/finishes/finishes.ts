export const finishes = Object.freeze({
  'ŚMIG A-2': { efficiencies: [2, 1, 2, 0.4, 1, 0.5], packSizes: [1.5, 5, 20] },
  'ŚMIG A-6': {
    efficiencies: [2.1, 1.05, 2.1, 0.42, 1.05, 0.525],
    packSizes: [10],
  },
  'ŚMIG A-8': {
    efficiencies: [2.1, 1.05, 2.1, 0.42, 1.05, 0.525],
    packSizes: [1, 1.5, 4],
  },
  'ŚMIG A-11': {
    efficiencies: [2.1, 1.05, 2.1, 0.42, 1.05, 0.525],
    packSizes: [17],
  },
  'Megaron Dv-20': {
    efficiencies: [2, 1, 2, 0.4, 1, 0.5],
    packSizes: [1.5, 5, 20],
  },
  'Megaron Dv-21': { efficiencies: [2, 1, 2, 0.4, 1, 0.5], packSizes: [17] },
  'Megaron Df-16': { efficiencies: [2, 1, 2, 0.4, 1, 0.5], packSizes: [20] },
})

export const finishesNames = Object.freeze(Object.keys(finishes) as Finish[])

export type Finish = keyof typeof finishes
export const isFinish = (name: any): name is Finish =>
  finishesNames.includes(name as Finish)

export const surfaces = Object.freeze([
  'Tynk gipsowy',
  'Tynk gipsowy wygładzony mleczkiem',
  'Tynk cementowy',
  'G-k Q3',
  'G-k Q4',
  'Stara powłoka malarska',
] as const)

export type Surface = typeof surfaces[number]
