import Headerpage from "./components/Headerpage/Headerpage"
import Whoamcont from "./components/Whoamcont/Whoamcont"
import Footer from "./components/Footer/Footer"
import Separator from "./components/Pagecontent/Separator"
import Pagecontent from "./components/Pagecontent/Pagecontent"
import Subfooter from "./components/Footer/Subfooter"



export default function Page () {
  return (
    <>
      <Headerpage></Headerpage>
      <Whoamcont></Whoamcont>
      <Separator></Separator>
      <Pagecontent></Pagecontent>
      <Footer></Footer>
      
    </>
  )
}