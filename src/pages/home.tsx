import Feed from "@/components/Feed";
import Layout from "@/components/Layout";
import { useRef } from "react";

export default function HomePage({children}){
    const adClass = 'h-[60vh] w-full rounded-sm relative '
    const firstAd = useRef(null);
    const secondAd = useRef(null);
    return <Layout>
        <section className="flex justify-between">
            <div className="m-10" ref={firstAd}>
                <span className="inline-block border p-1 absolute right-4 z-[1]">&#x2715;</span>
                <img src="./subway.jpeg" alt="ad" className={adClass}/>
            </div>
            <Feed />
            <div className="m-10" ref={secondAd}>
                <span className="border p-1 absolute left-[25vw] z-[1] ">&#x2715;</span>
                <img src="./poki.jpeg" alt="ad" className={adClass} />
            </div>
        </section>
        <h1>Footer</h1>
    </Layout>
}