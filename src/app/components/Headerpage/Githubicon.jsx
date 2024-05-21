import Image from "next/image";
import Github from "./github.svg"
import Link from "next/link";



export default function Githubicon() {

    return (
        <>
        <div>         
            <Link href={"http://github.com/veriancs"} target="_hblank">
            
                <Image className="GitIcon " src={Github} height={28} width={28} alt="Github Icon">
                </Image>
               
            </Link>            

            

        </div>

        </>
    ) 
}