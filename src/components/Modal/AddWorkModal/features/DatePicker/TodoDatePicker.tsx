import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import { FC } from "react";

interface TodoDatePickerProps {
    selectedDate: Value | null;
    onDateChange: (date: Value) => void;
}

export const TodoDatePicker: FC<TodoDatePickerProps> = ({
                                                            selectedDate,
                                                            onDateChange,
                                                        }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
        <DatePicker
            value={selectedDate}
            onChange={onDateChange}
            calendarPosition="bottom-right"
            // Only restrict past dates if you're adding a new todo (not in edit mode)
            minDate={today}
            calendar={persian}
            locale={persian_fa}
            inputClass="border-2 border-black h-11 rounded-lg pr-2 w-full" // Custom style for the input
            placeholder="تاریخ مهلت پایان کار را وارد کنید" // Placeholder for the date picker input
        />
    );
};
