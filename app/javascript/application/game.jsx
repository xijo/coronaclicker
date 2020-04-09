/* ========== IMPORT ========== */
// React imports
import React, { useState, useEffect } from 'react'
import { useToggle } from 'react-use'
import Cookies from 'universal-cookie'
import UIfx from 'uifx'

// Class imports
import { Header } from './header'
import { Imprint } from './imprint'
import { Privacy } from './privacy'
import { Virus } from './virus'
import { Progress } from './progress'
import { CommunityBar } from './communitybar'
import { Achievements } from './achievements'
import { TwitterButton } from './buttons/twitter_button'
import { InfoButton } from './buttons/info_button'
import { FacebookButton } from './buttons/facebook_button'
import { InstagramButton } from './buttons/instagram_button'
import { ClickArea } from './click_area'
import { GoodieButton } from './buttons/goodie_button';
import Countdown from 'react-countdown';

// Modal imports
import { Modal } from './modals/modal'
import { Goodie } from './modals/goodie_modal'
import { DonateModal } from './modals/donate_modal'
import { CommBarInfoModal } from './modals/commbar_modal'
import { DonoMessagesModal } from './modals/donoMessagesModal'
import { ProInfoModal } from './modals/proInfoModal'
import { AchievementsModal } from './modals/achievementsModal'
import { ChallengeModal, ChallengeEndModal } from './modals/challengeModal'

// Resources
import plop0file from './mp3s/plop0.mp3'
import plop1file from './mp3s/plop1.mp3'
import plop0file_2 from './mp3s/plop0_2.mp3'
import plop1file_2 from './mp3s/plop1_2.mp3'
import toiletpaper from './images/toiletpaper.png'
import grannys from './images/Level2Finished.jpg'

// Var init
const cookies = new Cookies()

// Careful, don't move down into the component, otherwise it inserts a new
// object into the DOM on every plop..
const plop0 = new UIfx(plop0file)
const plop1 = new UIfx(plop1file)
const plop0_2 = new UIfx(plop0file_2)
const plop1_2 = new UIfx(plop1file_2)


var holder = 0
var clicks = -1


/* ========== MAIN ========== */
export const Game = (props) => {
  /* ========== INITIALISATION ========== */
  //Hooks
  const [donateModal, toggleDonateModal] = useToggle(false)
  const [proInfoModal, toggleProInfoModal] = useToggle(false)
  const [imprintModal, toggleImprintModal] = useToggle(false)
  const [privacyModal, togglePrivacyModal] = useToggle(false)
  const [commBarModal, toggleCommBarModal] = useToggle(false)
  const [goodieModal, toggleGoodieModal] = useToggle(false)
  const [achievementsModal, toggleAchievements] = useToggle(false)
  const [challengeModal, toggleChallenge] = useToggle(false)
  const [challengeEndModal, toggleEndChallenge] = useToggle(false)

  const [counter, setCounter] = useState(parseInt(cookies.get('counter')) || props.counter)
  const [healed, setHealed] = useState(parseInt(cookies.get('healed')) || 0)
  const [level, setLevel] = useState(parseInt(cookies.get('level')) || 1)
  const [goodieID, setGoodieID] = useState(0)
  const [amount, setAmount] = useState(0)

  const [lastClick, setLastClick] = useState([0, 0])
  const [postdonation, setPostdonation] = useState(false)

  const [challengeState, setChallengeState] = useToggle(false)
  const [score, setScore] = useState(0)
  const [challengeDonation, setDonation] = useState(1)

  const challengeEnd = () => {
    // alert('In 3 seconds you healed: '+(holder-parseInt(cookies.get('counter'))))
    setChallengeState();
    toggleEndChallenge();
  }
  const challengeStart = (mode) => {
    clicks = 0
    setChallengeState();
    // holder = parseInt(cookies.get('counter'))
    // alert('Press okay when you are ready!')
    if (mode == 1) {
      recalcValues();
    }
    window.setTimeout(challengeEnd, 19000)
  }

  // Variables
  const donoGoals = [150, 300, 500, 750, 1000, 1400, 1900, 2500, 3000, 4000, 7500, 10000]
  const goodieClickRequirements = [19, 1000, 5000, 10000, 50000, 100000]
  const goodieAddifierRewards = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
  }
  const goodieMultiplierRewards = {
    '6': 2
  }
  // TODO: This is a temp val to compensate for the fraudulant 20K
  // var receivedEdit = (props.received - 20000) >= 0 ? (props.received - 20000) : props.received


  // Hook to check for donation on site render
  useEffect(() => {
    // Adds new infected to counter
    // if(!cookies.get('maximum')){
    //   cookies.set('maximum', props.counter, { path: '/', expires: (new Date(2099, 1, 1)) })
    // }else{
    //   if(props.counter > parseInt(cookies.get('maximum'))){
    //     var newDiff = props.counter - parseInt(cookies.get('maximum'))
    //     setCounter(counter + newDiff)
    //     cookies.set('maximum', props.counter, { path: '/', expires: (new Date(2099, 1, 1)) })
    //     alert("Oh nein! Corona verbreitet sich immer noch. Es haben sich "+newDiff+" weitere Menschen infiziert!")
    //   }else if(props.counter < parseInt(cookies.get('maximum'))){
    //     cookies.set('maximum', props.counter, { path: '/', expires: (new Date(2099, 1, 1)) })
    //   }
    // }

    if (level == 2){
      document.body.style.backgroundColor = '#CEB869'
    }

    var donoUrl = window.location.href
    if (/donation_\d+/.test(donoUrl)) {
      setAmount(parseInt(donoUrl.substring(donoUrl.indexOf('?message=donation_') + '?message=donation_'.length)))
      setPostdonation(true)
    }
  }, [])

  // Update counter cookie
  useEffect(() => {
    cookies.set('level', level, { path: '/', expires: (new Date(2099, 1, 1)) })
  }, [level])

  // Update counter cookie
  useEffect(() => {
    clicks++
    cookies.set('counter', counter, { path: '/', expires: (new Date(2099, 1, 1)) })
  }, [counter])

  // Update healed cookie
  useEffect(() => {
    cookies.set('healed', healed, { path: '/', expires: (new Date(2099, 1, 1)) })
  }, [healed])


  // useEffect(() => {
  //   console.log(score, challengeDonation)
  // }, [score, challengeDonation])


  /* ========== METHODS ========== */
  /*
  * Calculate the "addifier"
  */
  const getLowDec = () => {
    // Init with 0 and check for reached goodies
    var achievements = 0
    for (let i = 0; i < Object.keys(goodieAddifierRewards).length; i++) {
      achievements += cookies.get('goodie' + Object.keys(goodieAddifierRewards)[i]) ? Object.values(goodieAddifierRewards)[i] : 0
    }
    // If player already donated add community decrementer
    if (props.donationSum > 0) {
      achievements += parseInt(props.communityDecrementer)
    }
    // Return sum of all
    return parseInt(props.gameLowDecrementer, 10) + achievements
  }

  /*
  * Calculate the "multiplier"
  */
  const getHighDec = () => {
    // Init with 1 and check for reached goodies
    var achievements = 1
    for (let i = 0; i < Object.keys(goodieMultiplierRewards).length; i++) {
      achievements *= cookies.get('goodie' + Object.keys(goodieMultiplierRewards)[i]) ? Object.values(goodieMultiplierRewards)[i] : 1
    }
    // Return product of all
    return parseInt(props.gameHighDecrementer, 10) * achievements
  }

  /**
   * Calculate the total decrementer
   */
  const getDecrementer = () => {
    return (getLowDec() + getHighDec())
  }

  /**
   * Click event handler
   */
  const decrementCounter = (event) => {
    // Save last click location
    setLastClick([event.clientX, event.clientY])
    // Randomly choose a sound
    if (parseInt(level) == 2) {
      Math.round(Math.random()) === 1 ? plop0_2.play() : plop1_2.play()
    } else {
      Math.round(Math.random()) === 1 ? plop0.play() : plop1.play()
    }
    // Update counter
    setCounter(counter - getDecrementer())
    // Update healed
    setHealed(parseInt(cookies.get('healed')) + getDecrementer())
  }

  /**
   * Calculate dark figure
   */
  const getDarkFigure = () => {
    // (Anzahl Tote * Sterblichkeitsrate) * (2^(Tage Infektion bis Tod / Verdopplungsrate))
    var deathFactor = parseInt(props.deaths) / (parseInt(props.counter) + parseInt(props.recovered))
    var figure = (parseInt(props.deaths) * Math.round(deathFactor * 100 * 100) * Math.pow(2, 17.3 / 6.2))
    return Math.round(figure) != undefined ? Math.round(figure) : 107701022
  }

  /**
   * Reset Challenge stats
   */
  const resetChallenge = () => {
    setScore(0);
    setDonation(1);
  }

  /**
   * Clac Values for end screen
   */
  const recalcValues = () => {
    if (score == 0) {
      setDonation(0)
    } else {
      if (isNaN(parseInt(challengeDonation))) {
        setDonation(1)
      }
      if (score != 0 && challengeDonation == 0) {
        setDonation(1)
      }
    }
  }

  // Renderer callback with condition
  const renderer = ({ seconds, milliseconds, completed }) => {
    if (!completed) {
      // Render a countdown
      return <span>{seconds}.{milliseconds/100}s</span>;
    }
  };

  getDarkFigure()

  /* ========== RETURN ========== */
  return <div className='mt-4'>
    <Header {...props} />

    {/* Modals */}
    {imprintModal && <Modal onClose={toggleImprintModal}><Imprint /></Modal>}
    {privacyModal && <Modal onClose={togglePrivacyModal}><Privacy /></Modal>}
    {commBarModal && <Modal onClose={toggleCommBarModal}><CommBarInfoModal /></Modal>}
    {donateModal && <Modal onClose={toggleDonateModal}><DonateModal received={props.donationSum} /></Modal>}
    {proInfoModal && <Modal onClose={toggleProInfoModal}><ProInfoModal toggleDonateModal={toggleDonateModal} toggleProInfoModal={toggleProInfoModal} /></Modal>}
    {goodieModal && <Modal onClose={() => { toggleGoodieModal(); }}><Goodie healed={healed} goodieID={goodieID} /></Modal>}
    {postdonation && <Modal onClose={() => { setPostdonation(false); }}><DonoMessagesModal donoAmount={amount} /></Modal>}
    {achievementsModal && <Modal onClose={toggleAchievements}><AchievementsModal healed={healed} toggleGoodieModal={toggleGoodieModal} toggleAchievements={toggleAchievements} setGoodieID={setGoodieID} /></Modal>}
    {challengeModal && <Modal onClose={toggleChallenge}><ChallengeModal toggleChallenge={toggleChallenge} challengeStart={challengeStart} setScore={setScore} setDonation={setDonation} /></Modal>}
    {challengeEndModal && <Modal onClose={() => { toggleEndChallenge(); if (challengeDonation > 0 && clicks <= score) { toggleDonateModal(); } }}><ChallengeEndModal clicks={clicks} toggleEndChallenge={toggleEndChallenge} challengeStart={challengeStart} score={score} challengeDonation={challengeDonation} toggleDonateModal={toggleDonateModal} /></Modal>}

    {/* <Countdown
      date={Date.now() + 19000}
      intervalDelay={0}
      precision={1}
      renderer={renderer}
    /> */}

    {/* Virus */}
    <Virus virusOnClick={decrementCounter} spotsOnClick={toggleDonateModal} addifier={getLowDec()} multiplier={getHighDec()} received={props.received} />
    <ClickArea coords={lastClick} onClick={decrementCounter} decrementer={getDecrementer()} />

    {/* Counter and healed */}
    {counter > 0 &&
      <div className='text-4xl antialiased text-teal-800 text-center font-bold mb-4'>
        {parseInt(cookies.get('level')) == 1 && counter}
        {parseInt(cookies.get('level')) == 2 && <div>
          <span>😱 </span> {counter} <span> 😱</span>
        </div>}
        {challengeState && <p className=" text-red-600">Challenge: {clicks}</p>}
        <p className='font-normal text-xs'>({healed} bereits geheilt)</p>
      </div>
    }

    {/* End Screen */}
    {counter <= 0 &&
      <div className='max-w-lg mx-auto mb-8 text-center'>
        {/* <br />
        In den kommenden Tagen könnte es zu neuen Ausbrüchen kommen. Come back and fight the Virus! #nextlevel */}

        {/* Dunkelziffer Formel: (Anzahl Tote * Sterblichkeitsrate) * (2^(Tage Infektion bis Tod / Verdopplungsrate))
          mit aktuellen Zahlen Stand 31.03.2020 --> (39070 * 399) * (2^(17,3 / 6,2) = 107701022

          Zahlen von: https://interaktiv.morgenpost.de/corona-virus-karte-infektionen-deutschland-weltweit/
          Infizierte: 803.313
          Geheilt: 172.656
          Tode: 39.070
          Sterblichkeitsrate: ~3,99%
          */}
        {parseInt(cookies.get('level')) == 1 && <div>
          <div className='text-2xl antialiased text-teal-800 font-bold mb-2'>Du bist unser Held!</div>
          Vielen Dank vom gesamten Corona Clicker-Team dafür, dass du unser Game bis zu diesem Punkt gespielt hast! :)
            <br />
          <br />
          Laut einer Formel zur Berechnung der Dunkelziffer an Infizierten ist die tatsächliche Zahl um ein Vielfaches höher als die offiziellen vermuten lassen...
          kannst du auch gegen diese Zahlen ankämpfen?
            <br />
          <button className='btn mt-2' onClick={() => { setCounter(props.counter); setHealed(0); document.body.style.backgroundColor = '#FFFFFF' }}>RESTART</button>
          <button className='btn mt-2 ml-4' onClick={() => { setCounter(getDarkFigure()); setHealed(0); setLevel(2); document.body.style.backgroundColor = '#CEB869' }}>LEVEL 2</button>
        </div>}
        {parseInt(cookies.get('level')) == 2 && <div>
          <div className='text-2xl antialiased text-teal-800 font-bold mb-2'>Und jetzt bist du eine Legende!</div>
          Wir können dir nicht genug danken dass du an unserem Spiel teilgenommen hast!
            <br />mmmmmd
    Wenn du noch nicht gespendet hast, denk vielleicht nochmal drüber nach, jeder Euro zählt!
            <br />
          Ansonsten, nochmal danke, auch von den beiden hier :)
            <br />
          <img src={grannys} alt="pic" />
          <button className='btn mt-2' onClick={() => { setCounter(getDarkFigure()); setHealed(0); document.body.style.backgroundColor = '#CEB869' }}>RESTART</button>
          <button className='btn mt-2 ml-4' onClick={() => { setCounter(props.counter); setHealed(0); setLevel(1); document.body.style.backgroundColor = '#FFFFFF' }}>RESET</button>
        </div>}
      </div>
    }

    <div className='mb-2 text-center'>
      {/* Goodies Button */}
      <GoodieButton healed={healed} cookies={cookies} toggleGoodieModal={toggleGoodieModal} goodieClickRequirements={goodieClickRequirements} />
      {/* BOOST */}
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={toggleDonateModal}>BOOST</button>
      {/* CHALLENGE */}
      <button className='px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={() => { resetChallenge(); toggleChallenge(); }}>CHALLENGE</button>
      {/* Own donation amount */}
      {props.donationSum !== '0' &&
        <div className='mt-4 text-teal-600 antialiased'>
          <span className='text-xl font-semibold mr-1'>{props.donationSum} €</span> an DRK gespendet
        </div>}

      {/* Progress */}
      <Progress received={props.received} donoGoals={donoGoals} toggleProInfoModal={toggleProInfoModal} />

      {/* Golden toiletpaper */}
      {props.donationSum >= 100 &&
        <div className='mb-8'>
          <img src={toiletpaper} />
          <div className='-mt-8' style={{ color: '#cbae65', textShadow: '0 0 4px #cbae65' }}>
            Geil! Danke für die großzügige Spende. Es gibt Menschen, die die Situation mit Hamsterklopapier Käufen verschlimmert haben, du hast aber die Situation besser gemacht. Deshalb kriegst du.... ja genau GOLDENES Klopapier.....
          </div>
        </div>}
    </div>

    {/* More information */}
    <div className='mb-6 flex items-center justify-center'>
      <p className='text-base text-gray-600 cursor-pointer font-semibold' onClick={() => { toggleProInfoModal(); }}>Mehr Infos zum Spendenprojekt..</p>
    </div>

    {/* Community bar */}
    <div className='mt-4'>
      <CommunityBar selfDonated={props.donationSum} received={props.received} toggleInfoCommBar={toggleCommBarModal} />
    </div>

    {/* Achievements bar */}
    <div className='mt-4'>
      <Achievements healed={healed} toggleAchievements={toggleAchievements} />
    </div>

    {/* Session saving */}
    <div className="pl-4 pr-4 mb-10">
      <p className='flex items-center justify-center text-base' style={{ color: '#236A60' }}><strong>Speicher deinen Fortschritt:</strong></p>
      <p className='flex items-center justify-center text-xs' style={{ color: '#236A60' }}>Kopiere dir deine Session, um sicher zu gehen, immer wieder von deinem Spielstand weiterspielen zu können! :) (Für den Fall, dass du regelmäßig Browsercookies oder Ähnliches löscht)</p>
      <p className='flex items-center justify-center text-sm mt-2' style={{ color: '#236A60' }}>Deine Session:</p>
      {/donation_\d+/.test(window.location.href) && <p className='flex items-center justify-center text-sm' style={{ color: '#236A60' }}>{window.location.href.substring(0, window.location.href.indexOf('?message=donation_'))}</p>
        || <p className='flex items-center justify-center text-sm' style={{ color: '#236A60' }}>{window.location.href}</p>}
    </div>

    {/* Socialmedia */}
    <div className='text-center'>
      <TwitterButton className='cursor-pointer inline-block' healed={healed} received={props.received} />
      <InstagramButton className='cursor-pointer inline-block ml-2' received={props.received} />
      <FacebookButton className='cursor-pointer inline-block ml-2' healed={healed} received={props.received} />
    </div>

    {/* Infobutton */}
    <InfoButton received={props.received} />

    {/* End of site */}
    <div className='text-center mb-10 text-gray-500 cursor-default'>
      <span onClick={toggleImprintModal} className='anchor text-lg'>Impressum</span> | <span onClick={togglePrivacyModal} className='anchor text-lg'>Datenschutz</span>
      <div>#WirVsVirus #care2win</div>
    </div>
  </div>
}
