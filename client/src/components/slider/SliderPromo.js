import React, {useState} from "react";
import Slider from "react-slick";
import {useHistory} from 'react-router-dom';
const SliderPromo =(props)=> {
    let history = useHistory()
    const [state] = useState({
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ],
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    })
    let {promo} = props
    return (
        <Slider {...state} className="Slider">
            <div className="item-slider">
                <h1>Youtuber Karawang</h1>
                <span>Youtuber karawang adalah suatu komunitas yang bergerak di bidang multimedia</span>
            </div>
            <div className="item-slider">
                <h1>Youtube Rewind 2020</h1>
                <span>Daftarkan diri anda!</span>
            </div>
        </Slider>
    )
}
export default SliderPromo