import Keyboard from "@/components/keyboard";
import Layout from "@/components/Layout";
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/common/button";
import swal from 'sweetalert'
import Modal from "@/components/modal";
import generateText from "@/utils/generateText";
import Timer from "@/components/timer";

export default function Race(){
    const textToWrite:any = `Lorem ipsum dolor sit amet consectetur .`;
    const writtenTextClass = 'text-green-500 underline text-3xl';
    const invalidCharacterClass = 'text-red-500 underline text-3xl';
    const [inputValue,setInputValue]  = useState('');
    const [text,setText] = useState<string>('');
    const [written,setWritten] = useState<string[]>([]);
    const [wpm,setWpm] = useState<number>(56);
    const [accuracy,setAccuracy] = useState<number>(43);
    const [show,setShow] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused,setFocus] = useState(false);
    const [startRace,setStartRace] = useState(false);
    const [keyPressed,setKeyPressed] = useState("");
    useEffect(() => {
        
        toast('Make sure to click on the paragraph before writing and you will see the border changing meaning now you can Start!',
        {style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },duration:500 }
        ,);
        toast.success('The race is about to start right after this toast disappears',{duration:3000})  
    }, []);
    // useEffect(() => {
    //     setStartRace(true)
    // },[text])
    useEffect(() => {
        generateText().then(data => {        
            setText(data.data.split("").slice(0,Math.floor(Math.random()*50)+100).join(""))});  
    },[show])
    const handleChange = (e) => {        
       if(e.target.value.length == text.length){
         stopRace();
       }
       setInputValue(e.target.value);
       setWritten(e.target.value);
    }
 
    const keyPressHandler = async(e:any) => {
        setKeyPressed(e.key);  
        setTimeout(() => {
          setKeyPressed(prev => "")
        },200)  
    }
    const focus = () => {
          inputRef.current?.focus();
          setStartRace(true);
          setFocus(true); 
    }
    
    const calculateWPM = () => {
        console.log(typeof written)
        let wordsTyped = (written as unknown as string).split(" ").length;
        console.log(wordsTyped)
        console.log(timeTaken)
        let wpm = wordsTyped/timeTaken!;
        setWpm(wpm);
    }
    const stopRace = (timeTaken?:number) => {
        inputRef.current!.blur();
        //TODO: calculate wpm and accuracy
        setShow(true);
        // setStartRace(false);
        calculateWPM();
    }
    const restartRace = () => {

    }
    return <Layout >
        <Toaster></Toaster>
        <span className="flex justify-end w-9/12 m-auto"><Timer timeTaken={setTimeTaken} getTime={getTime} stopRace={stopRace} start={startRace}></Timer></span>
        <OutsideClickHandler
        onOutsideClick= {() => {
            setFocus(false);
        }}>
        <div className="w-8/12  m-auto noselect" >
       <p className={!focused ? 'text-center border w-full m-auto text-3xl':"text-center border w-full m-auto text-3xl border-2 border-blue-300"} onClick={focus}>
      {text.length == 0 ? 'Loading...':text.split('').map((t,i) => {
        if(i < written.length){
            return <span key={i} className={written[i] == t ? writtenTextClass : invalidCharacterClass}>{t}</span>
        }
        return <span key={i}>{t}</span>
      })}
      </p>
    <input ref={inputRef} onPaste={(e) => e.preventDefault()} onFocus={focus} onChange={handleChange}  value={inputValue} className='border w-[46vw] rounded-md h-[6vh] p-1  m-2 shadow-md' autoFocus={true} placeholder="When the race starts , you should start typing the above text in here" type="text"  onKeyDown={keyPressHandler} />
    </div>
        </OutsideClickHandler>
    <div className="w-8/12 m-auto">
        <Keyboard onKeyPressHandler={keyPressHandler} activeKey={keyPressed}/>
    </div>
    <div className="flex items-center justify-center">
        <Button clickHandler={restartRace}>Restart</Button>
        <Button clickHandler={stopRace}>Stop</Button>
    </div>
    {show && <OutsideClickHandler onOutsideClick={() => {
    setInputValue('')
    setWritten([])
    setShow(false)
    setStartRace(false)
    }}><Modal wpm={wpm} accuracy={accuracy} /></OutsideClickHandler>}
    </Layout>
}

