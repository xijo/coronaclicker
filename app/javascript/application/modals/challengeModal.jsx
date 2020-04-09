import React, { useState, useEffect } from 'react'


export const ChallengeModal = ({ toggleChallenge, challengeStart, setScore, setDonation }) => {

  const evalInput = (mode, value) => {
    if (value == "" || isNaN(parseInt(value))) {
      return (mode == 1 ? 0 : 1)
    }
    return parseInt(value)
  }

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      <strong className=" font-semibold" >19Sekunden vs. Covid19 - Die CoronaClickerChallenge</strong>
      <br />
      <br />
      In dieser Challenge ist es dein Ziel, innerhalb von 19 Sekunden so oft wie möglich auf den Virus zu tippen. Messe dich mit Freunden und Familie im Kampf gegen Corona! Dem Gewinner gebührt unendlicher Ruhm und Ehre ..und wer verliert, spendet dafür 1€ ans Deutsche Rote Kreuz und hilft damit letztendlich den Menschen, die derzeit auf jede Hilfe angewiesen sind. Wettschulden sind schließlich Ehrenschulden.😉 #füreinander
      <br />
      <br />
      Falls du bereits nominiert wurdest, gebe im Folgenden bitte die Punktzahl deines Freundes an, die du überbieten musst. Willst du hingegen eine neue Challenge starten, ohne bisher nominiert worden zu sein, gebe stattdessen einfach eine 0 ein.
      <br />
      <br />
      <form className=" text-left">
        <label>
          <span className=" font-semibold">Punktzahl deines Freundes: </span>
          <input type="text" name="score" onChange={event => setScore(evalInput(1, event.target.value))} />
        </label>
        <br />
        <label>
          <span className=" font-semibold">Spende bei Niederlage (Standard 1€): </span>
          <input type="text" name="donation_on_loss" onChange={event => setDonation(evalInput(2, event.target.value))} />
        </label>
        <br />
      </form>
    </div>

    <div className='flex rounded-lg mb-4 md:px-12'>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleChallenge(); challengeStart(1); }}>
        START
      </a>
      <a className='btn text-center flex-1 ml-2 flex flex-col justify-evenly items-center' onClick={() => { toggleChallenge(); }}>
        BEENDEN
      </a>
    </div>
  </div>
}

// Onyl enter score -> play challenge -> screen depending on score -> blanks where usernames should be -> screenshottable for insta and text share for whatsapp

export const ChallengeEndModal = ({ clicks, toggleEndChallenge, challengeStart, score, challengeDonation, toggleDonateModal }) => {

  return <div className='m-2'>
    <div className='text-center text-teal-600 font-light text-sm p-4'>
      {score == 0 && <strong className=" font-semibold" >Ich habe habe eine neue Corona-Clicker Challenge gestartet.</strong>
        || clicks <= score && <strong className=" font-semibold" >Ich habe gegen ____________ verloren und spende daher {challengeDonation}€.</strong>
        || <strong className=" font-semibold" >Ich habe gegen ____________ gewonnen. 😎</strong>}
      <br />
      <br />
      Ich nominiere ____________, ____________, _____________ und _____________, meine Punktzahl von <span className="font-semibold">{clicks}</span> zu schlagen.
      <br />
      Falls ihr das nicht schaffen solltet, müsst Ihr 1€ (oder gerne mehr) an den Corona-Nothilfefonds des DRK spenden.
      <br />
      #füreinander
      <br />
      Jede Spende zählt!
      <br />
      <br />
      Spielen und Spenden: www.corona-clicker.de
      <br />
      <br />
      #endlichmalnesinnvolleinstagramchallenge
      <br />
      <br />
      PS: Screenshotte diesen Text und fordere deine Freunde heraus!
    </div>
    <div className="text-center">
    {clicks <= score && challengeDonation > 0 && <span className="text-xs text-gray-600">Klicke auf spenden um deine Ehrenschulden einzulösen.</span>
    || <span className="text-xs text-gray-600">Willst du trotzdem spenden? Jeder Euro zählt!</span>}
    </div>
    <div className='flex rounded-lg'>
      <a className='btn m-1 text-center flex-1 flex flex-col justify-evenly items-center' onClick={() => { toggleEndChallenge(); challengeStart(0); }}>
        NOCHMAL
      </a>
      {clicks <= score && challengeDonation > 0 && <a className='btn m-1 text-center flex-1 flex flex-col justify-evenly items-center' onClick={() => { toggleEndChallenge(); if (challengeDonation > 0 && clicks <= score) { toggleDonateModal(); } }}>
        SPENDEN
      </a>
        || <a className='btn m-1 text-center flex-1 flex flex-col justify-evenly items-center' onClick={() => { toggleEndChallenge(); toggleDonateModal();}}>
          SPENDEN
      </a>}
    </div>
  </div>
}
