import React, {Fragment, useState} from 'react'
import {Link} from "react-router-dom";
import NavigasiBar from "../../components/header/NavigasiBar";
import Data from './../../assets/Data.json'
let {product:{products,promo}} = Data
const Join =()=>{
    const [room, setRoom] =useState('')
    const [name, setName] =useState('')
    return (
        <Fragment>
            <NavigasiBar  products={products}/>
            <main>
                <div className="box-join">
                    <h1>Join</h1>
                    <div className="input-group">
                        <input type="text" placeholder="" onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="" onChange={(e)=> setRoom(e.target.value)}/>
                    </div>
                    <Link
                        onClick={e=>(!name || !room) ? e.preventDefault() : null}
                        to={`/chat/name=${name}&room=${room}`}
                    >
                        <button className="btn" type="submit">Sign in</button>
                    </Link>
                </div>
            </main>
        </Fragment>
    )
}
export default Join