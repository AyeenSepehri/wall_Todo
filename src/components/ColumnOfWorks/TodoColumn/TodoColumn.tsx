import Image from "next/image";
import todoIcon from "../../../../public/icons/todoIcon.svg";
import plusSignIcon from "../../../../public/icons/plusSign.svg";
import {Card} from "@/components/Cards/Card";
import {CardDataTypes} from "@/components/Cards/types";

export const TodoColumn = () => {

    const demoTodoData = [
        {
            id: 1,
            title: "طراحی لوگو برای سایت آرایشی سفورا",
            registrationDate: "1403/7/4",
            deadline: "1403/7/10",
            status: "todo",
            startDate: null,
            endDate: null,
        },
        {
            id: 2,
            title: "پاشم یه گوهی بخورم",
            registrationDate: "1403/7/4",
            deadline: "1403/7/10",
            status: "todo",
            startDate: null,
            endDate: null,
        },
        {
            id: 3,
            title: "یه عشق و حال ریز",
            registrationDate: "1403/7/4",
            deadline: "1403/7/10",
            status: "todo",
            startDate: null,
            endDate: null,
        },
    ]

    return (
        <div className="p-8 bg-white rounded-lg shadow-md shadow-lime-200">
            <div className="relative">
                {/* Box with different rounded corners */}
                <div className="h-16 flex justify-center rounded-r-full bg-sedri-green items-center">
                    <span className="text-center text-2xl font-bold">لیست کارها</span>
                </div>

                {/* Circle with shadow on left side */}
                <div
                    className="flex justify-center h-16 w-16 absolute rounded-full bg-amber-400 top-0 right-0"
                    style={{boxShadow: "-8px 0px 15px rgba(0, 0, 0, 0.3)"}}
                >
                    <Image className="flex justify-center items-center" src={todoIcon} alt={"todoIcon"}/>
                </div>
            </div>

            <div
                className="my-8 border-2 border-dashed border-box-green rounded-lg flex flex-col justify-center items-center gap-2 p-5">
                <Image src={plusSignIcon} alt={"plusSignIcon"}/>
                <span className="text-md text-box-green">افزودن کار جدید</span>
            </div>

            <div>
                {demoTodoData.map((item: CardDataTypes) => {
                    console.log(item)
                    return (
                        <div key={item.id}>
                            <Card cardData={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
