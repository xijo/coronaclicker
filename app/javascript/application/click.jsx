import React, { useState, useEffect } from 'react'

import virusSmall from './images/virus/virus_filled_yellow.svg'


// One click, with updated coords, animate shortly, then hide it again.
export const Click = ({ coords, onClick, decrementer }) => {
  if (!coords) return null

  const [animation, setAnimation] = useState(true)

  useEffect(() => {
    setAnimation(true)
    window.setTimeout(() => setAnimation(false), 2000)
  }, [coords])

  return <div onClick={onClick}>
    <img draggable='false' onClick={onClick} src={virusSmall} className={`h-8 select-none cursor-pointer absolute ${animation ? 'spaceOutUp' : 'hidden'}`} style={{ top: coords[1], left: coords[0] }} onDragStart={e => e.preventDefault()} />
    <div onClick={onClick} className={`absolute cursor-pointer text-yellow-400 font-semibold text-4xl select-none ${animation ? 'spaceOutRight' : 'hidden'}`} style={{ top: coords[1], left: coords[0] }}>-{decrementer}</div>
  </div>
}
