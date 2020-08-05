import React, {Fragment, useEffect, useState} from 'react'
import Data from './../assets/Data.json'
import NavigasiBar from "../components/header/NavigasiBar";
import SliderPromo from "../components/slider/SliderPromo";
let {product:{products,promo}} = Data
const Home = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>
            <NavigasiBar  products={products}/>
            <main>
                <div className="main">
                    <SliderPromo promo={promo}/>
                </div>
            </main>

        </Fragment>
    )
}


export default  Home