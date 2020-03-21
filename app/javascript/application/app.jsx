import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

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

  console.log(powerups)

  const reduceCounter = (count) => {
    setCounter(counter - count)
  }

  const addMultiplicator = (count) => {
    const newMultiplicator = multiplicator * count
    cookies.set('multiplicator', newMultiplicator, {path: '/', expires: (new Date(2099, 1, 1))})
    setMultiplicator(newMultiplicator)
  }

  useEffect(() => {
    cookies.set('counter', counter, {path: '/', expires: (new Date(2099, 1, 1))})
  }, [counter])

  return <div>
    <div onClick={() => setCounter(counter - multiplicator)}>VIRUS</div>
    Aktuell {counter}

    <a href='https://www.bp42.com/de/donate/corona-clicker/projects/1114'>Jetzt spenden</a>

    {powerups.map(powerup => <Powerup key={powerup.id} {...powerup} reduceCounter={reduceCounter} addMultiplicator={addMultiplicator} />)}

  </div>
}

const Powerup = (props) => {
  const [redeemed, setRedeemed] = useState(cookies.get(props.id) == 'redeemed')

  const redeem = () => {
    cookies.set(props.id, 'redeemed', {path: '/', expires: (new Date(2099, 1, 1))})

    if (props.amount < 2) {
      props.reduceCounter(1000)
    } else {
      props.addMultiplicator(props.amount)
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
