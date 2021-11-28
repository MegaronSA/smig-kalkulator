import { RequiredAmountResult } from "components/Finishes/RequiredAmountResult";
import { CalculatorsTabs } from "components/shared";
import { ShoppingListForm } from "components/shared/ShoppingListForm";
import { ShoppingListResult } from "components/shared/ShoppingListResult";
import { Adhesive, getPackageSize } from "data/adhesives";
import React, { useState } from "react";
import { RequiredAmountForm } from "./RequiredAmountForm";

interface Props {}

export const Adhesives: React.FC<Props> = (props) => {
  const [selectedProduct, setSelectedProduct] = useState<Adhesive>("F-2");

  const [result, setResult] = useState<number>();
  const [packagesToBuy, setPackagesToBuy] = useState<number>();
  const [priceSum, setPriceSum] = useState<number>();

  return (
    <div className="container mx-auto max-w-lg overflow-x-hidden">
      <CalculatorsTabs currentTab="kleje" />
      <div className="px-8 py-6 z-10 bg-white relative">
        <h5 className="font-semibold text-gray-400 text-sm">
          1. Zużycie kleju
        </h5>
        <RequiredAmountForm
          setResult={setResult}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        {result && <RequiredAmountResult result={result} />}
      </div>
      {result && (
        <div className="px-8 py-6 animate-slideFromTop z-0 relative">
          <h5 className="font-semibold text-gray-400 text-sm">2. Zakupy</h5>
          <ShoppingListForm
            result={result}
            setPackagesToBuy={setPackagesToBuy}
            packagesToBuy={packagesToBuy}
            setPriceSum={setPriceSum}
            packageTypes={getPackageSize(selectedProduct)}
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
