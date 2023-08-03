import React from 'react'
import Header from '../Header/Header'
import './fourCard.css'

function FourCard() {
  return (
    <div className='fourCard'>
      <Header/>
      <div className="infoCards">
        <div className="infoCard topMiddle">
          <div className="infoCardTopRectangle redRectangle"></div>
          <h3 className="infoCardTitle">Team Builder</h3>
          <p className="infoCardDesc">Scans our talent network to create the optimal team for your project</p>
          <img src="images/icon-team-builder.svg" alt="" className="infoCardIcon" />
        </div>
        <div className="infoCard bottomMiddle">
          <div className="infoCardTopRectangle orangeRectangle"></div>
          <h3 className="infoCardTitle">Karma</h3>
          <p className="infoCardDesc">Regularly evaluates our talent to ensure quality</p>
          <img src="images/icon-karma.svg" alt="" className="infoCardIcon" />
        </div>
        <div className="infoCard leftMiddle">
          <div className="infoCardTopRectangle greenRectangle"></div>
          <h3 className="infoCardTitle">Supervisor</h3>
          <p className="infoCardDesc">Monitors activity to identify project roadblocks</p>
          <img src="images/icon-supervisor.svg" alt="" className="infoCardIcon" />
        </div>
        <div className="infoCard rightMiddle">
          <div className="infoCardTopRectangle blueRectangle"></div>
          <h3 className="infoCardTitle">Calculator</h3>
          <p className="infoCardDesc">Uses data from past projects to provide better delivery estimates</p>
          <img src="images/icon-calculator.svg" alt="" className="infoCardIcon" />
        </div>
      </div>
    </div>
  )
}

export default FourCard