import React,{useEffect, useState} from 'react'
import { Clock, ShortLine, Truck } from '../assets';
import Map from './map';
import "./onTheWay.css"

function onTheWay(){
    return (
        <>
        <div className="onTheWay-box">
            <div className="onTheWay-map">
                <Map/>
            </div>
            <div className="onTheWay-info">
                <div className="onTheWay-from-to">
                    <div className="from">
                        <p>Pitampura
                            <br/>(131002)
                        </p>
                    </div>
                    <div className="line">
                        <ShortLine/>
                    </div>
                    <div className="onTheWay-from-to-icon">
                        <Truck/>
                    </div>
                    <div className="line">
                        <ShortLine/>
                    </div>
                    <div className="to">
                    <p>Rohini
                        <br/>(110023)
                    </p>
                    </div>
                    <div className="onTheWay-time">
                        <img src={Clock} alt="clockImg" className="clockImg"></img>
                        <p>1 hr 13 min</p>
                    </div>
                    <div className="onTheWay-accept-decline">
                        <button className="accept btn">Accept/Bid</button>
                        <button className="details btn">Details</button>
                        <button className="decline btn">Decline</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default onTheWay
