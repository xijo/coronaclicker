import React from 'react'

import hands from '../images/boosts/hands.png'
import suit from '../images/boosts/suit.png'
import desinfect from '../images/boosts/desinfect.png'
import mask from '../images/boosts/mask.png'
import mystery from '../images/boosts/mystery.png'
import toiletpaper from '../images/toiletpaper.png'
import distancing from '../images/boosts/social_distancing.png'

export const DonateModal = ({received}) => {
  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm mt-6 mb-4 font-bold'>
      Mit einer Spende wirst Du noch mehr Viren los.
      <br />
      Klick auf den Button und spende ans DRK.
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=1'>
      {/* <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=1'> */}
        <img src={hands} style={{maxHeight: 100}} />
        <span>1 €</span>
        <span>(-1/Click)</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=2'>
      {/* <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=2'> */}
        <img src={desinfect} style={{maxHeight: 100}} />
        <span>2 €</span>
        <span>(-5/Click)</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=5'>
      {/* <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=5'> */}
        <img src={mask} style={{maxHeight: 100}} />
        <span>5 €</span>
        <span>(x2 Mult.)</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=10'>
      {/* <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=10'> */}
        <img src={distancing} style={{maxHeight: 100}} />
        <span>10 €</span>
        <span>(x5 Mult.)</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
    <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=25'>
    {/* <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=25'> */}
        <img src={suit} style={{maxHeight: 100}} />
        <span>25 €</span>
        <span>(-100/Click)</span>
      </a>
      {received < 100 && <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=100'>
      {/* {received < 100 && <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.bp42.com/de/donate/corona-clicker/projects/1114?donation_amount=100'> */}
          <img src={mystery} style={{maxHeight: 100}} />
          <span>+100 €</span>
          <span>({received}/100 €)</span>
        </a>
      || <a className='btn text-center flex-1 mr-2 flex flex-col justify-evenly items-center' href='https://www.betterplace.org/de/donate/coronaclicker/projects/77983?donation_amount=100'>
          <img src={toiletpaper} style={{maxHeight: 100}} />
          <span>Vielen Dank für deine großzügige Spende!</span>
        </a>}
    </div>
  </div>
}
