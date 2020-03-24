import React from 'react'

import virus from './svgs/virus.svg'
import spot_1 from './svgs/Mult_Spot_1.svg'
import spot_2 from './svgs/Mult_Spot_2.svg'
import padlock from './svgs/Lock.svg'

export const Virus = ({virusOnClick, addifier, multiplier}) => {
  return <div>
    <div className='relative mb-8 mx-auto select-none' style={{width: 240}}>
      <img src={spot_1} style={{position: 'absolute', top: -20, right:-40}}/>
      <h1 className='font-bold text-2xl' style={{position: 'absolute', top: -5, right:-5}}>-{addifier}</h1>
      <img src={spot_2} style={{position: 'absolute', top: -75, right:-95}}/>
      {multiplier > 0 && <h1 className='font-bold text-2xl' style={{position: 'absolute', top: -50, right:-60}}>x{multiplier}</h1>
      || <img className='transform scale-125' src={padlock} style={{position: 'absolute', top: -50, right:-60}}/>}
      <img src={virus} height={35} draggable='false' className='mt-20 mx-auto breathing-virus cursor-pointer' {...virusOnClick} onDragStart={e => e.preventDefault()} />
    </div>
  </div>
}
