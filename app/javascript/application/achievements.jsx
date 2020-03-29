import React from 'react'


export const Achievements = ({healed, toggleAchievements}) => {
    return <div className="mb-8 text-center">
      <div>
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleAchievements}>Meine Belohnungen</button>
        {/* <h1 className='flex items-center justify-center' style={{color: '#236A60'}}>Personal Achievements</h1> */}
      </div>
    </div>
}