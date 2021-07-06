import React from 'react'


function Card(props) {
    return (
        <div>
                

                    <div className="card">
                    <img className="imgg" src={props.imgsrc} alt={props.alt} style={{height:'140px'}}  />
        
                <div class="container">
             
                    <h5><b>{props.name}</b></h5>
                    <h6>{props.role}</h6>
                    <table style={{border:"1px solid black"}} >
                        <tr>
                            <td>{props.matches}</td>
                            <td>{props.runs}</td>                            
                        </tr> 
                        <tr>
                            <td> {props.hs}</td>
                             <td>{props.fifty}</td>   
                        </tr>                      
                         <tr>
                             <td>{props.avg}</td>
                            <td>{props.sr}</td>
                            </tr>
                        <tr>
                            <td>{props.q}</td>
                            <td>{props.s}</td>
                        </tr>
                        
                    </table>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Card;
