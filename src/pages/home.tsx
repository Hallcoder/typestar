import Feed from "@/components/Feed";
import Layout from "@/components/Layout";

export default function HomePage({children}){
    return <Layout>
        <section className="flex justify-between">
            <div className="m-10">side ad</div>
            <Feed />
            <div className="m-10">other side ad</div>
        </section>
        <h1>Footer</h1>
    </Layout>
}