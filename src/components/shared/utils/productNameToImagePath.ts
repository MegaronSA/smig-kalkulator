export const productNameToImagePath = (name: string) => {
  const parsed = name
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(' ', '_')
  return `${process.env.PUBLIC_URL}/products/${parsed}.png`
}
