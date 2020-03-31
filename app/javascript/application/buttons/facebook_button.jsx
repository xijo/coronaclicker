import React from 'react'

import facebookLogoG from '../images/socialmedia/g_facebook.svg'
import facebookLogoB from '../images/socialmedia/b_facebook.svg'
import facebookLogoR from '../images/socialmedia/r_facebook.svg'

export const FacebookButton = (props) => {
  const shareText = 'Ich habe bereits '+props.healed+' Infizierte geheilt. Komm und hilf mit! Zusammen besiegen wir Corona schneller! #care2win #WirvsVirus'

  const handleClick = () => {
    const url = `https://facebook.com/sharer/sharer.php?u=www.corona-clicker.de&quote=${encodeURIComponent(shareText)}`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  var facebookLogo
  if(props.received < 1000){
    facebookLogo = facebookLogoG
  }else if(props.received < 3000){
    facebookLogo = facebookLogoB
  }else {
    facebookLogo = facebookLogoR
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={facebookLogo} />
  </div>
}
