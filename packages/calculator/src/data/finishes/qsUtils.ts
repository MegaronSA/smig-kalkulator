import { Finish, finishes, isFinish } from ".";

export interface FinishesInitialData {
  name: Finish | undefined;
  packageSize: number | undefined;
}

export const getValidName = (name: string | null) =>
  isFinish(name) ? name : undefined;

export const getValidPackSize = (
  packSize: string | null,
  validName: Finish | undefined
) => {
  if (!packSize || !validName) return undefined;
  const parsedSize = parseFloat(packSize);
  const isPackSizeValid = finishes[validName].packSizes.includes(parsedSize);
  return isPackSizeValid ? parsedSize : undefined;
};

export const getInitialData = (
  queryString: URLSearchParams
): FinishesInitialData => {
  const validName = getValidName(queryString.get("name"));
  const validPackageSize = getValidPackSize(
    queryString.get("packSize"),
    validName
  );

  return { name: validName, packageSize: validPackageSize };
};
