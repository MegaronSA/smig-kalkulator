import { Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'

interface Props {}

const imgUrl = `${process.env.PUBLIC_URL}/smig_logo.png`

export const TopBar: React.FC<Props> = () => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false)

  const MenuItems = (
    <>
      <a
        href="https://smig.pl/baza-wiedzy/"
        className="hover:opacity-80 transition ease-in-out duration-200"
      >
        BAZA WIEDZY
      </a>
      <a
        href="https://smig.pl/do-pobrania/"
        className="hover:opacity-80 transition ease-in-out duration-200"
      >
        DO POBRANIA
      </a>
      <a
        href="https://smig.pl/o_nas/"
        className="hover:opacity-80 transition ease-in-out duration-200"
      >
        O NAS
      </a>
    </>
  )

  return (
    <div className="relative">
      <div className="w-full px-8 py-1 shadow-md flex justify-between items-center bg-white relative z-50">
        <a href="https://smig.pl/">
          <img
            src={imgUrl}
            alt="smig_logo"
            className="cursor-pointer  w-10 md:w-16"
            style={{ maxWidth: 'none' }}
          ></img>
        </a>

        <div
          className="md:flex whitespace-nowrap gap-6 font-montserrat font-bold text-xs hidden"
          style={{ color: 'rgba(0,0,0,0.6)' }}
        >
          {MenuItems}
        </div>
        <div
          className="visible md:hidden w-8 cursor-pointer hover:bg-gray-100 transform ease-in-out duration-200 text-gray-800 relative"
          onClick={() => setBurgerOpen(!burgerOpen)}
        >
          <Transition
            as={Fragment}
            show={burgerOpen}
            enter="tansition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="tansition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute  rounded-full p-1 -top-4">
              <XIcon />
            </div>
          </Transition>
          <Transition
            as={Fragment}
            show={!burgerOpen}
            enter="tansition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="tansition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute  rounded-full p-1 -top-4">
              <MenuIcon />
            </div>
          </Transition>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={burgerOpen}
        enter="transform duration-300"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transform duration-150"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="translate transform absolute bg-white w-full z-40 visible md:hidden shadow-lg border-b">
          <div
            className="whitespace-nowrap flex flex-col gap-4 font-montserrat font-bold text-sm px-8 py-4 text-center "
            style={{ color: 'rgba(0,0,0,0.6)' }}
          >
            {MenuItems}
          </div>
        </div>
      </Transition>
    </div>
  )
}
