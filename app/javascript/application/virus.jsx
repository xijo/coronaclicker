import React from 'react'

import virus from './svgs/virus.svg'
import spot_1 from './svgs/Mult_Spot_1.svg'
import spot_2 from './svgs/Mult_Spot_2.svg'
import padlock from './svgs/Lock.svg'

export const Virus = ({virusOnClick, spotsOnClick, addifier, multiplier}) => {
  return <div>
    <div className='relative mb-8 mx-auto select-none' style={{width: 240}}>
      <div onClick={spotsOnClick} className="cursor-pointer">
        <img src={spot_1} style={{position: 'absolute', top: -40, right:5}}/>
        <h1 className='font-bold text-2xl text-white' style={{position: 'absolute', top: -25, right:40}}>-{addifier}</h1>
        <img src={spot_2} style={{position: 'absolute', top: -95, right:-45}}/>
        {multiplier > 0 && <h1 className='font-bold text-2xl text-white' style={{position: 'absolute', top: -70, right:-15}}>x{multiplier}</h1>
        || <img className='transform scale-125' src={padlock} style={{position: 'absolute', top: -70, right:-15}}/>}
      </div>
      <img src={virus} height={35} draggable='false' className='mt-24 mx-auto breathing-virus cursor-pointer' {...virusOnClick} onDragStart={e => e.preventDefault()} />
    </div>
  </div>
}
