import Image from "next/image";
import calendarIcon from "../../../public/icons/calendarIcon.svg"
import tickSignIcon from "../../../public/icons/tickSign.svg"
import trashIcon from "../../../public/icons/trashIcon.svg"
import editIcon from "../../../public/icons/editIcon.svg"


export const Card = ({cardData} :any) => {

    return(
        <div className="border-2 border-green-500 rounded-lg p-3 mb-8">
            <div className="bg-lime-100 py-8 px-10 rounded-lg shadow-xl hover:shadow-2xl">
                <div className="pb-4 flex flex-wrap items-center w-full">
                    <span className="text-lg font-semibold">
                    {cardData.title}
                    </span>
                </div>

                <div>
                    <div className="border border-transparent border-b-gray-400 mb-5"/>
                </div>

                <div className="flex items-start mb-5">
                    <Image className="ml-2" src={calendarIcon} alt={"calendarIcon"}/>
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">تاریخ ثبت: {cardData.registrationDate}</span>
                        <span className="text-sm text-gray-600">ساعت: 16:15</span>
                    </div>
                </div>

                <div className="flex items-start">
                    <Image className="ml-2" src={tickSignIcon} alt={"tickSignIcon"}/>
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">مهلت پایان: {cardData.deadline}</span>
                        <span className="text-sm text-gray-600">ساعت: 16:15</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 justify-end">
                    <button>
                        <Image src={trashIcon} alt={"trashIcon"}/>
                    </button>
                    <button>
                        <Image src={editIcon} alt={"editIcon"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}