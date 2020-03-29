import React, { useState, useEffect } from 'react'

import { Click } from './click'

const limit = 30

// For every click, add coords of the click to the array of coords. Cycle through
// 10 DOM nodes and move them around, so the memory footprint isn't insane.
export const ClickArea = (props) => {
  const [index, setIndex] = useState(0)
  const [coords, setCoords] = useState([])

  useEffect(() => {
    const newIndex = index === (limit - 1) ? 0 : index + 1
    const newCoords = coords
    newCoords.splice(newIndex, 1, props.coords)
    setIndex(newIndex)
    setCoords(newCoords)
  }, [props.coords])

  const content = [...Array(limit).keys()].map(v => <Click key={v} coords={coords[v]} onClick={props.onClick} decrementer={props.decrementer} />)

  return <>{content}</>
}
