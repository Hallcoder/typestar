import Keyboard from "@/components/keyboard";
import Layout from "@/components/Layout";
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/common/button";
import Queue from "@/utils/queue";
import Stack from "@/utils/stack";

export default function Race(){
    const textToWrite:any = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eius fuga, assumenda repellat magni unde illo ipsam soluta 
    voluptates dolorum adipisci non corrupti, quidem numquam similique 
    sed nemo voluptatem sunt eligendi.`;
    const writtenTextClass = 'text-yellow-500';
    const [text,setText] = useState(new Queue());
    const [written,setWritten] = useState(new Stack());
    const [textDisplay,setTextDisplay] = useState('');
    var tempText:Queue,tempWritten:Stack;
    useEffect(() => {
        tempText = new Queue();
        tempWritten = new Stack();
        let i = 0;
        while(i < textToWrite.length){
            tempText.push(textToWrite[i]);
            i++;
        }
        setText(prev => tempText)
        toast('Make sure to click on the paragraph before writing and you will see the border changing meaning now you can Start!',
        {style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
     },duration:5000 }
     ,);
      }, []);
      const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    const [focused,setFocus] = useState(false);
    const [keyPressed,setKeyPressed] = useState("");
    const keyPressHandler = async(e:any) => {
        let tempText = text;  
        let tempWritten = written;
        tempText.pop();
        tempWritten.push(e.key)
        setText(tempText);
        setWritten(tempWritten);
        setKeyPressed(e.key);  
    }
    const focus = () => {
          inputRef.current?.focus();
          setFocus(true); 
          setTimeout(() => {
            setKeyPressed(prev => "")
          },200)  
    }
    const stopRace = () => {

    }
    const restartRace = () => {

    }
    const inputRef = useRef<HTMLInputElement>(null);
    return <Layout >
        <div><Toaster></Toaster></div>
        <span className="flex justify-end w-9/12 m-auto">3:00</span>
        <OutsideClickHandler
        className='w-9/12 border'
        onOutsideClick= {() => {
            setFocus(false);
            console.log('false focus');
        }}>
        <div className="w-8/12  m-auto">
       <p className={!focused ? 'text-center border w-full m-auto text-lg':"text-center border w-full m-auto text-lg border-2 border-blue-300"} onClick={focus}>
      <span className={writtenTextClass}>{written.elements}</span>
      <span className={"writtenTextClass"}>{text.elements}</span>
       </p>
    </div>
        </OutsideClickHandler>
    <input ref={inputRef} type="text" className="w-40 border absolute -top-10" onKeyPress={keyPressHandler} />
    <div className="w-8/12 m-auto">
        <Keyboard onKeyPressHandler={keyPressHandler} activeKey={keyPressed}/>
    </div>
    <div className="flex items-center justify-center">
        <Button clickHandler={restartRace}>Restart</Button>
        <Button clickHandler={stopRace}>Stop</Button>
    </div>
    <h2></h2>
    </Layout>
}