import { GK, gks, isGK } from ".";

export interface GKInitialData {
  name: GK | undefined;
  packageSize: number | undefined;
}

const getValidName = (name: string | null) =>
  isGK(name) ? name : undefined;

const getValidPackSize = (
  packSize: string | null,
  validName: GK | undefined
) => {
  if (!packSize || !validName) return undefined;
  const parsedSize = parseFloat(packSize);
  const isPackSizeValid = gks[validName].packSizes.includes(parsedSize);
  return isPackSizeValid ? parsedSize : undefined;
};

export const getInitialData = (
  queryString: URLSearchParams
): GKInitialData => {
  const validName = getValidName(queryString.get("name"));
  const validPackageSize = getValidPackSize(
    queryString.get("packSize"),
    validName
  );

  return { name: validName, packageSize: validPackageSize };
};
