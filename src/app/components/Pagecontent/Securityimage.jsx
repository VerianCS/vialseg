
import Image from "next/image"


export default function Securityimage({ imageComponent }) {
    return (
        <Image src={imageComponent} 
        width={500} 
        height={500} 
        alt="A runway image" 
        className="ImageVial rounded-md shadow-lg shadow-slate-700">
        </Image>
    )

}
