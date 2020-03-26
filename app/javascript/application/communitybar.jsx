import React from 'react'

import unlocked from './svgs/commBar-unlocked1.svg'
import locked from './svgs/commBar-locked1.svg'

export const CommunityBar = ({donoGoals, received, selfDonated, toggleInfoCommBar}) => {
    received = 200
    const percent = Math.floor((received / donoGoals[donoGoals.length-1]) * 100)
    return <div className="mb-8 cursor-pointer" onClick={toggleInfoCommBar}>
    <div>
      <h1 className='flex items-center justify-center' style={{color: '#236A60'}}>Community Achievements</h1>
    </div>
    {selfDonated <= 0 && <img className="mx-auto select-none" src={locked} alt="lockedCommBar"/>
    || <img className="mx-auto select-none" src={unlocked} alt="unlockedCommBar"/>}
    {/* <div className='relative flex items-center justify-center'>
      <div className='border-gray-300 border rounded-sm h-8 w-screen'>
        <div className='h-full bg-teal-500' style={{width: `${percent}%`}}>
            {donoGoals.map((goal) => {
                const tempPercent = Math.floor((goal / donoGoals[donoGoals.length-1]) * 1920)
                return <img key={goal} className='transform scale-75' src={padlock} style={{position: 'absolute', top: 2, left: tempPercent}}/>  
            })}
        </div>
      </div>
    </div> */}
    </div>
}