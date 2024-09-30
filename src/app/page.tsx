import { HeaderSection } from "@/components/headerSection/HeaderSection";
import { TodoColumn } from "@/components/ColumnOfWorks/TodoColumn/TodoColumn";
import { InProgressColumn } from "@/components/ColumnOfWorks/InProgressColumn/InProgressColumn";
import { DoneColumn } from "@/components/ColumnOfWorks/DoneColumn/DoneColumn";

export default function Home() {
    return (
        <div>
            <HeaderSection />

            <div className="mx-auto my-12 border border-transparent border-b-amber-400 h-0.5 w-[90%]" />

            {/* Container for the columns */}
            <div className="flex justify-around w-full">
                <div className="w-1/3">
                    {/* Ensure columns align at the top */}
                    <div className="flex flex-col h-full">
                        <TodoColumn />
                    </div>
                </div>
                <div className="w-1/3 mx-2">
                    <div className="flex flex-col h-full">
                        <InProgressColumn />
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col h-full">
                        <DoneColumn />
                    </div>
                </div>
            </div>
        </div>
    );
}
