import { useEffect, useState } from "react"

export default function Timer({start,stopRace,timeTaken, getTime}){
    let [seconds,setSeconds] = useState<number>(0);
    let [minutes,setMinutes] = useState<number>(3);
    const [stop,setStop] = useState(false);
    const reset =()=>{
        setSeconds(0);
        setMinutes(3);
    }
    useEffect(() => {
        var intervals:NodeJS.Timer[] = [];
        if(!stop){
            var interval = setInterval(()=>{
            if(seconds-1 >=0 ){
                setSeconds(--seconds);
            }else{
                if(minutes>0) setSeconds(59);
                if(minutes == 0) {
                    let diff = 175 - ((minutes*60)+seconds);
                    stopRace(diff/60);
                    reset();
                };   
            }
        },1000);
        intervals.push(interval);
        }else{
            intervals.map(int => clearInterval(int));
        }
    return () => clearInterval(interval);
    },[seconds,stop])
    useEffect(() => {
     if(start){
        setStop(false);
     }else{
        setStop(true)
        reset();
     }
    },[start])
    useEffect(() => {
        let diff = 175 - ((minutes*60)+seconds);
        if(getTime){
            timeTaken(diff/60);
            reset();
        }
    },[getTime])
    // useEffect(() => {
    //    setMinute(0);
    //    setSeconds(34)
    // },[start])
    useEffect(() => {
        if(seconds == 59 ){
            if(minutes-1>0){
                setMinutes(--minutes);
            }else{
                setMinutes(0);
            }
        }
        
    },[seconds])
    return <div>
        <p>{minutes}:{seconds}</p>
    </div>
}