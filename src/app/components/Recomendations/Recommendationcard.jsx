import Image from "next/image"



export default function Recommendationcard({CardImage, CardTitle, CardContent}) {
    return(
        <>
<div class="max-w-sm rounded overflow-hidden shadow-lg content-center">
  <Image class="w-full" src={CardImage} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{CardContent}Texto del consejo</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>

</div>
        </>
    ) 
}