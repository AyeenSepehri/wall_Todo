import Image from "next/image";
import ayeenAvatar from "../../../public/AyeenAvatar.jpg"
import dateBg from "../../../public/dateBg1.png"

export const HeaderSection = () => {
    return(
        <>
            <div className="flex items-center justify-between border-b-amber-400">
                <div className="flex items-center">
                    <Image className="w-[100px] rounded-full border-8" src={ayeenAvatar} alt={"ayeenAvatar"}/>
                    <div className='flex flex-col mr-1.5'>
                        <h2 className="text-2xl font-extrabold">آیین سپهری</h2>
                        <span className="text-lg text-gray-500">sepehriayeen96prgr@gmail.com</span>
                        <span className="text-lg text-gray-500">09109847148</span>
                    </div>
                </div>

                <div className="relative w-[160px]">
                    <div>
                        <Image className="w-[160px]" src={dateBg} alt={"dateBg"}/>
                    </div>
                    <div className="absolute flex flex-col text-gray-500 text-2xl top-7 left-4">
                        <span>امروز</span>
                        <span>6/مهر/1403</span>
                    </div>
                </div>
            </div>
        </>
    )
}