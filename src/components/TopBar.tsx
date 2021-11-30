import React from 'react'

interface Props {}

const imgUrl = `${process.env.PUBLIC_URL}/smig_logo.png`

export const TopBar: React.FC<Props> = () => {
  return (
    <div className="w-full px-8 py-1 shadow-md flex mb-2 justify-between items-center">
      <a href="https://smig.pl/">
        <img
          src={imgUrl}
          alt="smig_logo"
          className="cursor-pointer"
          style={{ width: '66px', height: '66px', maxWidth: 'none' }}
        ></img>
      </a>

      <div
        className="flex whitespace-nowrap gap-6 font-montserrat font-bold"
        style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)' }}
      >
        <a href="https://smig.pl/baza-wiedzy/">BAZA WIEDZY</a>
        <a href="https://smig.pl/do-pobrania/">DO POBRANIA</a>
        <a href="https://smig.pl/o_nas/">O NAS</a>
      </div>
    </div>
  )
}
