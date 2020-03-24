import React from 'react'

export const Progress = ({received, donoGoals}) => {

  // Ist dreckig ich weiß, wird noch schöner gemacht :)
  function getColorCode(){
      if (received < 150) {
        return <div className='h-full bg-progbar-lvl-1' style={{width: `${percent}%`}}></div>;}
      else if (received >= 150 && received < 300) {
        return <div className='h-full bg-progbar-lvl-2' style={{width: `${percent}%`}}></div>;}
      else if (received >= 300 && received < 500) {
        return <div className='h-full bg-progbar-lvl-3' style={{width: `${percent}%`}}></div>;}
      else if (received >= 500 && received < 750) {
        return <div className='h-full bg-progbar-lvl-4' style={{width: `${percent}%`}}></div>;}
      else if (received >= 750 && received < 1000) {
        return <div className='h-full bg-progbar-lvl-5' style={{width: `${percent}%`}}></div>;}
      else if (received >= 1000 && received < 1400) {
        return <div className='h-full bg-progbar-lvl-6' style={{width: `${percent}%`}}></div>;}
      else if (received >= 1400 && received < 1900) {
        return <div className='h-full bg-progbar-lvl-7' style={{width: `${percent}%`}}></div>;}
      else if (received >= 1900 && received < 2500) {
        return <div className='h-full bg-progbar-lvl-8' style={{width: `${percent}%`}}></div>;}
      else if (received >= 2500 && received < 3000) {
        return <div className='h-full bg-progbar-lvl-9' style={{width: `${percent}%`}}></div>;}
      else if (received >= 3000 && received < 5000) {
        return <div className='h-full bg-progbar-lvl-10' style={{width: `${percent}%`}}></div>;}
      else if (received >= 5000 && received < 7500) {
        return <div className='h-full bg-progbar-lvl-11' style={{width: `${percent}%`}}></div>;}
      else if (received >= 7500) {
        return <div className='h-full bg-progbar-lvl-12' style={{width: `${percent}%`}}></div>;}
      else {
        return <div className='h-full bg-progbar-lvl-1' style={{width: `${percent}%`}}></div>;}
  }

  function predicate(x) { return x > received }
  const currGoal = donoGoals.filter(function(x) { return predicate(x) })[0]
  const way = received % currGoal
  const percent = Math.floor((way / currGoal) * 100)
  return <>
    <div className='flex items-center justify-center mt-4'>
    <span className='text-sm text-gray-600 cursor-default'>{way} €</span>
      <div className='mx-2 order-gray-300 border rounded-sm h-3' style={{width: 250}}>
        {/* <div className='h-full bg-progbar-lvl-1' style={{width: `${percent}%`}}></div> */}
        {getColorCode()}
      </div>
      <span className='text-sm text-gray-600 cursor-default'>{currGoal} €</span>
    </div>
    <span className='text-sm text-gray-600 cursor-default'>Wir haben bereits {received} € gesammelt</span>
  </>
}