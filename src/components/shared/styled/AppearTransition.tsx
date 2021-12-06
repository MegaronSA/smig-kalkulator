import { Transition } from '@headlessui/react'
import React from 'react'

interface Props {
  show: boolean
}

export const AppearTransition: React.FC<Props> = ({ show, ...props }) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-70"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {props.children}
    </Transition>
  )
}
