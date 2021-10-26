import React, {useEffect, useState} from 'react'
import { Dumble, Line } from '../assets';
import "./orderDetails.css"

function orderDetails(){
    return (
        <div className="orderdetails-box">
            <div className="orderdetails-from-to">
                <button className="orderdetails-from">Aya Nagar Phase 5</button>
                <Line/>
                <button className="orderdetails-map"><i className="fas fa-map-marker-alt fa-2x order-map"></i><h4 className="oMap">Map</h4></button>
                <Line/>
                <button className="orderdetails-to">Rohini Sector 15 Phase 5</button>
            </div>
            <div className="orderDetails-box-info">
                <div className="orderImages">
                    <div>
                        <img className="img" src={Dumble} alt="Order Image"></img>
                    </div>
                    <div className="orderIcon">
                        <i className="fas fa-chevron-right fa-3x nextimg"></i>
                    </div>
                </div>
                <div className="orderDetails-image-info">
                    <button className="image-info-btn">Weight</button>
                    <button className="image-info-btn">15 kg</button>
                    <br/>
                    <button className="image-info-btn">Size</button>
                    <button className="image-info-btn">75 cm</button>
                    <br/>
                    <button className="image-info-btn">Time</button>
                    <button className="image-info-btn">56 min</button>
                    <br/>
                    <button className="image-info-btn">Price</button>
                    <button className="image-info-btn"><i class="fas fa-rupee-sign"></i> 650</button>
                </div>
            </div>
            <div className="AcceptDecline">
                <button className="orderAccept">Accept / Bid</button>
                <br/>
                <button className="orderDecline">Decline</button>
            </div>
        </div>
    );
}

export default orderDetails
