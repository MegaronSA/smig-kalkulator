export const finishes = Object.freeze({
  'A-2': [2, 1, 2, 0.4, 1, 0.5],
  'A-6': [2.1, 1.05, 2.1, 0.42, 1.05, 0.525],
  'A-8': [2.1, 1.05, 2.1, 0.42, 1.05, 0.525],
  'A-11': [2.1, 1.05, 2.1, 0.42, 1.05, 0.525],
  'Dv-20': [2, 1, 2, 0.4, 1, 0.5],
  'Dv-21': [2, 1, 2, 0.4, 1, 0.5],
  'Df-16': [2, 1, 2, 0.4, 1, 0.5],
})

export type Finish = keyof typeof finishes

export const surfaces = Object.freeze([
  'Tynk gipsowy',
  'Tynk gipsowy wygładzony mleczkiem',
  'Tynk cementowy',
  'G-k Q3',
  'G-k Q4',
  'Stara powłoka malarska',
] as const)

export type Surface = typeof surfaces[number]
