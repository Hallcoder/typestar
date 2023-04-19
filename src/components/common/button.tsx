export default function Button({clickHandler,children}){
    return <button onClick={clickHandler} className=' px-4 bg-blue-200 rounded-md h-[4vh] m-2'>
     {children}
    </button>
}