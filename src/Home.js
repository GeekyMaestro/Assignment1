import React from 'react';
import img1 from './images/breakingbad.jpg';


function Home(props){
    return(
        <div>
            <h1>Breaking Bad</h1>
            <img src={img1} width='1300' height='728'></img>
           
            <h1>The Highest Rated TV Series</h1>
            
        </div>
    )
}
export default Home;