import { useEffect, useState } from "react";
import style from "../stopWatch/Stopwatch.module.css"


export function StopWatch() {
    const [second, setSecond] = useState(0)
    const [minute, setMinut] = useState(0)
    const [time, setTime] = useState(0)

    let seconds;

    useEffect(() => {
        seconds = setInterval(() => {
            setSecond(second + 1)

            if (second === 59) {
                setMinut(minute + 1)
                setSecond(0)
            }
            if (minute === 59) {
                setTime(time + 1);
                setMinut(0)
            }

        }, 1000)

        return () => clearInterval(seconds);
    }, [second])

    const hadleClick1 = () => {
        setSecond(0);
        setMinut(0);
        setTime(0)
    }

    const hadleClick2 = () => {
        clearInterval(seconds)
    }

    return (

        <div className={style.childediv}>
            <h1 className={style.heading}>JavaScript StopWatch</h1>
            <div className={style.mindiv}>
            <h2 className={style.time}>{time < 10 ? "0" + time : time} : {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}</h2>
            <button className={style.button1} onClick={hadleClick1}>Start</button>
            <button className={style.button2} onClick={hadleClick2}>Stop</button>
            </div>
        </div>


    )
}