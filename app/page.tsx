import Banner from "@/components/banner/banner";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import SubNav from "@/components/subnav/subnav";


export default function Home() {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <SubNav/>
     <main>
      <Banner/>
   </main>
    </>
  
  )
}
