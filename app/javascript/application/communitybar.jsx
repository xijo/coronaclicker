import React from 'react'

import unlockedp1 from './images/community_bar/cb_p1_ul.svg'
import lockedp1 from './images/community_bar/cb_p1_l.svg'
import unlockedp2 from './images/community_bar/cb_p2_ul.svg'
import lockedp2 from './images/community_bar/cb_p2_l.svg'

export const CommunityBar = ({selfDonated, received, toggleInfoCommBar}) => {

  var cbDisplay = lockedp1

  if(selfDonated > 0){
    if(received < 1400){
      cbDisplay = unlockedp1
    }else{
      cbDisplay = unlockedp2
    }
  }else{
    if(received < 1400){
      cbDisplay = lockedp1
    }else{
      cbDisplay = lockedp2
    }
  }

  return <div className="mb-8 cursor-pointer" onClick={toggleInfoCommBar}>
    <div>
      <h1 className='flex items-center justify-center' style={{color: '#236A60'}}>Community Belohnungen</h1>
    </div>
    <img className="mx-auto select-none" src={cbDisplay} alt="communityBar"/>
    </div>
}
