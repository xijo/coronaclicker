import React, {useState} from 'react'
import {useInterval} from 'react-use'

import logo from './images/logos/logo.png'
import wirvsvirus from './images/logos/wirvsvirus.svg'
import betterplace from './images/logos/betterplace.svg'

export const Header = ({infected}) => {

  const [now, setNow] = useState(new Date())
  // const [count, setCount] = React.useState(0);
  // const [delay, setDelay] = React.useState(1000);
  // const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(() => setNow(new Date()), 1000)

  return <header>
    <div className='flex justify-between items-center mx-2 mb-2'>
      <img src={wirvsvirus} className='h-10' />
      <img src={logo} className='h-10' />
      <img src={betterplace} className='h-4' />
    </div>
    <div className='flex justify-between mx-2'>
      <div className='text-red-300'>
        <div className='text-lg'>
          {prefixZero(now.getDate())}.{prefixZero(now.getMonth() + 1)}.{now.getFullYear()}
        </div>
        {/* <div className='text-sm'>
          {prefixZero(now.getHours())}:{prefixZero(now.getMinutes())}:{prefixZero(now.getSeconds())}
        </div> */}
      </div>
      <div className='text-red-300 text-right'>
        <div className='text-lg'>{infected}</div>
        <div className='text-sm'>infizierte Personen</div>
      </div>
    </div>
  </header>
}

const prefixZero = (value) => {
  const v = value.toString()
  return v.length < 2 ? `0${v}` : v
}
