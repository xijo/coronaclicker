import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const App = (props) => {
  // console.log(props)
  console.log(cookies.get('counter') )

  const [counter, setCounter] = useState(cookies.get('counter') || props.counter)

  // const [count, setCount] = React.useState(0);
  // const [delay, setDelay] = React.useState(1000);
  // const [isRunning, toggleIsRunning] = useBoolean(true);

  // useInterval(
  //   () => {
  //     setCount(count + 1);
  //   },
  //   isRunning ? delay : null
  // );

  useEffect(() => {
    cookies.set('counter', counter, {path: '/', expires: (new Date(2099, 1, 1))})
  }, [counter])

  return <div onClick={() => setCounter(counter - 1)}>
    Aktuell {counter}

    <a href='https://www.bp42.com/de/donate/corona-clicker/projects/1114'>Jetzt spenden</a>
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
