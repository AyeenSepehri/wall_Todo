import {HeaderSection} from "@/components/headerSection/HeaderSection";
import dynamic from "next/dynamic";

const ColumnSection = dynamic(() => import('@/components/ColumnSection/ColumnSection'), { ssr: false });

export default function Home() {
    return (
        <div>
            <HeaderSection/>
            <div className="mx-auto my-12 border border-transparent border-b-amber-400 h-0.5 w-[90%]"/>
            <ColumnSection/>
        </div>
    );
}
