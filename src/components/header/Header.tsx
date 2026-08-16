import { Clapperboard } from "lucide-react"
import FavoriteBadge from "./favorite-Badge"

function Header(){
return(

    <>
    <div className="bg-gray-900 w-full h-14 flex flex-row justify-between">


<div className=" flex gap-2 text-white p-4  ">
<Clapperboard/> Movie Manager
</div>

<div>
<FavoriteBadge/>
</div>

    </div>
    
    
    </>
)

}
export default Header