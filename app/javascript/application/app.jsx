import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

import virus from './virus.svg'

export const App = (props) => {
  // console.log(props)
  // console.log(cookies.get('counter'))

  const powerups = JSON.parse(props.powerups)

  const [counter, setCounter] = useState(cookies.get('counter') || props.counter)
  const [multiplicator, setMultiplicator] = useState(cookies.get('multiplicator') || 1)

  // const [count, setCount] = React.useState(0);
  // const [delay, setDelay] = React.useState(1000);
  // const [isRunning, toggleIsRunning] = useBoolean(true);

  // useInterval(
  //   () => {
  //     setCount(count + 1);
  //   },
  //   isRunning ? delay : null
  // );

  // console.log(powerups)

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
  }, [counter])

  return <div className='mt-4'>
    <Header {...props} />

    <img src={virus} height={35} className='mx-auto mb-8 mt-8' onClick={() => setCounter(counter - multiplicator)} />

    <div className='text-4xl text-teal-800 text-center font-bold mb-4'>{counter}</div>

    <div className='mb-4 text-center'>
      <a className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 shadow-md cursor-pointer hover:bg-teal-300' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114'>BOOST</a>
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


// const handleCookieChange = (cookie) => {
//   if (cookie.name === trackingCookieName) setTrackingAccepted(cookie.value)
// }

// const acceptTracking = () => {
//   cookies.set(trackingCookieName, 'yes', {path: '/', expires: (new Date(2099, 1, 1))})
//   sendBrowserEvent('tracking-accepted')
// }

// const rejectTracking = () => {
//   cookies.set(trackingCookieName, 'no', {path: '/', expires: (new Date(2099, 1, 1))})
//   sendBrowserEvent('tracking-rejected')
// }

// const openModal = () => {
//   setShowModal(true)
//   sendBrowserEvent('tracking-more-information')
// }

// useEffect(() => {
//   sendBrowserEvent('tracking-banner-show')
//   cookies.addChangeListener(handleCookieChange)
//   return () => cookies.removeChangeListener(handleCookieChange)
// }, [])


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
