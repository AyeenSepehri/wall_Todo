"use client"
import {closestCenter, DndContext, DragEndEvent} from "@dnd-kit/core";
import {rectSortingStrategy, SortableContext} from "@dnd-kit/sortable";
import {useDispatch} from "react-redux";
import {setStartEndDate, updateTodoStatus} from "@/store/states/worksSlice";
import dynamic from 'next/dynamic';

// Dynamically import the Column component to disable SSR
const Column = dynamic(() => import('@/components/ColumnOfWorks/Column'), { ssr: false });


const ColumnSection = () => {
    const dispatch = useDispatch();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            const itemId = active.id;
            const newStatus = over.id;

            // Update the item's status based on the drop target (column)
            dispatch(updateTodoStatus({ id: itemId, status: newStatus }));

            if (newStatus !== "todo") {
                dispatch(setStartEndDate({
                    id: itemId,
                    ...(newStatus === "inProgress" && {startDate: new Date()}),
                    ...(newStatus === "done" && {endDate: new Date()}),
                }))
            }
        }
    };

    const columnsId = ["todo" , "inProgress" , "done"]
    return(
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
            <div className="flex justify-around w-full">
                <SortableContext items={["todo", "inProgress", "done"]} strategy={rectSortingStrategy}>
                    {columnsId.map((column, i) => (
                        <div key={i} className={`w-1/3 ${column === "inProgress" && "mx-3"}`}>
                            <Column id={column}/>
                        </div>
                    ))}
                </SortableContext>
            </div>
        </DndContext>
    )
}

export default ColumnSection;