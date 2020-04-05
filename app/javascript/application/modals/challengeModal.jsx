import React from 'react'


export const ChallengeModal = ({ toggleChallenge, challengeStart }) => {

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      <strong className=" font-semibold" >(COVID-)19 Challenge</strong>
      <br />
      <br />
      In dieser Challenge geht es darum so viele Menschen wie nur möglich in 19 Sekunden zu retten.
      <br />
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleChallenge(); challengeStart(); }}>
        START
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleChallenge(); }}>
        CLOSE
      </a>
    </div>
  </div>
}

export const ChallengeEndModal = ({ clicks, toggleEndChallenge, challengeStart }) => {

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      <strong className=" font-semibold" >(COVID-)19 Challenge Ergebnis</strong>
      <br />
      <br />
      Du hast in nur <span className=' font-bold'>19 Sekunden {clicks} Menschen</span> geheilt.
      <br />
      <br />
      Teile deinen Rekord jetzt auf Sozialen Medien und fordere neue Leute heraus!
      <br />
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleEndChallenge(); challengeStart(); }}>
        RETRY
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleEndChallenge(); }}>
        CLOSE
      </a>
    </div>
  </div>
}
