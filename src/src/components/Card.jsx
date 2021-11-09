import React from 'react';
import Detail from './Detail';
import "../style2.css";
function Card(props){
    return (
        <div className="card">
                 <div className="top">
                   <p>{props.id}</p>
                   <div class="headd">
                    <h4 className="name">{props.name}</h4>
                    </div>
                  </div>
              <div className="bottom">
                  <Detail detailInfo={props.tel} />
                  {/* <Detail detailInfo={props.email}/> */}
              </div>
        </div>       
    );
}
        
                
            
                

 
export default Card;