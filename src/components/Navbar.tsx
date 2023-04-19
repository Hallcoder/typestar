import { useRouter } from "next/router";
import Button from "./common/button";

const Navbar:React.FC<any> = () =>{
    const router  = useRouter();
    const newRace = () => {
          router.push('/race');
    }
    const joinRace = () =>{
        const submit = prompt('Enter the id of the race');
        if(submit){
            //send request to allow to join the race
            alert('let it go')
        }else{
            alert('you do not want money my G')
            //navigate to the new race page with auto generated id
        }
    }
    return <div className="top-0 sticky flex flex-row z-1 bg-white justify-between items-center p-2 h-[8vh] border">
       <img src="./favicon.png" alt="logo" className="h-16 w-20 m-2" />
    <div className="flex items-center">
        <Button clickHandler={newRace}>New Race</Button>
        <Button clickHandler={joinRace}>Join Race</Button>
        <nav className="h-16 w-20 rounded-full m-2 border-2 border-red-500"></nav>
    </div>
    </div>
}

export default Navbar;