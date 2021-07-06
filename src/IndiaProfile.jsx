import React from 'react'
import Idata from './Idata'
import Card from './Card'

function IndiaProfile() {
    return (
        <>
         
        <div class="players">
        <div class="slide-container">
            <div class="wrap">
                       
             {
                 Idata.map((val, ind) => {
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

export default IndiaProfile
