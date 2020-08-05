import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";

const NavigasiBar = (props)=>{
    let history = useHistory()
    let {products} = props
    const [snackbar,setSnackbar] = useState(0)
    const [open, setOpen] = useState(0)
    const [drawer, setDrawer] = useState(0)

    return(
        <header>
            <div className="navbar">
                <div className="main-header">
                    <div className="logo-brand">
                        <Link to='/' className='logo-link'>{document.title}</Link>
                    </div>
                    <div className="btn-back" onClick={()=>history.goBack()}>
                        <i className="material-icons mdc-icon-button__icon">keyboard_arrow_left</i>
                    </div>
                    <div className="header-menu">
                        <div className="menu-link">
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Explore</a>
                                </li>
                                <li>
                                    <a href="">About us</a>
                                </li>
                                <li>
                                    <a href="">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-btn">
                        <Link className='button-primary' to={'/login'}>Login</Link>
                        <Link className='button-outline-primary' to={'/register'}>Register</Link>
                    </div>
                    <div className="mobile-menu" onClick={()=>setDrawer(!drawer)}>
                        <i className="material-icons mdc-icon-button__icon" data-badge={10}>reorder</i>
                    </div>
                </div>
            </div>
            <div className={`drawerHeader ${drawer ? `drawerShow` : 'drawerUnShow'}`} >
                <p className="closebtn" onClick={()=>setDrawer(0)} >&times;</p>
                <Link to={''} className='linkbtn'>Home</Link>
                <Link to={''} className='linkbtn'>Explore</Link>
                <Link to={''} className='linkbtn'>About us</Link>
                <Link to={''} className='linkbtn'>Contact</Link>
                <div className="divider-drawer"/>

                <Link to={''} className='linkbtn'>Settings</Link>
                {/*<Link to={''} className='linkbtn'>Logout</Link>*/}
            </div>
            <div className={`snackbar ${snackbar?`show`:null}`}><i className="material-icons mdc-icon-button__icon">notification_important</i>Tidak boleh kosong</div>
        </header>
    )
}

export default NavigasiBar