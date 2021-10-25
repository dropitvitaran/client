import React,{useEffect, useState} from 'react'
import "./onTheWay.css"

function onTheWay(){
    return (
        <div className="onTheWay-box">
            <div className="onTheWay-map">

            </div>
            <div className="onTheWay-info">
                <div className="onTheWay-from-to">
                    <p>Pitampura
                        <br/>(131002)
                    </p>
                    <i class="fas fa-people-carry carry"></i>
                    <p>Rohini
                        <br/>(110023)
                    </p>
                    <div className="onTheWay-time">
                        <i class="fas fa-history time"></i>
                        <p>1 hr 13 min</p>
                    </div>
                    <div className="onTheWay-accept-decline">
                        <button className="accept">Accept/Bid</button>
                        <button className="details">Details</button>
                        <button className="decline">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default onTheWay
