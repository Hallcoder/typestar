import { useEffect, useState } from "react"

export default function Timer({start,stopRace}){
    let [seconds,setSeconds] = useState<number>(0);
    let [minutes,setMinute] = useState<number>(3);
    useEffect(() => {
        var intervals:NodeJS.Timer[] = [];
        if(start){
            var interval = setInterval(()=>{
            if(seconds-1 >=0 ){
                setSeconds(--seconds);
            }else{
                if(minutes>0) setSeconds(59);
                if(minutes == 0) {
                    stopRace();
                    setMinute(3)
                };   
            }
        },1000);
        intervals.push(interval);
        }else{
            intervals.map(int => clearInterval(int));
        }
    return () => clearInterval(interval);
    },[seconds])
    useEffect(() => {
       setMinute(3);
       setSeconds(0)
    },[start])
    useEffect(() => {
        if(seconds == 59 ){
            if(minutes-1>0){
                console.log('minutes changing')
                setMinute(--minutes);
            }else{
                setMinute(0);
            }
        }
        // if(seconds == 59 && minutes-1 <= 0){
        //     stopRace();
        // }
    },[seconds])
    return <div>
        <p>{minutes}:{seconds}</p>
    </div>
}