import React from 'react'

import padlock from './svgs/Lock.svg'

import virus1 from './svgs/virus_versions/g1.svg'
import virus2 from './svgs/virus_versions/g2.svg'
import virus3 from './svgs/virus_versions/g3.svg'
import virus4 from './svgs/virus_versions/g4.svg'
import virus5 from './svgs/virus_versions/g5.svg'

import spot_1a from './svgs/spot_versions/g1a.svg'
import spot_1b from './svgs/spot_versions/g1b.svg'
import spot_2a from './svgs/spot_versions/g2a.svg'
import spot_2b from './svgs/spot_versions/g2b.svg'
import spot_3a from './svgs/spot_versions/g3a.svg'
import spot_3b from './svgs/spot_versions/g3b.svg'
import spot_4a from './svgs/spot_versions/g4a.svg'
import spot_4b from './svgs/spot_versions/g4b.svg'
import spot_5a from './svgs/spot_versions/g5a.svg'
import spot_5b from './svgs/spot_versions/g5b.svg'

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
        {addifier > 0 && <h1 className='font-bold text-2xl text-white' style={{position: 'absolute', top: -42, right:20}}>-{addifier}</h1>
        || <img src={padlock} style={{position: 'absolute', top: -40, right:25}}/>}
        <img src={spot_2} style={{position: 'absolute', top: -110, right:-60}}/>
        {multiplier > 1 && <h1 className='font-bold text-2xl text-white' style={{position: 'absolute', top: -85, right:-40}}>x{multiplier}</h1>
        || <img className='transform scale-125' src={padlock} style={{position: 'absolute', top: -85, right:-30}}/>}
      </div>
      <img src={virus} height={35} draggable='false' className=' mt-32 mx-auto breathing-virus cursor-pointer' {...virusOnClick} onDragStart={e => e.preventDefault()} />
    </div>
  </div>
}
