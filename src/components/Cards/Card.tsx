import Image from "next/image";
import calendarIcon from "../../../public/icons/calendarIcon.svg";
import tickSignIcon from "../../../public/icons/tickSign.svg";
import ClockIcon from "../../../public/icons/clockIcon.svg";
import bellIcon from "../../../public/icons/bellIcon.svg";
import trashIcon from "../../../public/icons/trashIcon.svg";
import editIcon from "../../../public/icons/editIcon.svg";
import {CardProps} from "@/components/Cards/types"; // Use the imported CardProps

export const Card = ({cardData}: CardProps) => {
    const {
        title,
        registrationDate,
        deadline,
        status,
        isDelayed,
        startDate,
        endDate
    } = cardData;
    return (
        <div
            className={`
                ${status === "todo" && !isDelayed && "border-green-500" ||
            status === "inProgress" && !isDelayed && "border-yellow-500" ||
            isDelayed && "border-red-500"
            } border-2  rounded-lg p-3 mb-8 min-h-80 min-w-80`}
        >
            <div
                className={`
                ${status === "todo" && !isDelayed && "bg-green-100" ||
                status === "inProgress" && !isDelayed && "bg-yellow-100" ||
                isDelayed && "bg-red-100"
                } py-8 px-10 rounded-lg shadow-xl hover:shadow-2xl h-72 flex flex-col justify-between`}
            >
                <div className="pb-2 flex flex-wrap items-center w-full">
                    <span className="text-lg font-semibold">{title}</span>
                </div>

                <div className="flex items-center mb-5">
                    {/* Border that grows to fill the remaining space */}
                    <div className="border border-transparent border-b-gray-400 flex-grow"/>
                    {status === "inProgress" && !isDelayed && (
                        <div className="mr-1">
                            <Image src={ClockIcon} alt={"ClockIcon"}/>
                        </div>
                    )}
                    {isDelayed && (
                        <div className="mr-2">
                            <Image src={bellIcon} alt={"bellIcon"}/>
                        </div>
                    )}
                </div>


                <div className="flex items-start mb-5">
                    <Image className="ml-2" src={calendarIcon} alt={"calendarIcon"}/>
                    <div className="flex flex-col">
                        {status === "todo" && (
                            <>
                                <span className="text-md font-semibold">تاریخ ثبت: {registrationDate}</span>
                                <span className="text-sm text-gray-600">ساعت: 16:15</span>
                            </>
                        )}
                        {status === "inProgress" && (
                            <>
                                <span className="text-md font-semibold">تاریخ شروع: {startDate}</span>
                                <div className="flex items-center mt-1">
                                    <span className="text-sm text-gray-600">ساعت: 16:15</span>
                                    <span className="text-sm text-red-500">(ثبت شده در: {registrationDate})</span>
                                </div>
                            </>
                        )}

                    </div>
                </div>

                <div className="flex items-start">
                    <Image className="ml-2" src={tickSignIcon} alt={"tickSignIcon"}/>
                    <div className="flex flex-col">
                        <span className="text-md font-semibold">مهلت پایان: {deadline}</span>
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
    );
};
