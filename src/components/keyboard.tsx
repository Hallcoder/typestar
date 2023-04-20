export default function Keyboard({onKeyPressHandler,activeKey}){
const secondRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"];
const thirdRow = ["Caps","a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'","Shift"];
const bottomRow = ["Ctrl","z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
const keyboardRowClass = 'flex flex-row items-center ';
const keyClass = 'border p-2  h-20 w-20 flex m-1 shadow-md items-center justify-center';
const clickedKey = `${keyClass} bg-blue-200`;
const logicalClass = (k:string) =>  `${activeKey == k ? clickedKey:keyClass}`
return <div className="m-auto bg-white flex flex-col items-center">
        <div className={keyboardRowClass}>
        {secondRow.map(k => {
       return <p onKeyDown={(e) => onKeyPressHandler(e)}  className={logicalClass(k)}>{k}</p> 
    })}
    </div>
<div className={keyboardRowClass}>
{thirdRow.map(k => {
       return <p onKeyDown={(e) => onKeyPressHandler(e)} className={logicalClass(k)}>{k}</p> 
    })}
</div>
<div className={keyboardRowClass}>
{bottomRow.map(k => {
       return <p onKeyDown={(e) => onKeyPressHandler(e)} className={logicalClass(k)}>{k}</p> 
    })}
        </div>
          
    </div>
}