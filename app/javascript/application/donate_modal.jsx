import React from 'react'

import hands from './svgs/hands.png'
import suit from './svgs/suit.png'
import desinfect from './svgs/desinfect.png'
import mask from './svgs/mask.png'
import mystery from './svgs/mystery.png'

export const DonateModal = () => {
  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm mt-6 mb-8'>
      Mit einer Spende wirst Du noch mehr Viren los.
      <br />
      Klick auf den Button und spende ans DRK.
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=1'>
        <img src={hands} className='w-full' />
        <span>Spende 1 €</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=2'>
        <img src={desinfect} className='w-full' />
        <span>Spende 2 €</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=5'>
        <img src={mask} className='w-full' />
        <span>Spende 5 €</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=10'>
        <img src={suit} style={{height: 200}} />
        <span>Spende 10 €</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=100'>
        <img src={mystery} className='w-full' />
        <span>Spende über 100 €</span>
      </a>
    </div>
  </div>
}
