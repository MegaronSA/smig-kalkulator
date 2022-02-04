export const removeSearchParam = (params: URLSearchParams, name: string) => {
  const copied = params;
  copied.delete(name);
  return copied;
};
