import React, { useEffect, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import StartButton from './startButton';

// totalTime in seconds is passed as a prop

//wrkT = work time
//brkT = break time
//wOB = work or break, 0 = work, 1 = break

let starTi = 0;
let offset = 0;


const Timer = ({ wrkT, brkT, wOB }) => {
    const [wOBB, setWOBB] = useState(wOB);
    const [tt, setTT] = useState(wOBB ? wrkT : brkT);
    const [active, setActive] = useState(false);
    const totTT = wOBB ? wrkT : brkT;
    const sounds = (Math.random() < 0.5) ? new Audio('/rhehe.mp3') : new Audio('/blueLock.mp3') ;

    const isZero = (ti) => {
        // console.log(ti)
        if (ti <= 0) {
            return "00";
        } else if (ti < 10) {
            return "0" + ti;
        }
        return ti;
    };

    let remHours, remMinutes, remSeconds;
    remHours = remMinutes = remSeconds = 0;

    const changeBtn = () => {
        if (!active) {
            starTi = Date.now();
            offset = tt;
        }

        setActive(!active);
    };

    // make skip phase button
    const skipBtn = () => {
        if (wOBB) {
            setTT(brkT);
            setWOBB(false);
        } else {
            setTT(wrkT);
            setWOBB(true);
        }
        setActive(false);
    }

    // start timer after click of button
    useEffect(() => {
        let interval = null;
        let endTi;
        if (tt > 0 && active) {
            endTi = starTi + offset * 1000;
            interval = setInterval(() => {
                setTT(Math.ceil((endTi - Date.now()) / 1000));
            }, 1000);
        }
        else if (tt <= 0 && active) {
            setTT(wOBB ? wrkT : brkT);
            setWOBB(!wOBB);
            sounds.play();
            setActive(false);
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [tt, active]);


    useEffect(() => {
        setTT(wOBB ? wrkT : brkT);

        if (!active) {
            setTT(wOBB ? wrkT : brkT);
        }
    }, [wOBB, wrkT, brkT]);

    remHours = isZero(Math.floor(tt / 3600));
    remMinutes = isZero(Math.floor((tt % 3600) / 60));
    remSeconds = isZero(tt % 60);

    return (
        <div className="timeDiv">
            <div>
                {
                    wOBB ? <h1 className="timeStat">WORK TIME</h1> : <h1 className="timeStat">BREAK TIME</h1>
                }
                <h1 className="timeRem">
                    {remHours}:{remMinutes}:{remSeconds}
                </h1>

                                <ProgressBar style={{ height:"10px", backgroundColor:"#f3f3f396", color:"black", '--bs-progress-bar-bg':"#0c0c0c55"}} now={100 - Math.floor(100 * tt/ totTT ) }/>

                <StartButton onOoff={active} timeBtn={changeBtn} skipBtn={skipBtn} />


            </div>
        </div>
    );
};

export default Timer;