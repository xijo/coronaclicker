import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import {useToggle} from 'react-use'
import {Modal} from './modal'
import {DonateModal} from './donate_modal'
import {Header} from './header'
import {Imprint} from './imprint'
import {Privacy} from './privacy'
import {Virus} from './virus'
import {CommunityBar} from './communitybar'
import {Progress} from './progress'
import {CommBarInfoModal} from './commbar_modal'
import {Goodie} from './goodie_modal'
import {DonoMessagesModal} from './donoMessagesModal'

const cookies = new Cookies()

import UIfx from 'uifx'
import plop0file from './mp3s/plop0.mp3'
import plop1file from './mp3s/plop1.mp3'

import virusSmall from './svgs/virus_filled_yellow.svg'
import toiletpaper from './svgs/toiletpaper.png'
import {TwitterButton} from './twitter_button'
import {InstagramButton} from './instagram_button'
import {FacebookButton} from './facebook_button'
import {InfoButton} from './info_button'
import {checkPropTypes} from 'prop-types'

const plop0 = new UIfx(plop0file)
const plop1 = new UIfx(plop1file)
const donoGoals = [150, 300, 500, 750, 1000, 1400, 1900, 2500, 3000, 4000, 7500, 10000]
var clickCounter = 0

// localstorage

export const Game = (props) => {
  const [counter, setCounter] = useState(cookies.get('counter') || props.counter)
  const [healed, setHealed] = useState(cookies.get('healed') || 0)
  const [donateModal, toggleDonateModal] = useToggle(false)
  const [imprintModal, toggleImprintModal] = useToggle(false)
  const [privacyModal, togglePrivacyModal] = useToggle(false)
  const [commBarModal, toggleCommBarModal] = useToggle(false)
  const [goodieModal, toggleGoodieModal] = useToggle(false)

  const [lastClick, setLastClick] = useState([0, 0])
  const [postdonation, setPostdonation] = useState(false)

  const isTouchDevice = checkPropTypes()

  const getLowDec = () => {
    return parseInt(props.gameLowDecrementer, 10)+(cookies.get('goodie') ? 1 : 0)
  }

  const getHighDec = () => {
    return parseInt(props.gameHighDecrementer, 10)
  }

  const getDecrementer = () => {
    return (getLowDec()+getHighDec())
  }

  const decrementCounter = (event) => {
    setLastClick([event.clientX, event.clientY])
    Math.round(Math.random()) === 1 ? plop0.play() : plop1.play()
    setCounter(counter - getDecrementer())
    setHealed(parseInt(cookies.get('healed')) + getDecrementer())
    if(clickCounter < 19){
      clickCounter++
    }
  }

  useEffect(() => {
    setPostdonation(/donation_\d+/.test(window.location.href))
  }, [])

  useEffect(() => {
    cookies.set('counter', counter, {path: '/', expires: (new Date(2099, 1, 1))})
  }, [counter])

  useEffect(() => {
    cookies.set('healed', healed, {path: '/', expires: (new Date(2099, 1, 1))})
  }, [healed])

  const deactivateGoodie = () => {
    cookies.set('goodie', true, {path: '/', expires: (new Date(2099, 1, 1))})
  }

  const virusOnClick = isTouchDevice ? {onTouchEnd: decrementCounter} : {onClick: decrementCounter}

  return <div className='mt-4'>
    <Header {...props} />

    {postdonation && <Modal onClose={() => {setPostdonation(false);}}><DonoMessagesModal donoAmountUrl={window.location.href}/></Modal>}

    {donateModal && <Modal onClose={toggleDonateModal}><DonateModal received={props.received}/></Modal>}
    {imprintModal && <Modal onClose={toggleImprintModal}><Imprint /></Modal>}
    {privacyModal && <Modal onClose={togglePrivacyModal}><Privacy /></Modal>}
    {commBarModal && <Modal onClose={toggleCommBarModal}><CommBarInfoModal /></Modal>}
    {goodieModal && <Modal onClose={() => {toggleGoodieModal(); deactivateGoodie();}}><Goodie /></Modal>}

    <InfoButton />

    {/* TODO Johannes: die +1 und xY modifier nach donos sollen getrennt sein (und verrechnet werden)
    Ping mich bitte an wenn du das liest dann kann ich dir genauer erklären was ich meine*/}
    <Virus virusOnClick={virusOnClick} spotsOnClick={toggleDonateModal} addifier={getLowDec()} multiplier={getHighDec()} received={props.received}/>

    <ClickArea coords={lastClick} onClick={decrementCounter} decrementer={getDecrementer()} />

    {counter > 0 &&
      <div className='text-4xl antialiased text-teal-800 text-center font-bold mb-4'>
        {counter}
        <p className='font-normal text-xs'>({healed} bereits geheilt)</p>
      </div>
    }

    {counter <= 0 &&
      <div className='max-w-lg mx-auto mb-8 text-center'>
        <div className='text-2xl antialiased text-teal-800 font-bold mb-2'>Du bist unser Held!</div>
        Vielen Dank vom gesamten Corona Clicker-Team dafür, dass du unser Game gespielt hast! :)
        <br />
        ..Aber du dachtest doch nicht wirklich, du hättest den Virus besiegt?!
        <br />
        <br />
        In den kommenden Tagen könnte es zu neuen Ausbrüchen kommen. Come back and fight the Virus! #nextlevel
        <button className='btn mt-2' onClick={() => setCounter(props.infected)}>RESTART!</button>
      </div>
    }

    <div className='mb-4 text-center'>
      {clickCounter >= 19 && !cookies.get('goodie') && <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleGoodieModal}>CLICK ME!</button>}
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>
      {props.donationSum !== '0' && <div className='mt-4 text-teal-600 antialiased'>
        <span className='text-xl font-semibold mr-1'>{props.donationSum} €</span> an DRK gespendet
      </div>}

      <Progress received={props.received} donoGoals={donoGoals}/>
      {props.received >= 100 && <Toiletpaper />}
    </div>

    <div className='m-8'>
    <CommunityBar donoGoals={donoGoals} received={props.received} selfDonated={props.donationSum} toggleInfoCommBar={toggleCommBarModal}/>
    </div>

    <div className='mb-4 text-center'>
      <TwitterButton className='cursor-pointer inline-block' />
      <InstagramButton className='cursor-pointer inline-block ml-2' />
      <FacebookButton className='cursor-pointer inline-block ml-2' />
    </div>


    <div className='text-center mt-6 text-gray-400 cursor-default'>
      <span onClick={toggleImprintModal} className='anchor text-lg'>Impressum</span> | <span onClick={togglePrivacyModal} className='anchor text-lg'>Datenschutz</span>
      <div>#WirVsVirus #care2win</div>
    </div>
  </div>
}

// For every click, add coords of the click to the array of coords. Cycle through
// 10 DOM nodes and move them around, so the memory footprint isn't insane.
const ClickArea = (props) => {
  const [index, setIndex] = useState(0)
  const [coords, setCoords] = useState([])

  useEffect(() => {
    const newIndex = index === 9 ? 0 : index + 1
    const newCoords = coords
    newCoords.splice(newIndex, 1, props.coords)
    setIndex(newIndex)
    setCoords(newCoords)
  }, [props.coords])

  return <>
    <Click coords={coords[0]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[1]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[2]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[3]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[4]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[5]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[6]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[7]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[8]} onClick={props.onClick} decrementer={props.decrementer} />
    <Click coords={coords[9]} onClick={props.onClick} decrementer={props.decrementer} />
  </>
}

// One click, with updated coords, animate shortly, then hide it again.
const Click = ({coords, onClick, decrementer}) => {
  if (!coords) return null

  const [animation, setAnimation] = useState(true)

  useEffect(() => {
    setAnimation(true)
    window.setTimeout(() => setAnimation(false), 2000)
  }, [coords])

  return <div onClick={onClick}>
    <img draggable='false' onClick={onClick} src={virusSmall} className={`h-8 select-none cursor-pointer absolute ${animation ? 'spaceOutUp' : 'hidden'}`} style={{top: coords[1], left: coords[0]}} onDragStart={e => e.preventDefault()} />
    <div onClick={onClick} className={`absolute cursor-pointer text-yellow-400 font-semibold text-4xl select-none ${animation ? 'spaceOutRight' : 'hidden'}`} style={{top: coords[1], left: coords[0]}}>-{decrementer}</div>
  </div>
}

const Toiletpaper = () => {
  return <div className='mb-8'>
    <img src={toiletpaper} />
    <div className='-mt-8' style={{color: '#cbae65', textShadow: '0 0 4px #cbae65'}}>
      Geil! Danke für die großzügige Spende. Es gibt Menschen, die die Situation mit Hamsterklopapier Käufen verschlimmert haben, du hast aber die Situation besser gemacht. Deshalb kriegst du.... ja genau GOLDENES Klopapier.....
    </div>
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
