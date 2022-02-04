import { Adhesive, adhesives, isAdhesive } from ".";

export interface AdhesivesInitialData {
  name: Adhesive | undefined;
  packageSize: number | undefined;
}

export const getValidName = (name: string | null) =>
  isAdhesive(name) ? name : undefined;

export const getValidPackSize = (
  packSize: string | null,
  validName: Adhesive | undefined
) => {
  if (!packSize || !validName) return undefined;
  const parsedSize = parseFloat(packSize);
  const isPackSizeValid = adhesives[validName].packSizes.includes(parsedSize);
  return isPackSizeValid ? parsedSize : undefined;
};

export const getInitialData = (
  queryString: URLSearchParams
): AdhesivesInitialData => {
  const validName = getValidName(queryString.get("productName"));
  const validPackageSize = getValidPackSize(
    queryString.get("packSize"),
    validName
  );

  return { name: validName, packageSize: validPackageSize };
};
