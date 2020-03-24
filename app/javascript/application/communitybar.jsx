import React from 'react'

import padlock from './svgs/Lock.svg'

export const CommunityBar = ({donoGoals, received}) => {
    received = 200
    const percent = Math.floor((received / donoGoals[donoGoals.length-1]) * 100)
    return <>
    <div>
      <h1 className='flex items-center justify-center' style={{color: '#236A60'}}>Community Achievements</h1>
    </div>
    <div className='relative flex items-center justify-center'>
      <div className='border-gray-300 border rounded-sm h-8 w-screen'>
        <div className='h-full bg-teal-500' style={{width: `${percent}%`}}>
            {donoGoals.map((goal) => {
                const tempPercent = Math.floor((goal / donoGoals[donoGoals.length-1]) * 1920)
                return <img key={goal} className='transform scale-75' src={padlock} style={{position: 'absolute', top: 2, left: tempPercent}}/>  
            })}
        </div>
      </div>
    </div>
    </>
}