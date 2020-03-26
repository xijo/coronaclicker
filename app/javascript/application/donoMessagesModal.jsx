import React from 'react'

import hands from './svgs/hands.png'
import suit from './svgs/suit.png'
import desinfect from './svgs/desinfect.png'
import mask from './svgs/mask.png'
import distancing from './svgs/social_distancing.png'
import toiletpaper from './svgs/toiletpaper.png'

export const DonoMessagesModal = ({donoAmountUrl}) => {
  var amount = donoAmountUrl.substring(donoAmountUrl.indexOf('?message=donation_')+'?message=donation_'.length)
  var picToTake = hands
  var textToTake = "<placeholder>"

  if (parseInt(amount) < 2){
    textToTake = "Händewaschen schützt vor Viren, aber nur, wenn du auch 30 Sekunden durchhältst. Vor Allem wichtig vor dem Nudeln kochen!"
  }else if(parseInt(amount) < 5){
    picToTake = desinfect
    textToTake = "Nicht jedes Mittel hilft, aber Dieses lässt jeden Virus alt aussehen.. Aber nicht nur auf den Handflächen verteilen! Zum deinem Schutz und dem Anderer!"
  }else if(parseInt(amount) < 10){
    picToTake = mask
    textToTake = "Das Mode-Accessoire schlechthin in diesem Jahr! Hilft nicht nur deinem Aussehen sondern auch der Bekämpfung des Virus!"
  }else if(parseInt(amount) < 25){
    picToTake = distancing
    textToTake = "Tröpfcheninfektion? Nein, Danke! Immer schön Abstand halten, um uns Allen zu ermöglichen, bald wieder unsere Homies in den Arm zu nehmen!"
  }else if(parseInt(amount) < 100){
    picToTake = suit
    textToTake = "Macht dich nicht nur nahezu Immun gegen den Virus, sondern hilft auch, falls das Klopapier mal alle ist!"
  }else {
    picToTake = toiletpaper
    textToTake = "Das goldene Klopapier. Viele hielten es für einen Mythos. Andere deklarierten es als Fake News. Doch was die Wenigsten wissen, die Geschichte des goldenen Klopapier wird schon seit Generationen den Höchstspendern einer Familie weiterzählt. Nun bist auch du soweit! Wir verleihen dir hiermit die Macht über dieses Relikt,...wir haben gehört, in Zeiten wie diesen kann man es immer gut gebrauchen."
  }

  return <div className='m-2'>
    <div className='text-center text-teal-600 m-4'>
      <strong className=" text-xl">Danke für deine Hilfe!</strong>
      <br/>
      <img src={picToTake} alt="dono_pic" className="mx-auto select-none'"/>
      <span className="text-sm font-light">{textToTake}</span>
    </div>
  </div>
}
