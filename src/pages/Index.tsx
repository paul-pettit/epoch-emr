
import { 
  ChevronLeft, 
  ChevronRight, 
  Search,
  FileText,
  User,
  Calendar,
  Check,
  X
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header>
        <div className="epic-header">
          <div className="flex items-center gap-4">
            <span className="font-bold">Epic</span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search (Ctrl+Space)"
                className="px-2 py-1 rounded text-black w-64"
              />
            </div>
          </div>
        </div>
        <div className="epic-top-nav bg-gradient-to-r from-[--epic-darker-blue] to-[--epic-blue] text-white p-2">
          <button className="p-1 hover:bg-blue-700 rounded">
            <FileText className="h-4 w-4" />
          </button>
          <button className="p-1 hover:bg-blue-700 rounded">
            <User className="h-4 w-4" />
          </button>
          <span className="mx-2">|</span>
          <button className="epic-nav-button">Chart</button>
          <button className="epic-nav-button">Encounters</button>
        </div>
      </div>

      {/* Patient Banner */}
      <div className="bg-[--epic-light-blue] p-4 border-b border-[--epic-border]">
        <div className="flex items-center gap-4">
          <div className="epic-patient-avatar">
            TT
          </div>
          <div>
            <h1 className="text-lg font-semibold">5/27/2025 visit with Schorr, Alan Bruce, DO for RETURN PATIENT VISIT - follow up</h1>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span>TestPatient, Test</span>
              <span>•</span>
              <span>Male</span>
              <span>•</span>
              <span>82 y.o.</span>
              <span>•</span>
              <span>1/1/1943</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="epic-main-content">
        {/* Left Section - Eye Exam */}
        <div className="epic-exam-section">
          <div className="border-b border-[--epic-border] bg-gray-50 p-2">
            <div className="flex gap-2">
              <button className="epic-nav-button">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="epic-nav-button">
                <FileText className="h-4 w-4" />
                Zeiss Forum
              </button>
              <button className="epic-nav-button">Plan</button>
              <button className="epic-nav-button">Chart Review</button>
              <button className="epic-nav-button">Exam</button>
              <button className="epic-nav-button">Wrap-Up</button>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Eye Exam</h2>
            </div>

            <div className="exam-grid">
              {/* Left Column */}
              <div>
                <h3 className="font-bold mb-2">External</h3>
                <div className="space-y-2">
                  <div className="exam-item">
                    <input type="checkbox" checked className="exam-checkbox" />
                    <span>Normal</span>
                  </div>
                </div>

                <h3 className="font-bold mt-6 mb-2">Slit Lamp</h3>
                <div className="space-y-2">
                  <div className="exam-item">
                    <input type="checkbox" checked className="exam-checkbox" />
                    <span>Normal</span>
                  </div>
                  <div className="exam-item">
                    <input type="checkbox" checked className="exam-checkbox" />
                    <span>White and quiet</span>
                  </div>
                  <div className="exam-item">
                    <input type="checkbox" checked className="exam-checkbox" />
                    <span>Edema, Corneal dystrophy 2+</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="font-bold mb-2">Conditions</h3>
                <div className="space-y-2">
                  <div className="exam-item">
                    <input type="checkbox" className="exam-checkbox" />
                    <span>Clear incision</span>
                    <span className="ml-auto text-gray-500">None</span>
                  </div>
                  <div className="exam-item">
                    <input type="checkbox" checked className="exam-checkbox" />
                    <span>Descemet's folds</span>
                    <span className="ml-auto">2+</span>
                  </div>
                  <div className="exam-item">
                    <input type="checkbox" checked className="exam-checkbox" />
                    <span>Guttata</span>
                    <span className="ml-auto">3+</span>
                  </div>
                  <div className="exam-item">
                    <input type="checkbox" className="exam-checkbox" />
                    <span>Keratitis</span>
                    <span className="ml-auto text-gray-500">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Notes */}
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
      </div>
    </div>
  );
};

export default Index;
