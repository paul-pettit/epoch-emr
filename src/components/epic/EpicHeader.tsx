import { ChevronLeft, Square, Circle, BarChart } from "lucide-react";
const EpicHeader = ({
  openScribe
}: {
  openScribe: () => void;
}) => {
  return <header className="relative">
      <div className="epic-header">
        <div className="flex items-center gap-4">
          <img src="/lovable-uploads/f2bc6dc5-ef17-406d-ba1d-2a750be0112e.png" alt="Epoch" className="h-6" />
          <div className="flex items-center gap-2">
            <input type="text" placeholder="Search (Ctrl+Space)" className="px-2 py-1 rounded text-black w-64" />
          </div>
        </div>
      </div>
      <div className="bg-[#005593] text-white p-2 flex">
        <div className="w-64"></div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-blue-700 rounded transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="epic-nav-button border-t-[3px] border-t-[#FEF7CD] rounded-none">
            <Square className="h-5 w-5 text-[#FEF7CD]" />
            <span>Zeiss Forum</span>
          </button>
          <button className="epic-nav-button border-t-[3px] border-t-red-500 rounded-none">
            <Circle className="h-4 w-4 text-red-500" />
            <span>Plan</span>
          </button>
          <button className="epic-nav-button border-t-[3px] border-t-blue-400 rounded-none">
            <Circle className="h-4 w-4 text-blue-400" />
            <span>Chart Review</span>
          </button>
          <button className="epic-nav-button border-t-[3px] border-t-white bg-blue-700 rounded-none">
            <BarChart className="h-4 w-4 text-white" />
            <span>Exam</span>
          </button>
          <button className="epic-nav-button border-t-[3px] border-t-teal-400 rounded-none">
            <Circle className="h-4 w-4 text-teal-400" />
            <span>Wrap-Up</span>
          </button>
          <button onClick={openScribe} className="epic-nav-button border-t-[3px] border-t-[#fc5478] rounded-none">
            <Circle className="h-4 w-4 text-[#fc5478] stroke-[3]" />
            <span>Ambient Scribe</span>
          </button>
        </div>
      </div>
    </header>;
};
export default EpicHeader;