import { Finish, finishes, Surface, surfaces } from './finishes'

export const getFinishEfficiency = (finish: Finish, surface: Surface) => {
  const surfaceIdx = surfaces.indexOf(surface)
  return finishes[finish][surfaceIdx]
}
