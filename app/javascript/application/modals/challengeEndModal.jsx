import React from 'react'


export const ChallengeModal = ({ toggleChallenge, challengeStart }) => {

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      <strong className=" font-semibold" >(COVID-)19 Challenge</strong>
      <br />
      Placeholder text for challenge
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleChallenge(); challengeStart(); }}>
        RETRY
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleChallenge(); }}>
        CLOSE
      </a>
    </div>
  </div>
}
