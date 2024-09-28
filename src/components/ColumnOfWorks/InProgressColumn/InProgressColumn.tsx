import Image from "next/image";
import inProgressIcon from "../../../../public/icons/inProgressIcon.svg";
import plusSignIcon from "../../../../public/icons/plusSign.svg";
import { Card } from "@/components/Cards/Card";
import { CardDataTypes } from "@/components/Cards/types";

export const InProgressColumn = () => {
    const demoTodoData: CardDataTypes[] = [
        {
            id: 1,
            title: "طراحی لوگو برای سایت آرایشی سفورا",
            registrationDate: "1403/7/4",
            deadline: "1403/7/10",
            status: "inProgress",
            isDelayed: false,
            startDate: "1403/7/7",
            endDate: null,
        },
        {
            id: 2,
            title: "پاشم یه گوهی بخورم",
            registrationDate: "1403/7/4",
            deadline: "1403/7/10",
            status: "inProgress",
            isDelayed: true,
            startDate: "1403/7/7",
            endDate: null,
        },
        {
            id: 3,
            title: "یه عشق و حال ریز",
            registrationDate: "1403/7/4",
            deadline: "1403/7/6",
            status: "inProgress",
            isDelayed: false,
            startDate: "1403/7/7",
            endDate: null,
        },
    ];

    return (
        <div className="p-8 bg-white rounded-lg shadow-md shadow-lime-200">
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
                {demoTodoData.map((item) => (
                    <div key={item.id}>
                        <Card cardData={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};
