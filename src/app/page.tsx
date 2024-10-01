"use client"
import {DndContext, closestCenter, DragEndEvent} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { HeaderSection } from "@/components/headerSection/HeaderSection";
import { TodoColumn } from "@/components/ColumnOfWorks/TodoColumn/TodoColumn";
import { InProgressColumn } from "@/components/ColumnOfWorks/InProgressColumn/InProgressColumn";
import { DoneColumn } from "@/components/ColumnOfWorks/DoneColumn/DoneColumn";
import { useDispatch } from "react-redux";
import {setStartEndDate, updateTodoStatus} from "@/store/states/worksSlice";

export default function Home() {
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

    return (
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
            <div>
                <HeaderSection />
                <div className="mx-auto my-12 border border-transparent border-b-amber-400 h-0.5 w-[90%]" />
                <div className="flex justify-around w-full">
                    <SortableContext items={["todo", "inProgress", "done"]} strategy={rectSortingStrategy}>
                        <div className="w-1/3">
                            <TodoColumn id="todo" />
                        </div>
                        <div className="w-1/3 mx-2">
                            <InProgressColumn id="inProgress" />
                        </div>
                        <div className="w-1/3">
                            <DoneColumn id="done" />
                        </div>
                    </SortableContext>
                </div>
            </div>
        </DndContext>
    );
}
