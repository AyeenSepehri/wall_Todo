// src/components/TodoColumn/TodoColumn.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import todoIcon from '../../../../public/icons/todoIcon.svg';
import plusSignIcon from '../../../../public/icons/plusSign.svg';
import { Card } from '@/components/Cards/Card';
import { CardDataTypes } from '@/components/Cards/types';
import { Modal } from '@/components/Modal/Modal';
import { EditAndAddWorkModal } from '@/components/Modal/AddWorkModal/EditAndAddWorkModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';

export const TodoColumn = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const todoState = useSelector((state: RootState) => state.works);
    const dispatch = useDispatch();

    const todoItems: CardDataTypes[] = todoState.filter(item => item.status === 'todo');

    useEffect(() => {
        // Set an interval to check every minute for delayed todos
        const intervalId = setInterval(() => {
            dispatch({ type: 'todos/checkDeadlines' }); // Trigger the checkDeadlines logic
        }, 60000); // 1 minute interval

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [dispatch]);

    return (
        <div className="w-full p-8 bg-white rounded-lg shadow-md shadow-lime-200">
            <div className="relative">
                <div className="h-16 flex justify-center rounded-r-full bg-sedri-green items-center">
                    <span className="text-center text-2xl font-bold">لیست کارها</span>
                </div>

                <div
                    className="flex justify-center h-16 w-16 absolute rounded-full bg-amber-400 top-0 right-0"
                    style={{ boxShadow: '-8px 0px 15px rgba(0, 0, 0, 0.3)' }}
                >
                    <Image className="flex justify-center items-center" src={todoIcon} alt={"todoIcon"} />
                </div>
            </div>

            <button
                className="w-full my-8 border-2 border-dashed border-box-green rounded-lg flex flex-col justify-center items-center gap-2 p-5"
                onClick={() => setModalOpen(true)}
            >
                <Image src={plusSignIcon} alt={"plusSignIcon"} />
                <span className="text-md text-box-green">افزودن کار جدید</span>
            </button>

            <div>
                {todoItems.map(item => (
                    <div key={item.id}>
                        <Card cardData={item} />
                    </div>
                ))}
            </div>

            {/* Render the modal when open */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="افزودن کار جدید">
                <EditAndAddWorkModal onClose={() => setModalOpen(false)} />
            </Modal>
        </div>
    );
};
