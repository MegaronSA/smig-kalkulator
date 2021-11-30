import React from 'react'

interface Props {}

const imgUrl = `${process.env.PUBLIC_URL}/smig_logo.png`

export const TopBar: React.FC<Props> = (props) => {
  return (
    <div className="w-full px-8 py-2 shadow-md">
      <img src={imgUrl} alt="smig_logo" className=" w-16 cursor-pointer"></img>
    </div>
  )
}
