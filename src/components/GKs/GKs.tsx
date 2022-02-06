import {
  removeSearchParam,
  RequiredAmountResult,
  ShoppingListForm,
  ShoppingListResult,
} from "components/shared";
import { getInitialData, getPackageSize, getValidName, GK } from "data/gk";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RequiredAmountForm } from "./RequiredAmountForm";

interface Props {}

export const GKs: React.FC<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialData = getInitialData(searchParams);

  const selectedProduct = getValidName(searchParams.get("productName"));
  const setSelectedProduct = (product: GK) => {
    const productName = getValidName(product);
    if (!productName)
      return setSearchParams(removeSearchParam(searchParams, "productName"));
    setSearchParams({ ...searchParams, productName });
  };

  const [result, setResult] = useState<number>();
  const [packagesToBuy, setPackagesToBuy] = useState<number>();
  const [priceSum, setPriceSum] = useState<number>();

  return (
    <div className="container mx-auto max-w-lg h-full">
      <div className="px-8 pt-6 z-10 bg-white relative">
        <h5 className="font-semibold text-gray-400 text-sm">
          <span>1. Liczenie zapotrzebowania</span>
        </h5>
        <RequiredAmountForm
          setResult={setResult}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        {result && <RequiredAmountResult result={result} />}
      </div>
      {result && selectedProduct && (
        <div className="px-8 py-6 animate-slideFromTop z-0 relative">
          <h5 className="font-semibold text-gray-400 text-sm">2. Zakupy</h5>
          <ShoppingListForm
            result={result}
            setPackagesToBuy={setPackagesToBuy}
            packagesToBuy={packagesToBuy}
            setPriceSum={setPriceSum}
            packageTypes={getPackageSize(selectedProduct)}
            initialPackSize={initialData.packageSize}
          />
          {packagesToBuy && (
            <ShoppingListResult
              packagesToBuy={packagesToBuy}
              priceSum={priceSum}
            />
          )}
        </div>
      )}
    </div>
  );
};
