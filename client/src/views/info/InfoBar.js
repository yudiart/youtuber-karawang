import React from 'react'


const InfoBar = ({room})=>{
    return(
        <div className="infoBar">
            <div className="left">
                o
                <h2>{room}</h2>
            </div>
            <div className="rightinner">
                <a href="/">close</a>
            </div>
        </div>
    )
}
export default InfoBar