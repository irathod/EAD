import React, { useState, useRef, useEffect } from "react";
const Timer = () => {
    const [time,setTime] = useState(0);
    const [running,setRunning] = useState(false);

    useEffect(function(){
        if (!running) return;

        let timer = setInterval(function() {
            return setTime(function(t){
                return t + 1;
            });
        },1000);

        return function() {
            clearInterval(timer);
        };
    },[running]);
const start=() => {setRunning(true);}
const stop=() => {setRunning(false);}
const reset=() => {setTime(0); setRunning(false);}
return(
    <div className="container">
        <div className ="buttonsClass">
            <center>
                <h2>{time}Seconds</h2>
                <div className ="btnparent">
                    <button onClick={start}>start</button>
                    <button onClick={stop}>stop</button>
                    <button onClick={reset}>reset</button>
                </div>
            </center>
        </div>
    </div>
);
};
export default Timer;