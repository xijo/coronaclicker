import React from 'react'

import twitterLogo from './svgs/socialmedia/g_twitter.svg'

export const TwitterButton = (props) => {
  const shareUrl = 'https://www.corona-clicker.de'
  const shareText = 'Komm und hilf mit! Zusammen besiegen wir Corona schneller! #care2win #WirvsVirus'

  const handleClick = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
  }

  return <div onClick={handleClick} className={props.className || ''}>
    <img src={twitterLogo} />
  </div>
}
