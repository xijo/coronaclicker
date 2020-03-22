import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import {useToggle} from 'react-use'
import {Modal} from './modal'
import {DonateModal} from './donate_modal'
import {Header} from './header'
import {Imprint} from './imprint'
import {Privacy} from './privacy'

const cookies = new Cookies()

import UIfx from 'uifx'
import plop0file from './mp3s/plop0.mp3'
import plop1file from './mp3s/plop1.mp3'

import virus from './svgs/virus.svg'
import virusSmall from './svgs/virus_filled_yellow.svg'
import {TwitterButton} from './twitter_button'
import {InstagramButton} from './instagram_button'
import {FacebookButton} from './facebook_button'

// localstorage

export const Game = (props) => {
  const [counter, setCounter] = useState(cookies.get('counter') || props.counter)
  const [donateModal, toggleDonateModal] = useToggle(false)
  const [imprintModal, toggleImprintModal] = useToggle(false)
  const [privacyModal, togglePrivacyModal] = useToggle(false)

  const [lastClick, setLastClick] = useState([0, 0])

  const plop0 = new UIfx(plop0file)
  const plop1 = new UIfx(plop1file)

  const decrementCounter = (event) => {
    setLastClick([event.clientX, event.clientY])
    Math.round(Math.random()) === 1 ? plop0.play() : plop1.play()
    setCounter(counter - props.decrementer)
  }

  useEffect(() => {
    cookies.set('counter', counter, {path: '/', expires: (new Date(2099, 1, 1))})
  }, [counter])

  return <div className='mt-4'>
    <Header {...props} />

    {donateModal && <Modal onClose={toggleDonateModal}><DonateModal /></Modal>}
    {imprintModal && <Modal onClose={toggleImprintModal}><Imprint /></Modal>}
    {privacyModal && <Modal onClose={togglePrivacyModal}><Privacy /></Modal>}

    <div className='relative mb-8 mt-8 mx-auto select-none' style={{width: 240}}>
      <img src={virus} height={35} draggable='false' className='mx-auto breathing-virus select-none cursor-pointer' onClick={decrementCounter} onDragStart={e => e.preventDefault()} />
    </div>

    <ClickArea coords={lastClick} onClick={decrementCounter} decrementer={props.decrementer} />

    {counter > 0 &&
      <div className='text-4xl antialiased text-teal-800 text-center font-bold mb-4'>{counter}</div>
    }

    {counter <= 0 &&
      <div className='max-w-lg mx-auto mb-8 text-center'>
        <div className='text-2xl antialiased text-teal-800 font-bold mb-2'>Du bist unser Held!</div>
        Vielen Dank vom gesamten CoronaClickerTeam, dass du unser Game gespielt hast! :)
        <br />
        ..Aber du dachtest doch nicht wirklich, du hättest den Virus besiegt?!
        <br />
        <br />
        In den kommenden Tagen könnte es zu neuen Ausbrüchen kommen. Come back and Fight the Virus! #nextlevel

        <button className='btn mt-2' onClick={() => setCounter(props.infected)}>RESTART!</button>
      </div>
    }

    <div className='mb-4 text-center'>
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>

      {props.donationSum !== '0' && <div className='mt-4 text-teal-600 antialiased'>
        <span className='text-xl font-semibold mr-1'>{props.donationSum} €</span> an DRK gespendet
      </div>}

      <Progress received={props.received} />
    </div>

    <div className='mb-4 text-center'>
      <TwitterButton className='cursor-pointer inline-block' counter={counter} />
      <InstagramButton className='cursor-pointer inline-block ml-2' counter={counter} />
      <FacebookButton className='cursor-pointer inline-block ml-2' counter={counter} />
    </div>


    <div className='text-center mt-8 mb-6 text-gray-400 cursor-default'>
      <span onClick={toggleImprintModal} className='anchor text-lg'>Impressum</span> | <span onClick={togglePrivacyModal} className='anchor text-lg'>Datenschutz</span>
      <div>#WirVsVirus #Gamification</div>
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

const Progress = ({received}) => {
  const way = received % 1000
  const percent = Math.floor((way / 1000) * 100)
  return <>
    <div className='flex items-center justify-center mt-4'>
      <span className='text-sm text-gray-600 cursor-default'>{way} €</span>
      <div className='mx-2 order-gray-300 border rounded-sm h-3' style={{width: 250}}>
        <div className='h-full bg-teal-500' style={{width: `${percent}%`}}></div>
      </div>
      <span className='text-sm text-gray-600 cursor-default'>1000 €</span>
    </div>
    <span className='text-sm text-gray-600 cursor-default'>Wir haben bereits {received} € gesammelt</span>
  </>
}
