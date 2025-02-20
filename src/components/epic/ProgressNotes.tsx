
import { Check, X, Bold, Italic, AlignLeft, Plus, Share2, Lock, Edit3, AlertTriangle, Mail } from "lucide-react";
import { ResizablePanel } from "@/components/ui/resizable";
import { useState } from "react";

const ProgressNotes = () => {
  const [medications, setMedications] = useState(`62) Trazodone hcl 300 mg po tab 24hr, take 600 mg by mouth 2 times a day.
63) Vitamin k 100 mcg po tabs, take 1 by mouth daily.
64) Zolpidem tartrate er po, take 90 mg by mouth daily.`);
  const [physicalExam, setPhysicalExam] = useState("Not recorded");
  const [testsOrdered, setTestsOrdered] = useState("No orders of the following type(s) were placed in this encounter: Procedures, Ophthalmology Photography, Medical Imaging, Referral, Ophthalmology Procedures, Supplies.");
  const [impression, setImpression] = useState("No diagnosis found.");

  return (
    <ResizablePanel defaultSize={35}>
      <div className="epic-notes-section h-full flex flex-col bg-white">
        {/* Static top section */}
        <div className="flex-none p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-[#004d92] font-bold">My Note</h2>
            </div>
            <div className="flex gap-2">
              <Share2 className="w-4 h-4 text-[#666]" />
              <Lock className="w-4 h-4 text-[#004d92]" />
              <Edit3 className="w-4 h-4 text-[#666]" />
              <AlertTriangle className="w-4 h-4 text-[#666]" />
              <Mail className="w-4 h-4 text-[#666]" />
            </div>
          </div>

          <div className="text-sm text-[#004d92] mb-2">Progress Notes • 2/19/2025 02:21 PM</div>
          
          <div className="text-sm text-black mb-4">
            Summary: <span className="text-[#666] border-b border-[#666] inline-block w-[85%] ml-1"></span>
          </div>

          <div className="vintage-toolbar mb-2 flex items-center gap-1 bg-[#e4e4e4] p-1 border border-[#999]">
            <Bold className="w-4 h-4" />
            <Italic className="w-4 h-4" />
            <AlignLeft className="w-4 h-4" />
            <Plus className="w-4 h-4" />
            <select className="text-xs bg-[#f4f4f4] border border-[#999] px-1">
              <option>Insert SmartText</option>
            </select>
          </div>
        </div>

        {/* Scrollable section */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 space-y-4 [&>*+*]:border-t [&>*+*]:border-[#003366]">
            <div className="pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Medications:</h3>
              <textarea value={medications} onChange={e => setMedications(e.target.value)} className="w-full min-h-[100px] p-2 text-sm border border-[#999] bg-white text-[#333] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Physical Examination:</h3>
              <textarea value={physicalExam} onChange={e => setPhysicalExam(e.target.value)} className="w-full min-h-[60px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Tests Ordered:</h3>
              <textarea value={testsOrdered} onChange={e => setTestsOrdered(e.target.value)} className="w-full min-h-[80px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>

            <div className="pt-4 pb-4">
              <h3 className="font-bold mb-2 text-[#333]">Impression:</h3>
              <textarea value={impression} onChange={e => setImpression(e.target.value)} className="w-full min-h-[60px] p-2 text-sm border border-[#999] bg-[#f8f8f8] text-[#666] font-sans" />
            </div>
          </div>
        </div>

        {/* Static bottom section */}
        <div className="flex-none p-4 bg-[#e4e4e4] border-t border-[#999]">
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#666]">Sign when Signing Visit</span>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-4 py-1 bg-[#e8e8e8] border border-[#999] hover:bg-[#d8d8d8] text-[#333] text-sm">
                <Check className="h-4 w-4" />
                Accept
              </button>
              <button className="flex items-center gap-1 px-4 py-1 bg-[#e8e8e8] border border-[#999] hover:bg-[#d8d8d8] text-[#333] text-sm">
                <X className="h-4 w-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ProgressNotes;
