import React from 'react'

import hands from '../images/boosts/hands.png'
import suit from '../images/boosts/suit.png'
import desinfect from '../images/boosts/desinfect.png'
import mask from '../images/boosts/mask.png'
import distancing from '../images/boosts/social_distancing.png'
import toiletpaper from '../images/toiletpaper.png'

export const DonoMessagesModal = ({donoAmount}) => {
  console.log(donoAmount)
  var picToTake = hands
  var textToTake = "<placeholder>"
  var isMask = false

  if (parseInt(donoAmount) < 2){
    textToTake = "Händewaschen schützt vor Viren, aber nur, wenn du auch 30 Sekunden durchhältst. Vor Allem wichtig vor dem Nudeln kochen!"
  }else if(parseInt(donoAmount) < 5){
    picToTake = desinfect
    textToTake = "Nicht jedes Mittel hilft, aber Dieses lässt jeden Virus alt aussehen. Aber nicht nur auf den Handflächen verteilen! Zum deinem Schutz und dem Anderer!"
  }else if(parseInt(donoAmount) < 10){
    isMask = true
    picToTake = mask
    textToTake = "Das Mode-Accessoire schlechthin in diesem Jahr! Hilft nicht nur deinem Aussehen sondern auch der Bekämpfung des Virus!"
  }else if(parseInt(donoAmount) < 25){
    picToTake = distancing
    textToTake = "Tröpfcheninfektion? Nein, Danke! Immer schön Abstand halten, um uns Allen zu ermöglichen, bald wieder unsere Homies in den Arm zu nehmen!"
  }else if(parseInt(donoAmount) < 100){
    picToTake = suit
    textToTake = "Macht dich nicht nur nahezu Immun gegen den Virus, sondern hilft auch, falls das Klopapier mal alle ist!"
  }else {
    picToTake = toiletpaper
    textToTake = "Das goldene Klopapier. Viele hielten es für einen Mythos. Andere deklarierten es als Fake News. Doch was die Wenigsten wissen, die Geschichte des goldenen Klopapier wird schon seit Generationen den Höchstspendern einer Familie weiterzählt. Nun bist auch du soweit! Wir verleihen dir hiermit die Macht über dieses Relikt,..wir haben gehört, in Zeiten wie diesen kann man es immer gut gebrauchen."
  }

  return <div className='m-2'>
    <div className='text-center text-teal-600 m-4'>
      <strong className=" text-xl">Danke für deine Hilfe!</strong>
      <br/>
      <img src={picToTake} alt="dono_pic" className="mx-auto select-none'"/>
      <span className="text-sm font-light">{textToTake}</span>
      { isMask && <div>
        <span className="text-sm font-light">Du glaubst uns nicht? Vielleicht hörst du ja stattdessen auf Menschen wie Jan Böhmermann, Joko Winterscheidt oder Rezo! #maskeauf</span>
        <br/>
        <a href="https://youtu.be/X2pccoeWFFA">Zum Video</a></div>}
    </div>
  </div>
}
