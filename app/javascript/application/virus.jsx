import React from 'react'

import padlock from './images/Lock.svg'

import virus1 from './images/virus/g1.svg'
import virus2 from './images/virus/g2.svg'
import virus3 from './images/virus/g3.svg'
import virus4 from './images/virus/g4.svg'
import virus5 from './images/virus/g5.svg'

import spot_1a from './images/virus/spots/g1a.svg'
import spot_1b from './images/virus/spots/g1b.svg'
import spot_2a from './images/virus/spots/g2a.svg'
import spot_2b from './images/virus/spots/g2b.svg'
import spot_3a from './images/virus/spots/g3a.svg'
import spot_3b from './images/virus/spots/g3b.svg'
import spot_4a from './images/virus/spots/g4a.svg'
import spot_4b from './images/virus/spots/g4b.svg'
import spot_5a from './images/virus/spots/g5a.svg'
import spot_5b from './images/virus/spots/g5b.svg'

export const Virus = ({virusOnClick, spotsOnClick, addifier, multiplier, received}) => {
  var virus = virus1
  var spot_1 = spot_1a
  var spot_2 = spot_1b

  if (received < 150) {
    // noch nüschd
  }else if (received >= 150 && received < 300) {
    var virus = virus2
    var spot_1 = spot_2a
    var spot_2 = spot_2b
  }else if (received >= 300 && received < 500) {
    var virus = virus3
    var spot_1 = spot_3a
    var spot_2 = spot_3b
  }else if (received >= 500 && received < 750) {
    var virus = virus4
    var spot_1 = spot_4a
    var spot_2 = spot_4b
  }else if (received >= 750 && received < 1000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 1000 && received < 1400) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 1400 && received < 1900) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 1900 && received < 2500) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 2500 && received < 3000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 3000 && received < 5000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 5000 && received < 7500) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 7500) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }

  return <div>
    <div className='relative mx-auto select-none' style={{width: 240}}>
      <div onClick={spotsOnClick} className="cursor-pointer">
        <img src={spot_1} style={{position: 'absolute', top: -60, right:-5}}/>
        {multiplier > 1 && <h1 className='font-bold text-xl text-white' style={{position: 'absolute', top: -42, right:15}}>x{multiplier}</h1>
        || <img src={padlock} style={{position: 'absolute', top: -40, right:25}}/>}
        <img src={spot_2} style={{position: 'absolute', top: -115, right:-60}}/>
        {addifier > 0 && <h1 className='font-bold text-4xl text-white' style={{position: 'absolute', top: -100, right:-50}}>-{addifier}</h1>
        || <img className='transform scale-125' src={padlock} style={{position: 'absolute', top: -90, right:-25}}/>}
      </div>
      <div className=' mt-32 mx-auto breathing-virus cursor-pointer select-none' {...virusOnClick} onDragStart={e => e.preventDefault()} style={{height: 240, width: 240, backgroundImage: `url(${virus})`}}></div>
    </div>
  </div>
}
