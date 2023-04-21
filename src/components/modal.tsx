export default function Modal({accuracy,wpm}){
    const highAccuracyClass = 'text-green-500 font-bold text-2xl'
    const lowAccuracyClass = 'text-red-500 font-bold text-2xl'
    return <div className="flex flex-col h-4/6 w-4/12 border border-blue-500 rounded-md left-1/2 top-1/2 backdrop-blur-3xl transform -translate-x-1/2 -translate-y-1/2 justify-around items-center p-1 shadow-2xl absolute  top-20 left-40 bg-white bg-opacity-80">
        <span className="w-6/12 text-2xl flex flex-col items-center m-auto">
            <h2>Race Completed !</h2>
            <img src="./check.png" alt="" />
            <p><strong className={wpm > 30 ? highAccuracyClass:lowAccuracyClass}>{wpm}</strong> WPM</p>
            <p><strong className={accuracy > 60 ? highAccuracyClass:lowAccuracyClass}>{accuracy}%</strong> accuracy</p>
        </span>
    </div>
}