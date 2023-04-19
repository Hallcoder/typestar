export default function FeedComponent(){
    return <div className="h-[12vh] flex p-1 justify-around flex-row shadow-md mb-2 mt-1 w-[35vw] flex rounded-sm">
        <span className="w-3/12">
            <img src="./favicon.png" alt="sample logo" className="h-[10vh] m-2 w-full" />
        </span>
        <span className="w-9/12">
        <nav>
            <h1 className="font-bold">Success</h1>
        </nav>
        <p>Another banger! <strong className="font-bold">YC</strong> is getting strong and earning a lot! What are you waiting for?</p>
        <p className="font-bold text-xs">Today 15:20 PM</p>
        </span>
    </div>
}