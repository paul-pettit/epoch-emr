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
          {/* Eye Exam Panel */}
          <ResizablePanel defaultSize={75}>
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
              <div className="epic-exam-content">
                <div className="p-4">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold">Eye Exam</h2>
                  </div>

                  <div className="space-y-6 text-sm">
                    {/* External Section */}
                    <div>
                      <h3 className="font-bold mb-2">External</h3>
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div>
                          <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                        </div>
                        <div className="flex justify-center">
                          <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                        </div>
                        <div>
                          <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Slit Lamp Section */}
                    <div>
                      <h3 className="font-bold mb-2">Slit Lamp</h3>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>L/L</span>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>C/S</span>
                            <input type="text" defaultValue="White and quiet" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="White and quiet" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Cornea</span>
                            <input type="text" defaultValue="Edema, Corneal dystrophy" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Edema, Corneal dystrophy" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>AC</span>
                            <input type="text" defaultValue="Deep and quiet" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Deep and quiet" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Iris</span>
                            <input type="text" defaultValue="Round and reactive" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Round and reactive" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Lens</span>
                            <input type="text" defaultValue="+1 Nuclear sclerosis" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="+1 Nuclear sclerosis" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Vitreous</span>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fundus Section */}
                    <div>
                      <h3 className="font-bold mb-2">Fundus</h3>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Disc</span>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>C/D Ratio</span>
                            <input type="text" defaultValue="0.3" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="0.3" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Macula</span>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Vessels</span>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div className="flex gap-2 items-center">
                            <span>Periph</span>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                          <div className="flex justify-center">
                            <input type="checkbox" checked className="h-4 w-4 rounded border-gray-300" />
                          </div>
                          <div>
                            <input type="text" defaultValue="Normal" className="w-full p-1 border rounded" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Notes Textarea */}
                    <div>
                      <textarea 
                        className="w-full p-2 border rounded h-32" 
                        placeholder="Additional notes..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-blue-500 hover:bg-blue-600 transition-colors" />

          {/* Notes Panel */}
          <ResizablePanel defaultSize={25}>
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
