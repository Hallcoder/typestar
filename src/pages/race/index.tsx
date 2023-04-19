import Keyboard from "@/components/keyboard";
import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function Race(){
    useEffect(()=>{
         alert('This is the id of the race! Use it to invite your friends to join the race')
    },[])
    return <Layout >
        <div>
       <p className={'text-center border w-8/12 m-auto text-lg'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
         Eius fuga, assumenda repellat magni unde illo ipsam soluta <br />
         voluptates dolorum adipisci non corrupti, quidem numquam similique<br /> 
         sed nemo voluptatem sunt eligendi.
       </p>
    </div>
    <div>
        <Keyboard />
    </div>
    <h2></h2>
    </Layout>
}