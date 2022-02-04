import React, { Fragment } from "react";
import { Dialog as HeadlessUIDialog, Transition } from "@headlessui/react";
import {
  useNavigate,
  useNavigationType,
  useSearchParams,
} from "react-router-dom";
interface Props {
  children: React.ReactNode;
  className?: string;
  name: string;
}

export const Dialog: React.FC<Props> = ({ children, className, name }) => {
  const navigate = useNavigate();
  const type = useNavigationType();
  const [searchParams, setSearchParams] = useSearchParams();

  const closeDialog = () => {
    if (type === "PUSH") return navigate(-1);
    const paramsToSet = searchParams;
    paramsToSet.delete(name);
    setSearchParams(paramsToSet, { replace: true });
  };
  const open = searchParams.get(name) !== null;

  return (
    <Transition
      appear
      show={open}
      as={Fragment}
      enter="ease-out duration-200"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveTo="opacity-0"
      leaveFrom="opacity-100"
    >
      <HeadlessUIDialog
        onClose={closeDialog}
        className={`fixed inset-0 overflow-y-auto`}
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <HeadlessUIDialog.Overlay className="fixed inset-0 bg-black opacity-30 transition-all transform" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={`relative m-4 flex flex-col gap-2 transition-all transform bg-white p-4 rounded-md ${className}`}
          >
            {children}
          </div>
        </div>
      </HeadlessUIDialog>
    </Transition>
  );
};

export const useDialog = (name: string, value?: string) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = useNavigationType();

  const open = () =>
    setSearchParams({ ...searchParams, [name]: value ?? "true" });

  const close = () => {
    if (type === "PUSH") return navigate(-1);
    const paramsToSet = searchParams;
    paramsToSet.delete(name);
    setSearchParams(paramsToSet, { replace: true });
  };

  return { open, close, name };
};
