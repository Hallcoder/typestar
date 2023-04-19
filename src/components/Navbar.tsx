import { useRouter } from "next/router";
import Button from "./common/button";

const Navbar:React.FC<any> = () =>{
    const router  = useRouter();
    const newRace = () => {
        //   router.push('/');
    }
    return <div className="top-0 sticky flex flex-row justify-between items-center p-2 h-[8vh] border">
       <img src="./favicon.png" alt="logo" className="h-16 w-20 m-2" />
    <div className="flex">
        <Button clickHandler={newRace}>New</Button>
        <nav className="h-16 w-20   rounded-full m-2 border-2 border-red-500"></nav>
    </div>
    </div>
}

export default Navbar;