import React from 'react'

import instagramLogo from './svgs/instagram.png'

export const InstagramButton = (props) => {
  // const shareUrl = 'https://www.corona-clicker.de'

  const handleClick = () => {
    const url = `https://instagram.com`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={instagramLogo} />
  </div>
}
