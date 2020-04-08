import React, { useState, useEffect } from 'react'


export const ChallengeModal = ({ toggleChallenge, challengeStart, setChallenger, setScore, setChallenged }) => {

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      <strong className=" font-semibold" >19 Sekunden vs. COVID-19</strong>
      <br />
      <br />
      In dieser Challenge geht es darum innerhalb von 19 Sekunden so viele Menschen wie nur irgendwie möglich zu heilen (Boni und Multiplikatoren werden nicht mit einberechnet).
      <br />
      <br />
      Messe dich mit Freunden und Familie im Kampf gegen Corona.
      <br />
      <br />
      <form className="text-left">
        <label>
          Herausforderer:
          <input type="text" name="herausforderer" onChange={event => setChallenger(event.target.value)} />
        </label>
        <br />
        <label>
          Score:
          <input type="text" name="score" onChange={event => setScore(event.target.value)}/>
        </label>
        <br />
        <label>
          Ich nominiere:
          <input type="text" name="ich_nominiere" onChange={event => setChallenged(event.target.value)}/>
        </label>
        <br />
      </form>
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

export const ChallengeEndModal = ({ clicks, toggleEndChallenge, challengeStart, challenger, score, challenged }) => {

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      {clicks <= score && <strong className=" font-semibold" >Ich habe {challenger} nicht schlagen können. 😓</strong>
    || <strong className=" font-semibold" >Ich habe gegen {challenger} gewonnen! 😎</strong>}
      <br />
      <br />
      Als nächstes nominiere ich {challenged} meinen Highscore von {clicks} zu schlagen!
      <br/>
      Wenn man es nicht schafft muss man 1€ (oder gerne auch mehr) an den Corona-Nothilfefonds des DRK spenden.
      <br/>
      Jede Spende zählt!
      <br/>
      <br/>
      Spielen: www.corona-clicker.de
      <br/>
      <br/>
      #füreinander #care2win
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
