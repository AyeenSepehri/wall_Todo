import { useState } from "react";
import { TodoDatePicker } from "@/components/Modal/AddWorkModal/features/DatePicker/TodoDatePicker";

export const AddWorkModal = () => {
    const [title, setTitle] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    console.log(new Date(selectedDate ? selectedDate : ""));
    return (
        <div>
            <div className="flex flex-col mb-6 text-ri">
                <label className="font-bold mb-1">عنوان کار</label>
                <input
                    value={title}
                    className="border-2 border-black h-11 rounded-lg pr-2"
                    type="text"
                    placeholder="عنوان کار را به صورت کوتاه بنویسید"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="flex flex-col mb-6">
                <label className="font-bold mb-1">تاریخ پایان</label>
                <TodoDatePicker
                    selectedDate={selectedDate}
                    onDateChange={(value) => setSelectedDate(value)}
                />
            </div>
            <div className="flex flex-col mb-6">
                <label className="font-bold mb-1">ساعت پایان</label>
                <div className="w-full flex items-center justify-between">
                    <input
                        className="border-2 border-black h-11 rounded-lg w-1/2 pr-2"
                        type="text"
                        placeholder="دقیقه"
                    />
                    <span className="font-bold text-2xl mx-1">:</span>
                    <input
                        className="border-2 border-black h-11 rounded-lg w-1/2 pr-2"
                        type="text"
                        placeholder="ساعت"
                    />
                </div>
            </div>
            
            <div className="flex justify-center">
                <button className="bg-sedri-green rounded-3xl px-10 py-3">
                    افزودن کار
                </button>
            </div>
        </div>
    );
};
