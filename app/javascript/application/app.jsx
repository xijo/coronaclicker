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
    // window.setTimeout(() => setClicks())
    // console.log(event)
    // console.log(event.clientX)
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

    <div className='relative mb-8 mt-8 mx-auto' style={{width: 240}}>
      <img src={virus} height={35} className='mx-auto breathing-virus' onClick={decrementCounter} />

    </div>
    <div className={`absolute text-yellow-400 font-semibold text-4lg bottom-0 right-0 ${clickAnimation ? 'visible' : 'hidden'}`} style={{top: lastClick[1], left: lastClick[0]}}>-{props.decrementer}</div>

    <div className='text-4xl text-teal-800 text-center font-bold mb-4'>{counter}</div>

    <div className='mb-4 text-center'>
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>
    </div>

    <span onClick={toggleImprintModal}>Impressum</span>
  </div>
}
