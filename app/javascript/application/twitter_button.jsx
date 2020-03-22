import React from 'react'

import twitterLogo from './svgs/twitter.png'

export const TwitterButton = (props) => {
  const shareUrl = 'https://www.corona-clicker.de'
  const shareText = `Ich bekämpfe gerade den Corona Virus in Echtzeit und mit realitätsgetreuen Zahlen. Versuch’s doch auch mal! Mein aktueller Score beträgt: ${props.counter} Infizierte`

  const handleClick = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={twitterLogo} />
  </div>
}
