import React from 'react'

import unlocked from './images/community_bar/commBar-unlocked1.svg'
import locked from './images/community_bar/commBar-locked1.svg'

export const CommunityBar = ({donoGoals, received, selfDonated, toggleInfoCommBar}) => {
    return <div className="mb-8 cursor-pointer" onClick={toggleInfoCommBar}>
    <div>
      <h1 className='flex items-center justify-center' style={{color: '#236A60'}}>Community Belohnungen</h1>
    </div>
    {selfDonated <= 0 && <img className="mx-auto select-none" src={locked} alt="lockedCommBar"/>
    || <img className="mx-auto select-none" src={unlocked} alt="unlockedCommBar"/>}
    </div>
}