import React from 'react'

import haus from '../images/goodies/Haus.png'
import nudeln from '../images/goodies/Nudeln.png'
import spuckschutz from '../images/goodies/Spuckschutz.png'
import video from '../images/goodies/Videokonferenz.png'
import spritze from '../images/goodies/Spritze.png'
import handy from '../images/goodies/Handy.png'

export const Goodie = ({healed, goodieID}) => {
  var picToTake = haus
  var achName = "Ausgangssperre"
  var textToTake = "<placeholder>"

  // Sehr dreckig gemacht, wird noch verbessert
  if(goodieID == 0){
    if (parseInt(healed) < 1000){
      textToTake = "Die ersten 19 Infizierten sind geheilt und durch diese Ausgangssperre hast du nun sogar noch mehr Zeit fürs Klicken! #stayathome (-1 Bonus)."
    }else if(parseInt(healed) < 5000){
      achName = "Nudeln"
      picToTake = nudeln
      textToTake = "1000 Infizierte sind geheilt und der Tag wird einfach immer besser! Als du zum Supermarkt deines Vertrauens gehst, wurde gerade das Nudelregal aufgefüllt. Die Versorgung für die kommenden Tage ist gesichert! (-2 Bonus)."
    }else if(parseInt(healed) < 10000){
      achName = "Spuckschutz"
      picToTake = spuckschutz
      textToTake = "5000 Menschen sind bereits geheilt! Die Zahl an möglichen Infizierten ist aber immer noch viel zu hoch, weshalb du dich zum Kauf eines Spuckschutzes entscheidest. Sicher ist sicher! (-3 Bonus)!"
    }else if(parseInt(healed) < 50000){
      achName = "Videokonferenz"
      picToTake = video
      textToTake = "Du hast 10.000 Infizierte geheilt! Das erzählst du natürlich direkt per Videoanruf all deinen Freunden und schwärmst davon, wie toll und gleichzeitig hilfreich doch dieses Spiel ist! (-4 Bonus)! (Kurzer Real Talk: Du würdest uns eine riesige Freude bereiten, wenn du Corona-Clicker mit all deinen Freunden teilst! 😊 Damit unterstützt du gleichzeitig, ohne großen Aufwand aber mit viel Wirkung, das DRK im Kampf gegen Corona!)."
    }else if(parseInt(healed) < 100000){
      achName = "Impfung"
      picToTake = spritze
      textToTake = "50.000 Infizierte sind geheilt! An ersten Impfstoffen wird geforscht und kleinere Erfolge sind bereits zu verzeichnen. Diese Nachricht macht Mut! (-5 Bonus)!"
    }else  {
      achName = "Liebe vom Team"
      picToTake = handy
      textToTake = "100.000 Infizierte sind geheilt! So langsam gewinnst du die Überhand im Kampf gegen den Virus. Für die finale Phase wollen wir dir als treuen Spieler hiermit nochmals unter die Arme greifen. (x2 Mult.) Vielen Dank an dieser Stelle vom gesamten Corona Clicker-Team für deine Zeit, dieses Projekt zu unterstützen. You're breathtaking!"
    }
  }else{
    if (goodieID == 1){
      textToTake = "Die ersten 19 Infizierten sind geheilt und durch diese Ausgangssperre hast du nun sogar noch mehr Zeit fürs Klicken! #stayathome (-1 Bonus)."
    }else if(goodieID == 2){
      achName = "Nudeln"
      picToTake = nudeln
      textToTake = "1000 Infizierte sind geheilt und der Tag wird einfach immer besser! Als du zum Supermarkt deines Vertrauens gehst, wurde gerade das Nudelregal aufgefüllt. Die Versorgung für die kommenden Tage ist gesichert! (-2 Bonus)."
    }else if(goodieID == 3){
      achName = "Spuckschutz"
      picToTake = spuckschutz
      textToTake = "5000 Menschen sind bereits geheilt! Die Zahl an möglichen Infizierten ist aber immer noch viel zu hoch, weshalb du dich zum Kauf eines Spuckschutzes entscheidest. Sicher ist sicher! (-3 Bonus)!"
    }else if(goodieID == 4){
      achName = "Videokonferenz"
      picToTake = video
      textToTake = "Du hast 10.000 Infizierte geheilt! Das erzählst du natürlich direkt per Videoanruf all deinen Freunden und schwärmst davon, wie toll und gleichzeitig hilfreich doch dieses Spiel ist! (-4 Bonus)! (Kurzer Real Talk: Du würdest uns eine riesige Freude bereiten, wenn du Corona-Clicker mit all deinen Freunden teilst! 😊 Damit unterstützt du gleichzeitig, ohne großen Aufwand aber mit viel Wirkung, das DRK im Kampf gegen Corona!)."
    }else if(goodieID == 5){
      achName = "Impfung"
      picToTake = spritze
      textToTake = "50.000 Infizierte sind geheilt! An ersten Impfstoffen wird geforscht und kleinere Erfolge sind bereits zu verzeichnen. Diese Nachricht macht Mut! (-5 Bonus)!"
    }else  {
      achName = "Liebe vom Team"
      picToTake = handy
      textToTake = "100.000 Infizierte sind geheilt! So langsam gewinnst du die Überhand im Kampf gegen den Virus. Für die finale Phase wollen wir dir als treuen Spieler hiermit nochmals unter die Arme greifen. (x2 Mult.) Vielen Dank an dieser Stelle vom gesamten Corona Clicker-Team für deine Zeit, dieses Projekt zu unterstützen. You're breathtaking!"
    }
  }

  goodieID = 0

  return <div className='m-2'>
    <div className='text-center text-teal-600 m-4'>
    <strong className=" text-xl">ACHIEVEMENT: {achName}</strong>
        <br/>
        <img src={picToTake} alt="dono_pic" className="mx-auto select-none'"/>
        <span className="text-sm font-light">{textToTake}</span>
      </div>
  </div>
}
