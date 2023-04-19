export default function Keyboard(){
const secondRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"];
const thirdRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
const bottomRow = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
const keyboardRowClass = 'flex flex-row items-center ';
const keyClass = 'border p-2 rounded-full';
return <div>
        <div className={keyboardRowClass}>
        {secondRow.map(k => {
       return <p className={keyClass}>{k}</p> 
    })}
    </div>
<div>
{thirdRow.map(k => {
       return <p className={keyClass}>{k}</p> 
    })}
</div>
<div>
{bottomRow.map(k => {
       return <p className={keyClass}>{k}</p> 
    })}
        </div>
          
    </div>
}