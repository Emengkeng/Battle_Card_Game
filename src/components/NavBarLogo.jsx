import React, { useState } from 'react'
import "../assets/styles.css";
import menu from "../assets/img/menu.png"
import close from "../assets/img/cancel.png"
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import styles from '../styles';


function NavBarLogo() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="brand">
            <img src={logo} alt="logo" className={styles.hocLogo} onClick={() => navigate('/')} />
                <div className="nav-burger" id="nav-burger">
                    <img src={menu} alt="Menu" onClick={() => {
                        setIsNavExpanded(true);
                    }} />
                </div>
            </div>
            <nav className={isNavExpanded ? "nav-custom open-menu" : "nav-custom is-active"} >
                <div className={isNavExpanded ? "nav-cancel" : "nav-cancel is-active"}>
                    <img src={close} onClick={() => {
                        setIsNavExpanded(false);
                    }} alt="Cancel" />
                </div>
                <div className='nav-links_div'>
                    <a href="/" className="nav-link_ref">Home</a>
                    {/* <a href="/mint-page" className="nav-link_ref">Mint</a> */}
                    <a href="/about" className="nav-link_ref">About</a>
                    <a href="/about/#roadmap" className="nav-link_ref">Roadmap</a>
                    <a href="/stake" className="nav-link_ref">Stake</a>
                </div>
            </nav>
        </header>
    );
}


export default NavBarLogo;





