import { ChevronLeft, FileText, User, Calendar, Check, X, Globe, AlertTriangle, Users, CreditCard, TestTube2, Eye, Plus, Home, Car, Utensils, Heart } from "lucide-react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header>
        <div className="epic-header">
          <div className="flex items-center gap-4">
            <span className="font-bold">Epic</span>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Search (Ctrl+Space)" className="px-2 py-1 rounded text-black w-64" />
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
      </header>

      <div className="flex flex-1">
        {/* Left Sidebar - Patient Info */}
        <div className="w-64 bg-[#003861] text-[#b2e2ff] border-r border-[--epic-border] p-4 space-y-4">
          <div className="flex items-center gap-4">
            <div className="epic-patient-avatar">TT</div>
            <div>
              <div className="font-semibold">TestPatient, Test</div>
              <div className="text-sm opacity-90">Male • 82 y.o.</div>
              <div className="text-sm opacity-90">DOB: 1/1/1943</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Interpreter: Not needed</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">Code: Not on file</span>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Isolation Status:</div>
              <span className="text-sm">None</span>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Providers Attending:</div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Dr. Alan Bruce Schorr</span>
              </div>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Primary Coverage:</div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="text-sm">Medicare</span>
              </div>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Allergies:</div>
              <div className="bg-yellow-100 p-2 rounded text-[#003861]">
                <span>No known allergies</span>
              </div>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Preferred Lab:</div>
              <div className="flex items-center gap-2">
                <TestTube2 className="h-4 w-4" />
                <span className="text-sm">Quest Diagnostics</span>
              </div>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Previous Eye Exams:</div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span className="text-sm">Last: 3 months ago</span>
              </div>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Next Visit:</div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">6/27/2025</span>
              </div>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm font-semibold">Imaging & Procedures:</div>
                <button className="text-[#b2e2ff] hover:text-white">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm">No recent procedures</span>
            </div>

            <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
              <div className="text-sm font-semibold mb-1">Social Determinants:</div>
              <div className="flex justify-end gap-2 mt-2">
                <div className="bg-[#F2FCE2] p-1 rounded">
                  <Home className="h-4 w-4 text-green-700" />
                </div>
                <div className="bg-[#FEF7CD] p-1 rounded">
                  <Car className="h-4 w-4 text-yellow-700" />
                </div>
                <div className="bg-[#FEC6A1] p-1 rounded">
                  <Utensils className="h-4 w-4 text-orange-700" />
                </div>
                <div className="bg-[#D3E4FD] p-1 rounded">
                  <Heart className="h-4 w-4 text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Resizable Panels */}
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          <ResizablePanel defaultSize={60}>
            <div className="epic-exam-section">
              <div className="epic-exam-header">
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
              <div className="border-b border-gray-200">
                <div className="flex gap-1 px-2">
                  <button className="exam-tab exam-tab-active">
                    Main Exam
                  </button>
                  <button className="exam-tab exam-tab-inactive">
                    Contact Lenses
                  </button>
                  <button className="exam-tab exam-tab-inactive">
                    Strabismus
                  </button>
                  <button className="exam-tab exam-tab-inactive">
                    ROP
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 p-2">
                  <div className="space-y-3 text-xs">
                    <div className="exam-grid">
                      <div></div>
                      <div className="exam-column">OD</div>
                      <div className="exam-column">OS</div>
                    </div>

                    <div className="exam-section">
                      <h3 className="exam-header">External</h3>
                      <div className="exam-grid">
                        <div className="flex gap-1 items-center">
                          <span className="exam-label">Ext</span>
                          <input type="text" defaultValue="Normal" className="exam-field flex-1" />
                        </div>
                        <div className="flex justify-center">
                          <input type="checkbox" checked className="h-3 w-3" />
                        </div>
                        <div>
                          <input type="text" defaultValue="Normal" className="exam-field w-full" />
                        </div>
                      </div>
                    </div>

                    <div className="exam-section">
                      <h3 className="exam-header">Slit Lamp</h3>
                      <div className="space-y-0.5">
                        {[
                          { label: 'L/L', value: 'Normal' },
                          { label: 'C/S', value: 'White and quiet' },
                          { label: 'Cornea', value: 'Edema, Corneal dystrophy' },
                          { label: 'AC', value: 'Deep and quiet' },
                          { label: 'Iris', value: 'Round and reactive' },
                          { label: 'Lens', value: '+1 Nuclear sclerosis' },
                          { label: 'Vitreous', value: 'Normal' },
                        ].map((item) => (
                          <div key={item.label} className="exam-grid">
                            <div className="flex gap-1 items-center">
                              <span className="exam-label">{item.label}</span>
                              <input type="text" defaultValue={item.value} className="exam-field flex-1" />
                            </div>
                            <div className="flex justify-center">
                              <input type="checkbox" checked className="h-3 w-3" />
                            </div>
                            <div>
                              <input type="text" defaultValue={item.value} className="exam-field w-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="exam-section">
                      <h3 className="exam-header">Fundus</h3>
                      <div className="space-y-0.5">
                        {[
                          { label: 'Disc', value: 'Normal' },
                          { label: 'C/D Ratio', value: '0.3' },
                          { label: 'Macula', value: 'Normal' },
                          { label: 'Vessels', value: 'Normal' },
                          { label: 'Periph', value: 'Normal' },
                        ].map((item) => (
                          <div key={item.label} className="exam-grid">
                            <div className="flex gap-1 items-center">
                              <span className="exam-label">{item.label}</span>
                              <input type="text" defaultValue={item.value} className="exam-field flex-1" />
                            </div>
                            <div className="flex justify-center">
                              <input type="checkbox" checked className="h-3 w-3" />
                            </div>
                            <div>
                              <input type="text" defaultValue={item.value} className="exam-field w-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <textarea 
                        className="w-full p-1 border rounded h-24 text-xs" 
                        placeholder="Additional notes..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="w-48 conditions-list">
                  <h3 className="text-xs font-bold mb-2">Conditions</h3>
                  {[
                    'Clear incision',
                    'Debris in tear film',
                    'Degeneration',
                    'Descemet\'s folds',
                    'Dystrophy',
                    'Edema',
                    'Epithelial defect',
                    'Guttata',
                    'Infiltrates',
                    'Keratic precipitates',
                    'Keratitis',
                    'Krukenberg\'s spindle',
                    'Neovascularization',
                    'Opacity',
                    'Keratoplasty',
                    'PEE',
                    'Scar',
                    'Striae',
                    'Trauma'
                  ].map((condition) => (
                    <div key={condition} className="condition-item">
                      <input type="checkbox" className="h-3 w-3" />
                      <span>{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-blue-500 hover:bg-blue-600 transition-colors" />

          <ResizablePanel defaultSize={40}>
            <div className="epic-notes-section h-full">
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
        </ResizablePanelGroup>
      </div>
    </div>;
};

export default Index;
