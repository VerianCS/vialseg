import Headerpage from "./components/Headerpage/Headerpage"
import Whoamcont from "./components/Whoamcont/Whoamcont"
import Footer from "./components/Footer/Footer"
import Separator from "./components/Pagecontent/Separator"
import Pagecontent from "./components/Pagecontent/Pagecontent"
import Subfooter from "./components/Footer/Subfooter"
import { stringify } from "postcss"



export default function Page () {
  return (
    <>
      <Headerpage></Headerpage>

      <Whoamcont></Whoamcont>
      <Pagecontent></Pagecontent>
  
      <Footer></Footer>
    </>
  )
}

