import React from 'react'

import twitterLogoG from '../images/socialmedia/g_twitter.svg'
import twitterLogoB from '../images/socialmedia/b_twitter.svg'
import twitterLogoR from '../images/socialmedia/r_twitter.svg'

export const TwitterButton = (props) => {
  const shareUrl = 'https://www.corona-clicker.de'
  const shareText = 'Ich habe bereits '+props.healed+' Infizierte geheilt. Komm und hilf mit! Zusammen besiegen wir Corona schneller! #care2win #WirvsVirus'

  const handleClick = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  var twitterLogo
  if(props.received < 1000){
    twitterLogo = twitterLogoG
  }else if(props.received < 3000){
    twitterLogo = twitterLogoB
  }else {
    twitterLogo = twitterLogoR
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={twitterLogo} />
  </div>
}
