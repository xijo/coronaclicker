import React from 'react'
import {Modal} from './modal'
import {useToggle} from 'react-use'

import infoButton from './svgs/info.svg'

export const InfoButton = () => {
  const [modal, toggle] = useToggle(false)

  return <div >
    <img src={infoButton} onClick={toggle} className='cursor-pointer fixed' style={{right: 10, bottom: 10}}/>
    {modal && <Modal onClose={toggle}>
      <div className='p-4'>
        <span className=" text-sm text-red-600">Falls noch Probleme mit den Spendenbelohnungen auftreten sollten, tut uns das Leid! Wir arbeiten daran und können bereits versichern, die Spende kommt auf jeden Fall an! Vielen Dank für Eure Unterstützung und Verständnis!</span>
        <br/><br/>
        <strong>Wie funktioniert Corona Clicker?</strong>
        <br/>
        <br/>
        Der Counter stellt die weltweit aktuelle Zahl an Infizierten dar. Durchs Klicken wird die Zahl der Infizierten folglich geringer. Mit verschiedenen PowerUps, die man über gewisse Abstände im Spiel, aber vorrangig durchs Spenden erhalten kann, wird das Ziel, den Counter auf 0 laufen zu lassen, schneller erreicht. 
        <br/>
        Kurzgesagt, wir machen Pay-to-win sexy! #care2win
        <br />
        <br />
        Die Spenden gehen direkt und provisionsfrei an den Corona-Nothilfefonds - Deutsches Rotes Kreuz. Möglich gemacht wird dies durch die freundliche Unterstützung von <a className='anchor' href='http://betterplace.org/'>betterplace.org</a>.  <a className='anchor' href='https://www.betterplace.org/de/projects/77983-fureinander-nothilfe-in-der-corona-krise'>Mehr Infos zum Spendenprojekt</a>.
        <br />
        Je nach Höhe der Spende erhält man verschiedene „Booster“. Diese wirksamen Mittel zur Virusbekämpfung erhöhen die Zahl geheilter Patienten pro Klick und stehen dir, einmal aktiviert, helfend zur Seite. 
        <br />
        <br/>
        Hierbei werden die Subtraktion und Multiplikation voneinander getrennt aufgerechnet. Multiplikatoren werden aufeinander multipliziert und danach wird die fixe Zahl aller bisher gesammelten „Minus-boni“ zusätzlich subtrahiert.
        <br />
        (Kleines Beispiel: Besitzt man einen x2 und x5 Multiplikator sowie zwei (-1)-Boni, so wird zuerst der Klick(-1) mal (2x5=)-10 gerechnet und abgezogen und danach wird (1+1=)2 zusätzlich subtrahiert. Der Counter würde also pro Klick um 12 Infizierte sinken.)
        <br />
        <br />
        Doch du bist nicht allein im Kampf gegen den Virus! Die Community kann mit ihren Gesamtspenden ebenfalls neue Multiplikatoren, Farben and More (stay tuned..) für alle Spender unter Euch freischalten! Denn nur mit Solidarität und gemeinsamer Kraft können wir, virtuell wie in Echt, den Virus bekämpfen! (Für mehr Infos hierzu einfach auf den Community-Balken klicken. 😊)
        <br />
        <br />
        Achja..
        <br />
        ..es ist natürlich möglich, den Counter auf 0 zu bringen.. aber was danach passiert, musst du schon selbst rausfinden. 🤫
        <br />
        <br />
        Dieses Spiel haben wir entwickelt, um unseren Teil zur Bewältigung der derzeitige Corona-Krise beizutragen. Mit dieser Web-App werden die sonst sehr abstrakten Zahlen, welche derzeit die Schlagzeilen beherrschen, endlich in greifbare Relationen gebracht.
        Aber genug geredet, jetzt wird geklickt!
        <br />
        <br />
        Viel Spaß beim Spielen!
        <br />
        Euer CoronaClicker-Team
        <br />
        <br />
        PS: Ist dir das Spiel immer noch viel zu schwer? Ganz einfach: Teile Corona-Clicker mit Freunden, Familie und Lieblingsinfluencer, um von höheren Communitybelohnungen zu profitieren! #sharingiscaring #care2win
      </div>
    </Modal>}
  </div>
}
