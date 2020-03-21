import React from 'react'

import spray from './svgs/spray.svg'

export const DonateModal = () => {
  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm mt-6 mb-8'>
      Mit einer Spende wirst Du noch mehr Viren los.
      <br/>
      Klick aus den Button und spende ans DRK.
    </div>
    <div className='flex items-center'>
      <img src={spray} />
      <a className='btn ml-2' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=1'>1 Boost = 1€</a>
    </div>
    <div className='flex items-center'>
      <img src={spray} />
      <a className='btn ml-2' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=2'>2x Boost = 2€</a>
    </div>
    <div className='flex items-center'>
      <img src={spray} />
      <a className='btn ml-2' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=10'>10x Boost = 10€</a>
    </div>
  </div>
}

// href = 'https://www.bp42.com/de/donate/corona-clicker/projects/1114'
