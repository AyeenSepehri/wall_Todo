"use client"
import Image from "next/image";
import calendarIcon from "../../../public/icons/calendarIcon.svg";
import tickSignIcon from "../../../public/icons/tickSign.svg";
import ClockIcon from "../../../public/icons/clockIcon.svg";
import circleTickSignIcon from "../../../public/icons/circleTickSign.svg";
import bellIcon from "../../../public/icons/bellIcon.svg";
import trashIcon from "../../../public/icons/trashIcon.svg";
import editIcon from "../../../public/icons/editIcon.svg";
import {CardProps} from "@/components/Cards/types"; // Use the imported CardProps
import jalaali from "jalaali-js";
import React, {useState} from "react";
import {Modal} from "@/components/Modal/Modal";
import {EditAndAddWorkModal} from "@/components/Modal/AddWorkModal/EditAndAddWorkModal";
import {useDispatch} from "react-redux";
import { deleteTodo } from "@/store/states/worksSlice";


export const Card = ({cardData}: CardProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch()

    const {
        title,
        registrationDate,
        deadline,
        status,
        isDelayed,
        startDate,
        endDate
    } = cardData;
    console.log(registrationDate)

    // Convert Date to Jalali format
    const convertToJalaliDate = (gregorianDate: string): any => {
        const date = new Date(gregorianDate);
        const jalaliDate = jalaali.toJalaali(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        );
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        // Format Jalali date as a string (YYYY/MM/DD)
        return ({
            date: `${jalaliDate.jy}/${jalaliDate.jm < 10 ? `0${jalaliDate.jm}` : jalaliDate.jm}/${jalaliDate.jd < 10 ? `0${jalaliDate.jd}` : jalaliDate.jd}`,
            clock: `${hours}:${minutes}`
        })

    };

    const formattedRegDate = convertToJalaliDate(registrationDate);
    const formattedDeadline = convertToJalaliDate(deadline);

    const handleDelete = () => {
        dispatch(deleteTodo(cardData.id)); // Dispatch the deleteTodo action with the todo item's id
    };

    return (
        <>
            <div
                className={`
                ${status === "todo" && !isDelayed && "border-green-500" ||
                status === "inProgress" && !isDelayed && "border-yellow-500" ||
                status === "done" && !isDelayed && "border-blue-500" ||
                isDelayed && "border-red-500"
                } border-2  rounded-lg p-3 mb-8 min-h-80 min-w-80`}
            >
                <div
                    className={`
                ${status === "todo" && !isDelayed && "bg-green-100" ||
                    status === "inProgress" && !isDelayed && "bg-yellow-100" ||
                    status === "done" && !isDelayed && "bg-blue-100" ||
                    isDelayed && "bg-red-100"
                    } py-8 px-10 rounded-lg shadow-xl hover:shadow-2xl h-72 flex flex-col justify-between`}
                >
                    <div className="pb-2 flex flex-wrap items-center w-full">
                        <span className="text-lg font-semibold">{title}</span>
                    </div>

                    <div className="flex items-center mb-2">
                        {/* Border that grows to fill the remaining space */}
                        <div className="border border-transparent border-b-gray-400 flex-grow"/>
                        {status === "inProgress" && !isDelayed && (
                            <div className="mr-1">
                                <Image src={ClockIcon} alt={"ClockIcon"}/>
                            </div>
                        )}
                        {status === "done" && !isDelayed && (
                            <div className="mr-1">
                                <Image src={circleTickSignIcon} alt={"circleTickSignIcon"}/>
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
                                    <span className="text-md font-semibold">تاریخ ثبت: {formattedRegDate.date}</span>
                                    <span className="text-sm text-gray-600">ساعت: {formattedRegDate.clock}</span>
                                </>
                            )}
                            {(status === "inProgress" || status === "done") && (
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
                            {(status === "todo" || status === "inProgress") && (
                                <>
                                    <span className="text-md font-semibold">مهلت پایان: {formattedDeadline.date}</span>
                                    <span className="text-sm text-gray-600">ساعت: {formattedDeadline.clock}</span>
                                </>
                            )}
                            {status === "done" && (
                                <>
                                    <span className="text-md font-semibold">اتمام یافته: {endDate}</span>
                                    <div className="flex items-center mt-1 mb-2">
                                        <span className="text-sm text-gray-600">ساعت: 16:15</span>
                                        <span className="text-sm text-red-500">(تاریخ مهلت تا: {deadline})</span>
                                    </div>

                                </>
                            )}

                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-end">
                        <button onClick={handleDelete}>
                            <Image src={trashIcon} alt={"trashIcon"}/>
                        </button>
                        <button onClick={() => setModalOpen(true)}>
                            <Image src={editIcon} alt={"editIcon"}/>
                        </button>
                    </div>
                </div>
            </div>
            {/* Render the modal when open */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="افزودن کار جدید">
                <EditAndAddWorkModal
                    onClose={() => setModalOpen(false)}
                    todoItem={cardData}
                />
            </Modal>
        </>
    );
};
