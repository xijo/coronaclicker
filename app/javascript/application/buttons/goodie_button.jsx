import React from 'react'


export const GoodieButton = ({ healed, cookies, toggleGoodieModal, goodieClickRequirements }) => {
  /**
   * Deactivate goodie (it's cookie) per ID
   */
  const deactivateGoodie = (id) => {
    cookies.set('goodie' + id, true, { path: '/', expires: (new Date(2099, 1, 1)) })
  }

  for(let i = 0; i < goodieClickRequirements.length; i++){
    if(healed >= goodieClickRequirements[i]){
      if(!cookies.get('goodie'+(i+1))){
        return <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={() => { toggleGoodieModal(); deactivateGoodie(i+1); }}>CLICK ME!</button>
      }
    }
  }
  return <></>
}
