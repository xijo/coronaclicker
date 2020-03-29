import React from 'react'

import haus from '../images/goodies/Haus.png'
import nudeln from '../images/goodies/Nudeln.png'
import spuckschutz from '../images/goodies/Spuckschutz.png'
import video from '../images/goodies/Videokonferenz.png'
import spritze from '../images/goodies/Spritze.png'
import handy from '../images/goodies/Handy.png'
import mystery from '../images/boosts/mystery.png'


export const AchievementsModal = ({healed, toggleGoodieModal, toggleAchievements, setGoodieID}) => {
  const advRound = (number, decimal) => {
    return Number((number).toFixed(decimal));
  }

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      <strong className=" font-semibold" >Meine Belohnungen:</strong>
      <br/>
      Heile Infizierte und sammle zusätzliche Belohnungen!
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center'>
        {healed >= 19 && <img src={haus} style={{maxHeight: 100}} onClick={() => {toggleAchievements(); setGoodieID(1); toggleGoodieModal();}}/>
        || <img src={mystery} style={{maxHeight: 100}} />}
        <span>{advRound(healed / 19, 2) <= 1 ? (advRound(healed / 19, 2)*100)+'%' : 'Ausgangssperre'}</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center'>
        {healed >= 1000 && <img src={nudeln} style={{maxHeight: 100}} onClick={() => {toggleAchievements(); setGoodieID(2); toggleGoodieModal();}}/>
        || <img src={mystery} style={{maxHeight: 100}} />}
        <span>{advRound(healed / 1000, 2) <= 1 ? (advRound(healed / 1000, 2)*100)+'%' : 'Nudeln'}</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center'>
        {healed >= 5000 && <img src={spuckschutz} style={{maxHeight: 100}} onClick={() => {toggleAchievements(); setGoodieID(3); toggleGoodieModal();}}/>
        || <img src={mystery} style={{maxHeight: 100}} />}
        <span>{advRound(healed / 5000, 2) <= 1 ? (advRound(healed / 5000, 2)*100)+'%' : 'Spuckschutz'}</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center'>
        {healed >= 10000 && <img src={video} style={{maxHeight: 100}} onClick={() => {toggleAchievements(); setGoodieID(4); toggleGoodieModal();}}/>
        || <img src={mystery} style={{maxHeight: 100}} />}
        <span>{advRound(healed / 10000, 2) <= 1 ? (advRound(healed / 10000, 2)*100)+'%' : 'Videokonferenz'}</span>
      </a>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12 pb-4'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center'>
        {healed >= 50000 && <img src={spritze} style={{maxHeight: 100}} onClick={() => {toggleAchievements(); setGoodieID(5); toggleGoodieModal();}}/>
        || <img src={mystery} style={{maxHeight: 100}} />}
        <span>{advRound(healed / 50000, 2) <= 1 ? (advRound(healed / 50000, 2)*100)+'%' : 'Impfung'}</span>
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center'>
        {healed >= 100000 && <img src={handy} style={{maxHeight: 100}} onClick={() => {toggleAchievements(); setGoodieID(6); toggleGoodieModal();}}/>
        || <img src={mystery} style={{maxHeight: 100}} />}
        <span>{advRound(healed / 100000, 2) <= 1 ? (advRound(healed / 100000, 2)*100)+'%' : 'Liebe vom Team'}</span>
      </a>
    </div>
  </div>
}
