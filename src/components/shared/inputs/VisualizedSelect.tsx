import { Listbox, Transition } from "@headlessui/react";
import {
  SelectorIcon,
  CheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { AppearTransition } from "../styled";

interface Props<T extends string> {
  value: T | undefined;
  onChange: (value: T) => void;
  options: Readonly<T[]>;
  label: string;
  name: string;
  valid?: boolean;
  hideIcon?: boolean;
}
export const VisualizedSelect = <T extends string>({
  value,
  onChange,
  options,
  label,
  name,
  valid,
  hideIcon,
}: Props<T>) => {
  return (
    <div className="w-full">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button
            style={{ minHeight: "42px" }}
            className={`relative w-full py-2 pl-4 wa pr-10 text-left bg-white border border-gray-300 shadow-sm rounded-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-blue-500 text-md ${
              valid
                ? "border-green-700 focus:border-green:700 focus:ring-green-600 focus:ring-opacity-30"
                : ""
            }`}
          >
            <span className="block truncate">{value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full z-30 py-0 mt-1 overflow-auto border border-gray-300 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, idx) => {
                const isLast = idx === options.length - 1;
                return (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      `${
                        active ? "text-gray-900 bg-gray-100" : "text-gray-900"
                      } ${!isLast ? "border-b" : ""}
                        cursor-default select-none flex justify-between  items-center relative py-2 pl-10 pr-4`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } w-full text-md text-center truncate`}
                        >
                          {option}
                        </span>
                        {selected ? (
                          <span
                            className={`text-green-600 absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon
                              className=" w-6 h-6"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                        <div
                          className=" w-32 h-20 bg-cover bg-center"
                          style={{ backgroundImage: `url(${imgUrl})` }}
                        />
                      </>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
          <AppearTransition show={Boolean(valid) && !hideIcon}>
            <CheckCircleIcon className="absolute w-6 top-2 -right-7 sm:-right-8 text-green-700" />
          </AppearTransition>
        </div>
      </Listbox>
    </div>
  );
};

const imgUrl = `${process.env.PUBLIC_URL}/products/SMIG_A-2.png`;
