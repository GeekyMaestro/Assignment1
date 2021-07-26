import React from 'react';
import img1 from './images/breakingbad.jpg';


function About(){
    return(
        <div>
            <h1 align="center">Breaking Bad</h1>
            <img src={img1} width='1300' height='760'></img>
            <h3><b>Breaking Bad</b> is an American neo-Western crime drama television series created and produced by Vince Gilligan.Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.</h3>
           
        </div>
    )
}
export default About;
