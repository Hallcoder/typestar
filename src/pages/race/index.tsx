import Keyboard from "@/components/keyboard";
import Layout from "@/components/Layout";
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/common/button";


export default function Race(){
    const textToWrite:any = `Lorem ipsum dolor sit amet consectetur .`;
    const writtenTextClass = 'text-green-500 text-lg';
    const invalidCharacterClass = 'text-red-500 underline text-lg';
    const [text,setText] = useState<string[]>([]);
    const [written,setWritten] = useState<{value:string,valid:boolean}[]>([]);
    var tempText:string[],tempWritten:string[];
    useEffect(() => {
        tempText = [];
        let i = 0;
        while(i < textToWrite.length){
            tempText.push(textToWrite[i]);
            i++;
        }
        setText(tempText)
        toast('Make sure to click on the paragraph before writing and you will see the border changing meaning now you can Start!',
        {style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
     },duration:500 }
     ,);
    }, []);
    const inputRef = useRef<HTMLInputElement>(null);
      useEffect(() => {
        // Set the cursor position to the end of the written text
        inputRef.current!.selectionStart = written.length;
        inputRef.current!.selectionEnd = written.length;
      }, [written]);
      const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    const [focused,setFocus] = useState(false);
    const [keyPressed,setKeyPressed] = useState("");
    const handleChange = (e) => {
        // if(e.target.value == text.slice(0,e.target.value.length))
        //  setWritten(prev => [...prev,{value:e.target.value,valid:true}])
        // else
        // setWritten(prev => [...prev,{value:e.target.value,valid:false}])
    }
    const keyPressHandler = async(e:any) => {
        let tempText = text;  
        let tempWritten = written;
         if(e.key == " "){
            tempText.shift();
            setText(tempText)
            console.log(text)
            setWritten([]);
            return;
         }
         if(['Control','Alt','Enter','Shift','CapsLock','Delete'].includes(e.key)) return;
        if(e.key == 'Backspace') {
            // e.preventDefault();
            if(tempText.length == 0) return;
            tempText.unshift(tempWritten[tempWritten.length-1].value)
            tempWritten.pop();
            setWritten(tempWritten);
            setText(tempText);
            return;
        }
        if(e.key == tempText[0]){
            console.log('e.key:',e.key,"tempText[0]:",tempText[0])
            tempWritten.push({value:e.key,valid:true})
        }else{
            console.error('Not equal broo')
            console.log('e.key:',e.key,"tempText[0]:",tempText[0])
            tempWritten.push({value:e.key,valid:false})
        }
        tempText.shift();
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
    return <Layout >
        <div><Toaster></Toaster></div>
        <span className="flex justify-end w-9/12 m-auto">3:00</span>
        <OutsideClickHandler
        className='w-9/12 border'
        onOutsideClick= {() => {
            setFocus(false);
        }}>
        <div className="w-8/12  m-auto" >
       <p className={!focused ? 'text-center border w-full m-auto text-lg':"text-center border w-full m-auto text-lg border-2 border-blue-300"} onClick={focus}>
      {written.map(w=> <span className={w.valid ? writtenTextClass:invalidCharacterClass}>{w.value}</span>)}
      <span className={"writtenTextClass"}>{text}</span>
       </p>
    <input ref={inputRef} onChange={handleChange} value={written.map(w => w.value).join('')} className='border w-[46vw] rounded-md h-[6vh] p-1  m-2 shadow-md' autoFocus={true} placeholder="When the race starts , you should start typing the above text in here" type="text"  onKeyDown={keyPressHandler} />
    </div>
        </OutsideClickHandler>
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