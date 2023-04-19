import Navbar from "./Navbar";

interface Props{
    children:any[]
}
const Layout:React.FC<Props> = ({children}) => {
   return <main className="flex-col  h-full min-h-screen">
    <Navbar />
    {children}
   </main>
}    

export default Layout;