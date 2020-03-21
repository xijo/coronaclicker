import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import {useToggle} from 'react-use'
import {Modal} from './modal'
import {DonateModal} from './donate_modal'

const cookies = new Cookies()

import virus from './virus.svg'

export const App = (props) => {
  const powerups = JSON.parse(props.powerups)

  const [counter, setCounter] = useState(cookies.get('counter') || props.counter)
  const [multiplicator, setMultiplicator] = useState(cookies.get('multiplicator') || 1)
  const [clickAnimation, setClickAnimation] = useState(false)
  const [donateModal, toggleDonateModal] = useToggle(false)

  const reduceCounter = (count) => {
    setCounter(counter - count)
  }

  const addMultiplicator = (count) => {
    const newMultiplicator = multiplicator + count
    cookies.set('multiplicator', newMultiplicator, {path: '/', expires: (new Date(2099, 1, 1))})
    setMultiplicator(newMultiplicator)
  }

  const multiplyMultiplicator = (count) => {
    const newMultiplicator = multiplicator * count
    cookies.set('multiplicator', newMultiplicator, {path: '/', expires: (new Date(2099, 1, 1))})
    setMultiplicator(newMultiplicator)
  }

  useEffect(() => {
    cookies.set('counter', counter, {path: '/', expires: (new Date(2099, 1, 1))})
    setClickAnimation(true)
    window.setTimeout(() => setClickAnimation(false), 1000)
  }, [counter])

  return <div className='mt-4'>
    <Header {...props} />

    {donateModal && <Modal onClose={toggleDonateModal}><DonateModal /></Modal>}

    <div className='relative mb-8 mt-8 mx-auto' style={{width: 240}}>
      <img src={virus} height={35} className='mx-auto breathing-virus' onClick={() => setCounter(counter - multiplicator)} />

      <div className={`absolute text-yellow-400 font-semibold text-4lg bottom-0 right-0 ${clickAnimation ? 'visible spaceOutRight' : 'hidden'}`}>-10</div>
    </div>


    <div className='text-4xl text-teal-800 text-center font-bold mb-4'>{counter}</div>

    <div className='mb-4 text-center'>
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>
    </div>

    {powerups.map(powerup => <Powerup key={powerup.id} {...powerup} reduceCounter={reduceCounter} addMultiplicator={addMultiplicator} multiplyMultiplicator={multiplyMultiplicator} />)}

  </div>
}

const Powerup = (props) => {
  const [redeemed, setRedeemed] = useState(cookies.get(props.id) == 'redeemed')

  const redeem = () => {
    cookies.set(props.id, 'redeemed', {path: '/', expires: (new Date(2099, 1, 1))})

    if (props.amount < 2) {
      props.addMultiplicator(1)
    } else if (props.amount < 10) {
      props.multiplyMultiplicator(2)
    } else {
      props.multiplyMultiplicator(10)
    }
    setRedeemed(true)
  }
  const unredeem = () => {
    cookies.remove(props.id, {path: '/'})
  }

  if (redeemed) return null
  return <div>{props.id} {props.amount}
    <button onClick={redeem}>Redeem</button>
    <button onClick={unredeem}>Unredeem</button>
  </div>
}

const Header = ({infected}) => {
  return <div className='flex justify-between mx-2'>
    <div className='text-red-300'>
      <div className='text-lg'>DATUM</div>
      <div className='text-sm'>UHRXEIT</div>
    </div>

    <div className='text-red-300 text-right'>
      <div className='text-lg'>{infected}</div>
      <div className='text-sm'>infizierte Personen</div>
    </div>
  </div>
}
