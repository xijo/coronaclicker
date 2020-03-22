import React from 'react'
import {Modal} from './modal'
import {useToggle} from 'react-use'

import infoButton from './svgs/info.svg'

export const InfoButton = () => {
  const [modal, toggle] = useToggle(true)

  return <div >
    <img src={infoButton} onClick={toggle} className='cursor-pointer fixed' style={{right: 5, bottom: 5}} />
    {modal && <Modal onClose={toggle}>
      <div className='mt-8 mb-8 p-4'>
        Wie funktioniert Corona Clicker?
        <br/><br/>
        Der Counter zeigt die weltweit aktuelle Zahl an Infizierten. Durchs Klicken wird die Zahl der Infizierten also geringer. Folglich ist es ein Kampf in Echtzeit durch realitätsnahe Zahlen.
        Mit verschieden PowerUps, die man durchs Spenden erhalten kann, wird das Ziel, den Counter auf 0 laufen zu lassen, schneller erreicht.
        <br/>
        Kurzgesagt, wir machen Pay-to-win hilfreich! #caretowin
        <br /><br />
        Die Spenden gehen direkt und provisionsfrei an den Corona-Nothilfefonds - Deutsche Rote Kreuz. Möglich gemacht wird dies durch die freundliche Unterstützung von betterplace.org.
        <br />
        Je nach Höhe der Spende erhältst du verschiedene PowerUps. Diese wirksamen Mittel zur Virusbekämpfung stehen dir, einmal aktiviert, helfend zur Seite. <a className='anchor' href='https://www.betterplace.org/de/projects/77983-fureinander-nothilfe-in-der-corona-krise'>Mehr Infos zum Spendenprojekt</a>
        <br />
        <br />
        Kleines Beispiel: Du hast bereits 1€ gespendet und dein Klickcount ist somit 1+1=2. Jedes Mal, wenn du klickst, verringert sich der Counter also um 2 Infizierte. Spendest du nun 5€, so wird der Hitcount mal 5 genommen. Bei jedem Klick vermindert sich die Zahl nun um 1x5 +1 = 6 Infizierte.
        <br />
        <br />
        Doch du bist nicht allein im Kampf gegen den Virus! Die Community kann mit ihren Gesamtspenden ebenfalls neue Multiplikatoren, Farben and More (#staytuned) für alle Spender unter Euch freischalten! Denn auch nur mit Solidarität und gemeinsamer Kraft können wir, virtuell wie in Echt, den Virus besiegen!
        <br />
        Achja..
        <br />
        es ist natürlich möglich, den Counter auf 0 zu bringen... aber was danach passiert, musst du schon selber rausfinden.:ruhe:
        Dieses Spiel haben wir entwickelt, um unseren Teil, die derzeitige Corona-Krise zu bewältigen, beizutragen. Mit dieser Web App werden die sonst sehr abstrakten Zahlen, welche derzeit die Schlagzeilen beherrschen, endlich greifbar gemacht.
        <br />
        <br />

        Aber genug geredet, jetzt wird geklickt!

        <br />
        <br />

        Viel Spaß beim Spielen!
        <br />
        <br />

        Euer CoronaClicker-Team
        <br />
        <br />

        PS: Ist dir das Spiel einfach immer noch viel zu schwer? Ganz einfach:
        Teile Corona-Clicker mit Freunden, Familie und Lieblingsinfluencer, um von höheren Communitybelohnungen zu profitieren! #sharingiscaring #caretowin (bearbeitet)
      </div>
    </Modal>}
  </div>
}
