import React from 'react'
import Edata from './Edata'
import Card from './Card'

function EnglandProfile() {
    return (
        <>
        <div class="players">
        <div class="slide-container">
            <div class="wrap">
                       
             {
                 Edata.map((val, ind) => {
                     return <Card 
                        key={ind}
                         imgsrc={val.imgsrc}
                         name={val.name}
                         role={val.role}
                         matches={val.matches}
                         runs={val.runs}
                         hs={val.hs}
                         fifty={val.fifty}
                         avg={val.avg}
                         sr={val.sr}
                         q={val.q}
                         s={val.s}
                     />
                 })
             }

                    </div>
                </div>
            </div>
          </>
    )
}

export default EnglandProfile