import React, {useState, useEffect} from 'react'
import {useToggle} from 'react-use'
import {Modal} from './modal'
import {Header} from './header'
import {Imprint} from './imprint'

import drk from './svgs/drk.svg'
import betterplace from './svgs/betterplace.svg'
import wirvsvirus from './svgs/wirvsvirus.svg'


export const Home = (props) => {
  const [imprintModal, toggleImprintModal] = useToggle(false)

  return <div className='mt-4'>
    <Header {...props} />

    <Modal>
      <div className='text-teal-800 text-center p-4'>
        <div className='mt-8 mb-6'>Willkommen bei Corona-Clicker</div>

        <div className='mb-12'>
          Durch Tippen aus der Virus vermindest du die Zahl der Infizierten. Klicke auf Boost um das Virus schneller zu bekämpfen. Alle Spenden kommen dem deutschen Roten Kreuz für den Kampf gegen das Corona Virus zugute.
        </div>

        <a href='/games/new' className='btn block mb-12'>PLAY</a>

        <span onClick={toggleImprintModal} className='anchor text-lg'>Impressum</span>
        <div className='text-gray-400'>#WirVsVirus #Gamification</div>

        <div className='flex justify-between items-center mt-6 mb-2'>
          <img src={wirvsvirus} className='h-12' />
          <img src={betterplace} className='h-6' />
          <img src={drk} className='h-10' />
        </div>

      </div>
    </Modal>

    {imprintModal && <Modal onClose={toggleImprintModal}><Imprint /></Modal>}
    {/*

    <div className='relative mb-8 mt-8 mx-auto select-none' style={{width: 240}}>
      <img src={virus} height={35} draggable='false' className='mx-auto breathing-virus select-none cursor-pointer' onClick={decrementCounter} onDragStart={e => e.preventDefault()} />
    </div>

    <ClickArea coords={lastClick} onClick={decrementCounter} decrementer={props.decrementer} />

    <div className='text-4xl text-teal-800 text-center font-bold mb-4'>{counter}</div>

    <div className='mb-4 text-center'>
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>
    </div>
    */}

  </div>
}
