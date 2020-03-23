import React from 'react'

import hands from './svgs/hands.png'
import suit from './svgs/suit.png'
import desinfect from './svgs/desinfect.png'
import mask from './svgs/mask.png'
import mystery from './svgs/mystery.png'
import toiletpaper from './svgs/toiletpaper.png'

export const DonateModal = ({received}) => {
  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm mt-6 mb-8'>
      Mit einer Spende wirst Du noch mehr Viren los.
      <br />
      Klick auf den Button und spende ans DRK.
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=1'>
        <img src={hands} style={{maxHeight: 100}} />
        <span>Spende 1 €</span>
        <span>(-1 pro Click)</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=2'>
        <img src={desinfect} style={{maxHeight: 100}} />
        <span>Spende 2 €</span>
        <span>(x2 Mult.)</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=5'>
        <img src={mask} style={{maxHeight: 100}} />
        <span>Spende 5 €</span>
        <span>(x5 Mult.)</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=10'>
        <img src={suit} style={{maxHeight: 100}} />
        <span>Spende 10 €</span>
        <span>(x10 Mult.)</span>
      </a>
    </div>

    {received < 100 && <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=100'>
        <img src={mystery} style={{maxHeight: 100}} />
        <span>Spende über 100 €</span>
        <span>({received} € von 100 €)</span>
      </a>
    </div>
    || <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=100'>
        <img src={toiletpaper} style={{maxHeight: 100}} />
        <span>Vielen Dank für deine großzügige Spende!</span>
      </a>
    </div>}
  </div>
}
