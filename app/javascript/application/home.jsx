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

        <div className='mb-8'>
          Durch Tippen auf den Virus verminderst du die Zahl der Infizierten. Klicke auf Boost um den Virus schneller zu bekämpfen. Alle Spenden kommen dem Deutschen Roten Kreuz für den Kampf gegen den Corona Virus zugute.
        </div>

        <div className='mb-12'>
          Dieses Projekt befindet sich noch in Entwicklung und wird in den nächsten Tagen noch einige Verbesserung erhalten! #staytuned
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
  </div>
}
