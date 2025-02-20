
import { Check, X } from "lucide-react";
import { ResizablePanel } from "@/components/ui/resizable";

const ProgressNotes = () => {
  return (
    <ResizablePanel defaultSize={35}>
      <div className="epic-notes-section">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Progress Notes • 2/19/2025 02:21 PM</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Medications:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Trazodone hcl 300 mg po tab 24hr, take 600 mg by mouth 2 times a day.</li>
                <li>Vitamin k 100 mcg po tabs, take 1 by mouth daily.</li>
                <li>Zolpidem tartrate er po, take 90 mg by mouth daily.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Physical Examination:</h3>
              <p className="text-gray-600 text-sm">Not recorded</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Tests Ordered:</h3>
              <p className="text-gray-600 text-sm">No orders of the following type(s) were placed in this encounter: Procedures, Ophthalmology Photography, Medical Imaging, Referral, Ophthalmology Procedures, Supplies.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Impression:</h3>
              <p className="text-gray-600 text-sm">No diagnosis found.</p>
            </div>
          </div>

          <div className="fixed bottom-0 right-0 p-4 bg-white border-t border-[--epic-border] w-[400px]">
            <div className="flex justify-end gap-2">
              <button className="epic-nav-button">
                <Check className="h-4 w-4" />
                Accept
              </button>
              <button className="epic-nav-button">
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
