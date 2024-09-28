import {HeaderSection} from "@/components/headerSection/HeaderSection";
import {TodoColumn} from "@/components/ColumnOfWorks/TodoColumn/TodoColumn";
import {InProgressColumn} from "@/components/ColumnOfWorks/InProgressColumn/InProgressColumn";

export default function Home() {
  return (
      <div>
          <div>
              <HeaderSection/>
          </div>

          <div className="mx-auto my-12 border border-transparent border-b-amber-400 h-0.5 w-[90%]"/>

          <div className="flex items-center justify-around">
              <div>
                  <TodoColumn/>
              </div>

              <div>
                  <InProgressColumn/>
              </div>
          </div>

      </div>
  );
}
