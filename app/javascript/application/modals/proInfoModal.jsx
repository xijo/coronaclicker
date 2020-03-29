import React from 'react'

import drk from '../images/drk_banner.jpg'

export const ProInfoModal = ({ toggleDonateModal, toggleProInfoModal }) => {

  return <div className='text-center text-teal-600 m-4'>
    <strong className="text-xl">Über das Projekt</strong>
    <br />
    <br/>
    <div className="text-base mt-2">
      Durch die Spenden für den Corona-Nothilfefonds sollen Ehrenamtliche und wichtige Hilfsaktionen unterstützt werden. Zahlreiche Freiwillige sind zum Beispiel engagiert, um älteren und bedürftigen Menschen zu helfen, Lebensmittel-Bringdienste zu organisieren, Pflegepersonal und Bewohner in Seniorenheimen zu unterstützen und die psycho-soziale Betreuung zu übernehmen.
  <br />
      <br />
      „In diesen außerordentlich schwierigen Zeiten ist es besonders wichtig, dass niemand allein gelassen wird“, sagt DRK-Präsidentin Gerda Hasselfeldt.
  <br />
      <br />
      Mit bundesweit mehr als 435.000 ehrenamtlichen Helfern und rund 175.000 hauptamtlichen Mitarbeitern ist das Deutsche Rote Kreuz gut aufgestellt, um Menschen in Not helfen zu können.
  </div>
    <div>
      <button className='m-4 px-10 py-2 bg-teal-100 font-semibold rounded text-teal-800 hover:shadow-lg focus:shadow-md shadow-md cursor-pointer hover:bg-teal-200' onClick={() => { toggleProInfoModal(); toggleDonateModal(); }}>Jetzt spenden!</button>
    </div>
    <img src={drk} alt="drk_corona" className='w-full max-w-lg mx-auto cursor-pointer' onClick={() => { toggleProInfoModal(); toggleDonateModal(); }} />
  </div>
}
