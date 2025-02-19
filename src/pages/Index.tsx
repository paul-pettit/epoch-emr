
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
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Top Navigation */}
      <header className="epic-header">
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
      </header>

      {/* Secondary Navigation */}
      <div className="bg-white border-b border-[--epic-border] p-2 flex items-center gap-2">
        <button className="epic-nav-button">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="epic-nav-button">
          <ChevronRight className="h-4 w-4" />
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

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow">
          {/* Patient Info Header */}
          <div className="border-b border-[--epic-border] p-4 flex items-center gap-4">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold">
              TT
            </div>
            <div>
              <h1 className="text-xl font-bold">5/27/2025 visit with Schorr, Alan Bruce, DO for RETURN PATIENT VISIT - follow up</h1>
              <div className="text-sm text-gray-600">
                TestPatient, Test • Male • 82 y.o. • 1/1/1943
              </div>
            </div>
          </div>

          {/* Eye Exam Section */}
          <div className="p-4">
            <div className="epic-section">
              <h2 className="text-lg font-bold mb-4">Eye Exam</h2>
              
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

                  <h3 className="font-bold mt-4 mb-2">Slit Lamp</h3>
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

            {/* Notes Section */}
            <div className="epic-section">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Progress Notes • 2/19/2025 02:21 PM</h2>
                <div className="flex gap-2">
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
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Medications:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Trazodone hcl 300 mg po tab 24hr, take 600 mg by mouth 2 times a day.</li>
                    <li>Vitamin k 100 mcg po tabs, take 1 by mouth daily.</li>
                    <li>Zolpidem tartrate er po, take 90 mg by mouth daily.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Physical Examination:</h3>
                  <p className="text-gray-600">Not recorded</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Tests Ordered:</h3>
                  <p className="text-gray-600">No orders of the following type(s) were placed in this encounter: Procedures, Ophthalmology Photography, Medical Imaging, Referral, Ophthalmology Procedures, Supplies.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Impression:</h3>
                  <p className="text-gray-600">No diagnosis found.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
