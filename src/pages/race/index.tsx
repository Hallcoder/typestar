import Keyboard from "@/components/keyboard";
import Layout from "@/components/Layout";
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/common/button";

export default function Race(){
    useEffect(() => {
        toast('Make sure to click on the paragraph before writing and you will see the border changing meaning now you can Start!',
        {style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
     },duration:5000 }
     ,);
      }, []);
    const [focused,setFocus] = useState(false);
    const [keyPressed,setKeyPressed] = useState("");
    const keyPressHandler = (e:any) => {
        console.log(e.key)  
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
         Eius fuga, assumenda repellat magni unde illo ipsam soluta <br />
         voluptates dolorum adipisci non corrupti, quidem numquam similique<br /> 
         sed nemo voluptatem sunt eligendi.
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