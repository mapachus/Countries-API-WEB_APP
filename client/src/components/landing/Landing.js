import { Link } from 'react-router-dom';


function Landing () { 
    return (
    <div >
    <div 
    //className={styles.margin}> 
    >
    <h1 
    //</div>className={styles.font}> 
        > the world is at your fingertips </h1>
    </div>
    <div
    //className={styles.padding}> 
    >
    <h4 
    //</div>className={styles.font2}

    > start the adventure </h4>
   </div>
   <Link to = '/home'>
       <button  >🌍</button>
   </Link>
   <div 
   //className={styles.background}> 
   >
    </div>
   </div>
    );
};

export default Landing;