import { useState } from "react";
import { TodoDatePicker } from "@/components/Modal/AddWorkModal/features/DatePicker/TodoDatePicker";
import { useDispatch } from "react-redux";
import { addOrUpdateTodo } from "@/store/states/worksSlice";
import { Value } from "react-multi-date-picker";
import { v4 as uuidv4 } from "uuid";

export const AddWorkModal = () => {
    const [title, setTitle] = useState("");
    const [selectedDate, setSelectedDate] = useState<Value | null>(null);
    const [selectedHour, setSelectedHour] = useState<string>(""); // State for hour
    const [selectedMinute, setSelectedMinute] = useState<string>(""); // State for minute
    const dispatch = useDispatch();


    // Helper function to convert Jalali selected date to Gregorian Date and set hours/minutes
    const createDeadlineDate = (date: any, hour: string, minute: string): Date | null => {
        if (!date) return null; // Check if date is null or invalid

        const gregorianDate = date?.toDate(); // Convert Jalali date to Gregorian
        if (!gregorianDate || isNaN(gregorianDate.getTime())) return null; // Check if date is valid

        // Set the hour and minute, and make sure seconds are set to zero
        gregorianDate.setHours(Number(hour), Number(minute), 0, 0); // Set hours, minutes, and seconds
        return gregorianDate;
    };

    const handleAddWork = () => {
        if (!title || !selectedDate) {
            alert("Please fill out all fields!");
            return;
        }

        const registrationDate = new Date(); // Exact time when the button is clicked
        const deadline = createDeadlineDate(selectedDate, selectedHour, selectedMinute); // Combine date and time for deadline

        console.log(registrationDate , deadline)
        if (!deadline) {
            alert("Invalid date or time selected!");
            return;
        }

        // Dispatch the new todo item with uuid as the unique id
        dispatch(
            addOrUpdateTodo({
                id: uuidv4(), // Generate a unique ID using uuid
                title,
                registrationDate: registrationDate.toISOString(), // Dispatch registration date as a string in ISO format
                deadline: deadline.toISOString(), // Dispatch deadline date as a string in ISO format
                status: "todo", // Default status for new todos
                isDelayed: false,
                startDate: null,
                endDate: null,
            })
        );

        // Clear the form after adding the todo
        setTitle("");
        setSelectedDate(null);
        setSelectedHour("00");
        setSelectedMinute("00");
    };

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
                    {/* Minutes Dropdown */}
                    <select
                        className="border-2 border-black h-11 rounded-lg w-1/2 pr-2"
                        value={selectedMinute}
                        onChange={(e) => setSelectedMinute(e.target.value)}
                    >
                        <option>دقیقه</option>
                        {Array.from({ length: 60 }, (_, i) => (
                            <option key={i} value={i < 10 ? `0${i}` : i}>
                                {i < 10 ? `0${i}` : i}
                            </option>
                        ))}
                    </select>

                    <span className="font-bold text-2xl mx-1">:</span>

                    {/* Hours Dropdown */}
                    <select
                        className="border-2 border-black h-11 rounded-lg w-1/2 pr-2"
                        value={selectedHour}
                        onChange={(e) => setSelectedHour(e.target.value)}
                    >
                        <option>ساعت</option>
                        {Array.from({ length: 24 }, (_, i) => (
                            <option key={i} value={i < 10 ? `0${i}` : i}>
                                {i < 10 ? `0${i}` : i}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-sedri-green rounded-3xl px-10 py-3"
                    onClick={handleAddWork}
                >
                    افزودن کار
                </button>
            </div>
        </div>
    );
};
