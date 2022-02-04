import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { AppearTransition } from "../styled";
import { numberRegex } from "../utils";

interface Props {
  adornmentContent: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  label: string;
  name: string;
  error?: string;
  classes?: {
    input?: string;
    container?: string;
  };
  showValidationIcon?: boolean;
}

export const AdornedInput: React.FC<Props> = ({
  adornmentContent,
  classes,
  value,
  onChange,
  label,
  name,
  error,
  showValidationIcon,
}) => {
  const [textValue, setTextValue] = useState<string>(
    value ? value.toString() : ""
  );

  const parsed = _.toNumber(textValue.replace(",", "."));
  const isValid = !_.isNaN(parsed) && parsed > 0;
  const isError = !isValid && !textValue.match(numberRegex);

  useEffect(() => {
    if (value !== undefined && value !== parsed) setTextValue(value.toString());
  }, [value]);

  useEffect(() => {
    onChange(isValid ? parsed : undefined);
  }, [textValue]);

  return (
    <div className={classes?.container}>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          className={`${classes?.input} ${
            isError
              ? "border-red-700 focus:ring-red-200 focus:border-red-700"
              : ""
          } ${
            isValid
              ? "border-green-700 focus:border-green:700 focus:ring-green-600 focus:ring-opacity-30"
              : ""
          }`}
          type="text"
          inputMode="numeric"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <div
          className={`absolute h-full right-0 top-0 border-l flex items-center justify-center bg-white transform scale-95 rounded-r-md w-12 `}
        >
          <span className="px-3 font-bold text-gray-500">
            {adornmentContent}
          </span>
        </div>
        <AppearTransition
          show={Boolean(isValid) && Boolean(showValidationIcon)}
        >
          <CheckCircleIcon className="absolute w-6 top-2 -right-7 sm:-right-8 text-green-700" />
        </AppearTransition>
        <AppearTransition show={Boolean(error) && Boolean(showValidationIcon)}>
          <XCircleIcon className="absolute w-6 top-2 -right-7 sm:-right-8 text-red-700" />
        </AppearTransition>
      </div>
      {isError && <p className="text-sm mt-1 text-red-700">{error}</p>}
    </div>
  );
};
