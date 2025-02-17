
import { imgUrl } from "../config"

const Cast = ({ image }) => {

    return (
        <>
            <div className=" w-[250px] bg-[#33393f] p-2 rounded-lg text-center">
               <img src={`${imgUrl}/${image.profile_path}`} alt="" className="overflow-hidden cursor-pointer rounded-sm"/>
                <p className="text-[#fff] line-clamp-1 text-sm pt-2">{image.original_name}</p>
                <p className="text-[#fff]  text-sm ">{image.character}</p>
            </div>
        </>
    )
}

export default Cast