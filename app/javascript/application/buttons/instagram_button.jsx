import React from 'react'

import instagramLogo from '../images/socialmedia/g_instagram.svg'

export const InstagramButton = (props) => {

  const handleClick = () => {
    const url = `https://www.instagram.com/corona_clicker/`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={instagramLogo} />
  </div>
}
