"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import todoIcon from "../../../../public/icons/todoIcon.svg";
import plusSignIcon from "../../../../public/icons/plusSign.svg";
import {Card} from "@/components/Cards/Card";
import {CardDataTypes} from "@/components/Cards/types";
import {Modal} from '@/components/Modal/Modal';
import {AddWorkModal} from "@/components/Modal/AddWorkModal/AddWorkModal";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store"; // Import the Modal component

export const TodoColumn = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const todoState = useSelector((state: RootState) => state.works)

    const todoItems: CardDataTypes[] = todoState?.filter((item) => item.status === "todo")

    return (
        <div className="w-full p-8 bg-white rounded-lg shadow-md shadow-lime-200">
            <div className="relative">
                <div className="h-16 flex justify-center rounded-r-full bg-sedri-green items-center">
                    <span className="text-center text-2xl font-bold">لیست کارها</span>
                </div>

                <div
                    className="flex justify-center h-16 w-16 absolute rounded-full bg-amber-400 top-0 right-0"
                    style={{boxShadow: "-8px 0px 15px rgba(0, 0, 0, 0.3)"}}
                >
                    <Image className="flex justify-center items-center" src={todoIcon} alt={"todoIcon"}/>
                </div>
            </div>

            <button
                className="w-full my-8 border-2 border-dashed border-box-green rounded-lg flex flex-col justify-center items-center gap-2 p-5"
                onClick={() => setModalOpen(true)}
            >
                <Image src={plusSignIcon} alt={"plusSignIcon"}/>
                <span className="text-md text-box-green">افزودن کار جدید</span>
            </button>

            <div>
                {todoItems.map((item) => (
                    <div key={item.id}>
                        <Card cardData={item}/>
                    </div>
                ))}
            </div>

            {/* Render the modal when open */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="افزودن کار جدید">
                <AddWorkModal/>
            </Modal>
        </div>
    );
};
