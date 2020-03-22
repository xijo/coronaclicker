import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import {useToggle} from 'react-use'
import {Modal} from './modal'
import {DonateModal} from './donate_modal'
import {Header} from './header'
import {Imprint} from './imprint'

const cookies = new Cookies()

import UIfx from 'uifx'
import plop0file from './mp3s/plop0.mp3'
import plop1file from './mp3s/plop1.mp3'

import virus from './svgs/virus.svg'

// localstorage

export const App = (props) => {
  const [counter, setCounter] = useState(cookies.get('counter') || props.counter)
  const [clickAnimation, setClickAnimation] = useState(false)
  const [donateModal, toggleDonateModal] = useToggle(false)
  const [imprintModal, toggleImprintModal] = useToggle(false)

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
    setClickAnimation(true)
    window.setTimeout(() => setClickAnimation(false), 1000)
  }, [counter])

  return <div className='mt-4'>
    <Header {...props} />

    {donateModal && <Modal onClose={toggleDonateModal}><DonateModal /></Modal>}
    {imprintModal && <Modal onClose={toggleImprintModal}><Imprint /></Modal>}

    <div className='relative mb-8 mt-8 mx-auto select-none' style={{width: 240}}>
      <img src={virus} height={35} draggable='false' className='mx-auto breathing-virus select-none' onClick={decrementCounter} onDragStart={e => e.preventDefault()} />
    </div>

    <ClickArea coords={lastClick} onClick={decrementCounter} />

    <div className='text-4xl text-teal-800 text-center font-bold mb-4'>{counter}</div>

    <div className='mb-4 text-center'>
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>
    </div>

    <span onClick={toggleImprintModal}>Impressum</span>
  </div>
}

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

  console.log(coords)

  return <>
    <Click coords={coords[0]} onClick={props.onClick} />
    <Click coords={coords[1]} onClick={props.onClick} />
    <Click coords={coords[2]} onClick={props.onClick} />
    <Click coords={coords[3]} onClick={props.onClick} />
    <Click coords={coords[4]} onClick={props.onClick} />
    <Click coords={coords[5]} onClick={props.onClick} />
    <Click coords={coords[6]} onClick={props.onClick} />
    <Click coords={coords[7]} onClick={props.onClick} />
    <Click coords={coords[8]} onClick={props.onClick} />
    <Click coords={coords[9]} onClick={props.onClick} />
  </>
}

const Click = ({coords, onClick}) => {
  if (!coords) return null

  const [animation, setAnimation] = useState('spaceOutRight')

  useEffect(() => {
    setAnimation('spaceOutRight')
    window.setTimeout(() => setAnimation('hidden'), 200)
  }, [coords])

  return <div onClick={onClick} className={`absolute text-yellow-400 font-semibold text-4xl select-none ${animation}`} style={{top: coords[1], left: coords[0]}}>+1</div>
}
