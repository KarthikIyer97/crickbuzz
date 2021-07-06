import React from 'react'
import india from './india.png'
import england from './england.png'

function Countries() {
    return (
        <div>
            
    <div id="portfolio" className="cricket-card">
        <h2>Countries</h2>
            <div className="all-details">
                <div className="india">
                    <img src={india} alt="" />
                    <h3 className="team-cmn">India</h3>
                </div>
                <div className="details">
                <h3 className="VS">VS</h3>
                </div>
                <div className="eng">
                    <img src={england} alt="" />
                    <h3 className="team-cmn">England</h3>
                </div>
            </div>          
        </div>

   
        </div>
    )
}

export default Countries;
