import {HeaderSection} from "@/components/headerSection/HeaderSection";
import {TodoColumn} from "@/components/ColumnOfWorks/TodoColumn/TodoColumn";
import {InProgressColumn} from "@/components/ColumnOfWorks/InProgressColumn/InProgressColumn";
import {DoneColumn} from "@/components/ColumnOfWorks/DoneColumn/DoneColumn";

export default function Home() {
  return (
      <div>
          <div>
              <HeaderSection/>
          </div>

          <div className="mx-auto my-12 border border-transparent border-b-amber-400 h-0.5 w-[90%]"/>

          <div className="flex items-center justify-around w-full">
              <div className="w-1/3">
                  <TodoColumn/>
              </div>
              <div className="w-1/3 mx-2">
                  <InProgressColumn/>
              </div>
              <div className="w-1/3">
                  <DoneColumn/>
              </div>
          </div>

      </div>
  );
}
