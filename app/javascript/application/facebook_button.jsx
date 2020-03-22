import React from 'react'

import facebookLogo from './svgs/facebook.png'

export const FacebookButton = (props) => {
  const shareText = `Ich bekämpfe gerade den Corona Virus in Echtzeit und mit realitätsgetreuen Zahlen. Versuch’s doch auch mal! Mein aktueller Score beträgt: ${props.counter} Infizierte`

  const handleClick = () => {
    const url = `https://facebook.com/sharer/sharer.php?u=www.corona-clicker.de&quote=${encodeURIComponent(shareText)}`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={facebookLogo} />
  </div>
}
