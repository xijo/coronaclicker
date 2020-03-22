import React from 'react'

import facebookLogo from './svgs/facebook.png'

export const FacebookButton = (props) => {
  const shareText = 'Komm und hilf mit. Zusammen besiegen wir Corona schneller! #caretowin #WirvsVirus'

  const handleClick = () => {
    const url = `https://facebook.com/sharer/sharer.php?u=www.corona-clicker.de&quote=${encodeURIComponent(shareText)}`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={facebookLogo} />
  </div>
}
