"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import todoIcon from '../../../public/icons/todoIcon.svg';
import plusSignIcon from '../../../public/icons/plusSign.svg';
import { Card } from '@/components/Cards/Card';
import { CardDataTypes } from '@/components/Cards/types';
import { Modal } from '@/components/Modal/Modal';
import { EditAndAddWorkModal } from '@/components/Modal/AddWorkModal/EditAndAddWorkModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { useDroppable } from "@dnd-kit/core";

const Column = ({ id }: { id: string }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const todoState = useSelector((state: RootState) => state.works);
    const dispatch = useDispatch();

    const todoItems: CardDataTypes[] = todoState.filter(item => item.status === (id === "todo" && 'todo' || id === "inProgress" && 'inProgress' || id === "done" && 'done'));

    const { setNodeRef, isOver } = useDroppable({
        id: id,
    });

    useEffect(() => {
        setIsMounted(true); // Mark component as mounted for client-side only behavior
    }, []);

    const droppableStyle = isOver ? "bg-yellow-100" : "bg-white";

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch({ type: 'todos/checkDeadlines' });
        }, 60000);

        return () => clearInterval(intervalId);
    }, [dispatch]);

    return (
        <div ref={setNodeRef} className={`w-full p-8 rounded-lg shadow-md shadow-lime-200 ${droppableStyle}`}>
            <div className="relative">
                <div className="h-16 flex justify-center rounded-r-full bg-sedri-green items-center">
                    <span className="text-center text-2xl font-bold">
                        {id === "todo" && 'لیست کارها'}
                        {id === "inProgress" && 'کارهای در حال انجام'}
                        {id === "done" && 'کارهای انجام شده'}
                    </span>
                </div>
                <div className="flex justify-center h-16 w-16 absolute rounded-full bg-amber-400 top-0 right-0"
                     style={{ boxShadow: '-8px 0px 15px rgba(0, 0, 0, 0.3)' }}>
                    <Image className="flex justify-center items-center" src={todoIcon} alt={"todoIcon"} />
                </div>
            </div>

            {id === "todo" ? (
                <button
                    className="w-full my-8 border-2 border-dashed border-box-green rounded-lg flex flex-col justify-center items-center gap-2 p-5"
                    onClick={() => isMounted && setModalOpen(true)}
                >
                    <Image src={plusSignIcon} alt={"plusSignIcon"} />
                    <span className="text-md text-box-green">افزودن کار جدید</span>
                </button>
            ) : (
                <div className="my-8 border-2 border-dashed border-box-green rounded-lg flex flex-col justify-center items-center gap-2 p-5">
                    <Image src={plusSignIcon} alt={"plusSignIcon"} />
                    <span className="text-md text-box-green">کار مورد نظر را بکشید و رها کنید</span>
                </div>
            )}

            <div>
                {todoItems.map(item => (
                    <div key={item.id}>
                        <Card cardData={item} />
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="افزودن کار جدید">
                <EditAndAddWorkModal onClose={() => setModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default Column