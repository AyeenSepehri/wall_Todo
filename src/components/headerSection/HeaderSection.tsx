import Image from "next/image";
import ayeenAvatar from "../../../public/AyeenAvatar.jpg";
import dateBg from "../../../public/dateBg1.png";
import { toJalaali } from "jalaali-js"; // Correct import

export const HeaderSection = () => {
    // Get the current date in the Gregorian calendar
    const today = new Date();

    // Convert the current Gregorian date to the Jalali date
    const jalaaliDate = toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());

    // Extract day, month, and year
    const jalaaliDay = jalaaliDate.jd;
    const jalaaliMonth = jalaaliDate.jm;
    const jalaaliYear = jalaaliDate.jy;

    // Create a mapping for Jalali month names
    const jalaaliMonthNames = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
        "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ];

    return (
        <>
            <div className="flex items-center justify-between border-b-amber-400">
                <div className="flex items-center">
                    <Image className="w-[100px] rounded-full border-8" src={ayeenAvatar} alt={"ayeenAvatar"}/>
                    <div className='flex flex-col mr-1.5'>
                        <h2 className="text-2xl font-extrabold">آیین سپهری</h2>
                        <span className="text-lg text-gray-500">sepehriayeen96prgr@gmail.com</span>
                        <span className="text-lg text-gray-500">09109847148</span>
                    </div>
                </div>

                <div className="relative w-[160px]">
                    <div>
                        <Image className="w-[160px]" src={dateBg} alt={"dateBg"}/>
                    </div>
                    <div className="absolute flex flex-col text-gray-500 text-2xl top-7 left-3">
                        <span>امروز</span>
                        {/* Dynamically display the current Jalali date */}
                        <span>{`${jalaaliDay}/${jalaaliMonthNames[jalaaliMonth - 1]}/${jalaaliYear}`}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
