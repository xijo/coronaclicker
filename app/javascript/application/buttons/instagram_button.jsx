import React from 'react'

import instagramLogoG from '../images/socialmedia/g_instagram.svg'
import instagramLogoB from '../images/socialmedia/b_instagram.svg'
import instagramLogoR from '../images/socialmedia/r_instagram.svg'

export const InstagramButton = (props) => {

  const handleClick = () => {
    const url = `https://www.instagram.com/corona_clicker/`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  var instagramLogo
  if(props.received < 1000){
    instagramLogo = instagramLogoG
  }else if(props.received < 3000){
    instagramLogo = instagramLogoB
  }else {
    instagramLogo = instagramLogoR
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={instagramLogo} />
  </div>
}
