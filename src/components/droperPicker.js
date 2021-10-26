import React from 'react'
import { Dollar, Pick, Star, Time, Truck, User } from '../assets'
import { PickerData } from '../constant/PickerData'
import "./dropperPicker.scss"

const DroperPicker = () => {
    return (
        <div className="dropperPickerbox">
            <div className="pickDropper">
                <h3>PICK A DROPPER</h3>
            </div>
            {PickerData.map((data,index) => {
                return (
                    <div key={index}>
                        <div className="pickerInfo">
                            <div className="pickerImg">
                                <User/>
                            </div>
                            <br/>
                            <div>
                                {data.rating} <Star/>
                            </div>
                        </div>
                        <div>
                            {data.name}
                        </div>
                        <div>
                            {data.delivery}
                            <br/>
                            <Truck/>
                        </div>
                        <div>
                            {data.vehicle}
                            <br/>
                            {data.vname}
                        </div>
                        <div>
                            <Time/>
                            <br/>
                            {data.time} MINUTES
                        </div>
                        <div>
                            <Dollar/>
                            <br/>
                            <h4>Rs {data.amount} /-</h4>
                        </div>
                        <div>
                            <Pick/>
                            <br/>
                            <h4>PICK</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DroperPicker
