import React from "react";
import "../assets/styles.css";
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { NavBar, Roadmap, PageHOC } from "../components";
import styles from "../styles";


const About = () => {
    const navigate = useNavigate();

    return (
        <section /* "about" id='about' */>
            {/* <NavBar /> */}
            
            <div >
                {/* <img src={logo} alt="logo" className={styles.hocLogo} onClick={() => navigate('/')} /> */}
                <h1 className="about-title">who are the AvaxGods?</h1>
                <p className="lead text-center">
                    The KryptoPunks are an art collection <br/>
                    for an NFT staking project built within <br />
                    the Polygon network, a KryptoPunk is a character <br />
                    that is part of an 10000 algorithmically <br />generated collection 
                    consisting of extremely unique features. Each item can be staked on <br />
                    the KryptoPunk vault to receive KryptoPunk Token (KPT) rewards.
                </p>
            </div>
            <Roadmap />

            {/** Stake */}

            <div className="stake" id="stake">
                <p className={styles.normalText}>Stake Page</p>
            </div>

        </section>
        

        
    )
}

export default PageHOC(
    About,
)