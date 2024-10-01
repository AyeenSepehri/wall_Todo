"use client"
import Image from "next/image";
import inProgressIcon from "../../../../public/icons/inProgressIcon.svg";
import plusSignIcon from "../../../../public/icons/plusSign.svg";
import { Card } from "@/components/Cards/Card";
import { CardDataTypes } from "@/components/Cards/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {useEffect} from "react";
import { useDroppable } from "@dnd-kit/core";

export const InProgressColumn = ({ id }: { id: string }) => {
    const todoState = useSelector((state: RootState) => state.works);
    const dispatch = useDispatch();

    const inProgressItems: CardDataTypes[] = todoState.filter(item => item.status === 'inProgress');
    useEffect(() => {
        // Set an interval to check every minute for delayed todos
        const intervalId = setInterval(() => {
            dispatch({ type: 'todos/checkDeadlines' }); // Trigger the checkDeadlines logic
        }, 60000); // 1 minute interval

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [dispatch]);

    // Use dndkit's useDroppable hook to make the column droppable
    const { setNodeRef, isOver } = useDroppable({
        id: id, // Column ID to match with the DnD context
    });

    // Add visual feedback if an item is dragged over this column
    const droppableStyle = isOver
        ? "bg-yellow-100" // Highlight background when an item is over the column
        : "bg-white";

    return (
        <div
            ref={setNodeRef}
            className={`w-full p-8 rounded-lg shadow-md shadow-lime-200 ${droppableStyle}`}
        >
            <div className="relative">
                <div className="h-16 flex justify-center rounded-r-full bg-sedri-green items-center">
                    <span className="text-center text-2xl font-bold">کارهای در حال انجام</span>
                </div>

                <div
                    className="flex justify-center h-16 w-16 absolute rounded-full bg-amber-400 top-0 right-0"
                    style={{ boxShadow: "-8px 0px 15px rgba(0, 0, 0, 0.3)" }}
                >
                    <Image className="flex justify-center items-center" src={inProgressIcon} alt={"inProgressIcon"} />
                </div>
            </div>

            <div
                className="my-8 border-2 border-dashed border-box-green rounded-lg flex flex-col justify-center items-center gap-2 p-5"
            >
                <Image src={plusSignIcon} alt={"plusSignIcon"} />
                <span className="text-md text-box-green">کار مورد نظر را بکشید و رها کنید</span>
            </div>

            <div>
                {inProgressItems.map((item) => (
                    <div key={item.id}>
                        <Card cardData={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};
