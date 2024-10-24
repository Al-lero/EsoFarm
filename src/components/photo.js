import React from "react";
import './Style/photo.css'
import pig5 from'../Assets/pig5.avif'
import pig1 from'../Assets/pig1.avif'
import pig2 from'../Assets/pig2.avif'
import pig3 from'../Assets/pig3.avif'
import pig4 from'../Assets/pig4.avif'
import pig6 from'../Assets/pig6.avif'





const photo = ()=>{
    return(
        <div className="photo-text">
            <div class = 'container'>
                <img src={pig5} alt="pigc" />
                <img src={pig3} alt="piga" />
                <img src={pig2} alt="pigd" />
                <img src={pig4} alt="pigb" />
                <img src={pig1} alt="pige" />
                <img src={pig6} alt="pigf" />

            </div>
        </div>
    )
}

export default photo