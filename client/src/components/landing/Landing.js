import { Link } from 'react-router-dom';
import React from 'react';

import styles from "./landing.module.css"


function Landing () { 
    return (
    <div className={styles.bcolor} >
    <div>
    <h1 className={styles.color}> Henry's Atlas</h1>
    </div>
   
     <img className={styles.img} src="https://a-static.besthdwallpaper.com/earth-on-black-background-papel-pintado-54609_L.jpg" alt="world map"/>
   
    <div>
    <h2 className={styles.color2}>  the whole world is just a click away</h2>
   </div>
   <Link to = '/home'>
   <img className={styles.logo} src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg" alt="click here" />
   </Link>
   </div>
    );
};

export default Landing;