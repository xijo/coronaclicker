import React from 'react'

import padlock from './images/Lock.svg'

import virus1 from './images/virus/g1.svg'
import virus2 from './images/virus/g2.svg'
import virus3 from './images/virus/g3.svg'
import virus4 from './images/virus/g4.svg'
import virus5 from './images/virus/g5.svg'
import virus6 from './images/virus/b1.svg'
import virus7 from './images/virus/b2.svg'

import spot_1a from './images/virus/spots/g1a.svg'
import spot_1b from './images/virus/spots/g1b.svg'
import spot_2a from './images/virus/spots/g2a.svg'
import spot_2b from './images/virus/spots/g2b.svg'
import spot_3a from './images/virus/spots/g3a.svg'
import spot_3b from './images/virus/spots/g3b.svg'
import spot_4a from './images/virus/spots/g4a.svg'
import spot_4b from './images/virus/spots/g4b.svg'
import spot_5a from './images/virus/spots/g5a.svg'
import spot_5b from './images/virus/spots/g5b.svg'
import spot_6a from './images/virus/spots/b1a.svg'
import spot_6b from './images/virus/spots/b1b.svg'
import spot_7a from './images/virus/spots/b2a.svg'
import spot_7b from './images/virus/spots/b2b.svg'

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
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 1400 && received < 1900) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 1900 && received < 2500) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 2500 && received < 3000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 3000 && received < 5000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 5000 && received < 7500) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else if (received >= 7500 && received <= 10000) {
    var virus = virus5
    var spot_1 = spot_5a
    var spot_2 = spot_5b
  }else {
    var virus = virus7
    var spot_1 = spot_7a
    var spot_2 = spot_7b
  }

  return <div>
    <div className='select-none relative mx-auto' style={{width: 240}}>
      <div onClick={spotsOnClick} className="cursor-pointer">
        <Spot img={spot_1} locked={multiplier <= 1} top={-60} right={-5} height={70} width={90}>
          <h1 className='font-bold text-xl text-white'>{`x${multiplier}`}</h1>
        </Spot>

        <Spot img={spot_2} locked={addifier <= 0} top={-115} right={-60} height={90} width={90}>
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
