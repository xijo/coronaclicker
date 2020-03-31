import React from 'react'

import padlockG from './images/LockG.svg'
import padlockB from './images/LockB.svg'
import padlockR from './images/LockR.svg'

import virus1 from './images/virus/g1.svg'
import virus2 from './images/virus/g2.svg'
import virus3 from './images/virus/g3.svg'
import virus4 from './images/virus/g4.svg'
import virus5 from './images/virus/g5.svg'
import virus6 from './images/virus/b1.svg'
import virus7 from './images/virus/b2.svg'
import virus8 from './images/virus/b3.svg'
import virus9 from './images/virus/b4.svg'
import virus10 from './images/virus/r1.svg'
import virus11 from './images/virus/r2.svg'
import virus12 from './images/virus/r3.svg'

import spot_1a from './images/virus/spots/green/g1a.svg'
import spot_1b from './images/virus/spots/green/g1b.svg'
import spot_2a from './images/virus/spots/green/g2a.svg'
import spot_2b from './images/virus/spots/green/g2b.svg'
import spot_3a from './images/virus/spots/green/g3a.svg'
import spot_3b from './images/virus/spots/green/g3b.svg'
import spot_4a from './images/virus/spots/green/g4a.svg'
import spot_4b from './images/virus/spots/green/g4b.svg'
import spot_5a from './images/virus/spots/green/g5a.svg'
import spot_5b from './images/virus/spots/green/g5b.svg'
import spot_6a from './images/virus/spots/blue/b1a.svg'
import spot_6b from './images/virus/spots/blue/b1b.svg'
import spot_7a from './images/virus/spots/blue/b2a.svg'
import spot_7b from './images/virus/spots/blue/b2b.svg'
import spot_8a from './images/virus/spots/blue/b3a.svg'
import spot_8b from './images/virus/spots/blue/b3b.svg'
import spot_9a from './images/virus/spots/blue/b4a.svg'
import spot_9b from './images/virus/spots/blue/b4b.svg'
import spot_10a from './images/virus/spots/red/r1a.svg'
import spot_10b from './images/virus/spots/red/r1b.svg'
import spot_11a from './images/virus/spots/red/r2a.svg'
import spot_11b from './images/virus/spots/red/r2b.svg'
import spot_12a from './images/virus/spots/red/r3a.svg'
import spot_12b from './images/virus/spots/red/r3b.svg'

export const Virus = ({virusOnClick, spotsOnClick, addifier, multiplier, received}) => {
  var virus = virus1
  var spot_1 = spot_1a
  var spot_2 = spot_1b

  const isTouchDevice = false //checkTouchDevice()
  const handleClickOrTouch = isTouchDevice ? {onTouchEnd: virusOnClick} : {onClick: virusOnClick}

  if (received < 150) {
    // noch nüschd
  }else if (received >= 150 && received < 300) {
    var virus = virus2
    var spot_1 = spot_2a
    var spot_2 = spot_2b
  }else if (received >= 300 && received < 500) {
    var virus = virus3
    var spot_1 = spot_3a
    var spot_2 = spot_3b
  }else if (received >= 500 && received < 750) {
    var virus = virus4
    var spot_1 = spot_4a
    var spot_2 = spot_4b
  }else if (received >= 750 && received < 1000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 1000 && received < 1400) {
    var virus = virus6
    var spot_1 = spot_6a
    var spot_2 = spot_6b
  }else if (received >= 1400 && received < 1900) {
    var virus = virus7
    var spot_1 = spot_7a
    var spot_2 = spot_7b
  }else if (received >= 1900 && received < 2500) {
    var virus = virus8
    var spot_1 = spot_8a
    var spot_2 = spot_8b
  }else if (received >= 2500 && received < 3000) {
    var virus = virus9
    var spot_1 = spot_9a
    var spot_2 = spot_9b
  }else if (received >= 3000 && received < 5000) {
    var virus = virus10
    var spot_1 = spot_10a
    var spot_2 = spot_10b
  }else if (received >= 5000 && received < 7500) {
    var virus = virus11
    var spot_1 = spot_11a
    var spot_2 = spot_11b
  }else if (received >= 7500){
    var virus = virus12
    var spot_1 = spot_12a
    var spot_2 = spot_12b
  }else{
    var virus = virus6
    var spot_1 = spot_6a
    var spot_2 = spot_6b
  }

  return <div>
    <div className='select-none relative mx-auto' style={{width: 240}}>
      <div onClick={spotsOnClick} className="cursor-pointer">
        <Spot img={spot_1} locked={multiplier <= 1} top={-60} right={-5} height={70} width={90} received={received}>
          <h1 className='font-bold text-xl text-white'>{`x${multiplier}`}</h1>
        </Spot>

        <Spot img={spot_2} locked={addifier <= 0} top={-115} right={-60} height={90} width={90} received={received}>
          <h1 className='font-bold text-4xl text-white'>{`-${addifier}`}</h1>
        </Spot>
      </div>
      <div className='mt-32 w-full breathing-virus cursor-pointer select-none bg-no-repeat bg-center tap-highlight-transparent'
        {...handleClickOrTouch}
        onDragStart={e => e.preventDefault()}
        style={{height: 240, backgroundImage: `url(${virus})`}}></div>
    </div>
  </div>
}

const Spot = (props) => {
  
  var padlock
  if(props.recevied < 1000){
    padlock = padlockG
  }else if(props.recevied < 3000){
    padlock = padlockB
  }else{
    padlock = padlockR
  }

  padlock = padlockG

  return <div className='absolute flex items-center justify-center' style={{width: props.width, height: props.height, top: props.top, right: props.right, backgroundImage: `url(${props.img})`, backgroundRepeat: 'no-repeat'}}>
    {props.locked ? <img src={padlock} /> : props.children}
  </div>
}

const checkTouchDevice = () => {
  try {
    let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

    let mq = function (query) {
      return window.matchMedia(query).matches;
    };

    if (('ontouchstart' in window) || (typeof window.DocumentTouch !== "undefined" && document instanceof window.DocumentTouch)) {
      return true;
    }

    return mq(['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(''));
  } catch (e) {
    console.error('(Touch detect failed)', e);
    return false;
  }
}
