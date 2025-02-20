import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { LayoutGrid, FileText, BarChart, Eye, Circle, MoreHorizontal, Glasses, CrosshairIcon, TestTubes, CheckCircle, ChevronDown, File, Settings, Search, RotateCcw, RotateCw, HelpCircle, PlusCircle } from "lucide-react";
import { useState, useCallback } from "react";
import ConditionList from "./ConditionList";

const ExamSection = () => {
  const [conditionsData, setConditionsData] = useState([
    { name: 'Clear incision', buttons: [] },
    { name: 'Debris in tear film', buttons: [] },
    { name: 'Degeneration', buttons: ['Arcus', 'Pterygium'] },
    { name: 'Dendrite', buttons: [] },
    { name: 'Descemet\'s folds', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Dystrophy', buttons: ['ABMD', 'Fuchs'] },
    { name: 'Edema', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Epithelial defect', buttons: [] },
    { name: 'Guttata', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Infiltrates', buttons: ['Sterile', 'Subepithelial'] },
    { name: 'Keratic precipitates', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Keratitis', buttons: [] },
    { name: 'Krukenberg\'s spindle', buttons: [] },
    { name: 'Neovascularization', buttons: ['Central', 'Periph'] },
    { name: 'Keratoplasty', buttons: ['LKP', 'PKP'] },
    { name: 'PEE', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Scar', buttons: ['LASIK'] },
    { name: 'Striae', buttons: ['1+', '2+', '3+', '4+'] },
    { name: 'Trauma', buttons: ['Laceration', 'Foreign'] }
  ]);

  const [checkedConditions, setCheckedConditions] = useState<string[]>([]);

  const handleCheckboxChange = useCallback((conditionName: string) => {
    setCheckedConditions((prev) => {
      if (prev.includes(conditionName)) {
        return prev.filter((name) => name !== conditionName);
      } else {
        return [...prev, conditionName];
      }
    });
  }, []);

  return (
    <div className="flex-1 min-w-0">
      <div className="epic-exam-section h-full flex flex-col">
        <div className="flex items-center gap-0.5 px-1 py-1 border-b border-gray-200 bg-[#003059]">
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] hover:bg-[#0068a8]" style={{ borderTop: '2px solid #FFDA63' }}>
            <div className="bg-[#FFDA63] rounded p-0.5">
              <LayoutGrid className="h-3 w-3 text-[#C68600]" />
            </div>
            <span className="text-xs font-medium text-white">Zeiss Forum</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] hover:bg-[#0068a8]" style={{ borderTop: '2px solid #F06292' }}>
            <div className="bg-[#F06292] rounded p-0.5">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-white">Plan</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] hover:bg-[#0068a8]" style={{ borderTop: '2px solid #87CEEB' }}>
            <div className="bg-[#87CEEB] rounded p-0.5">
              <BarChart className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-white">Chart Review</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#E0E0E0] hover:bg-[#EEEEEE]" style={{ borderTop: '2px solid #90EE90' }}>
            <div className="bg-[#90EE90] rounded p-0.5">
              <Eye className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs font-medium text-[#212121]">Exam</span>
          </button>
          
          <button className="flex items-center gap-1.5 px-2 py-1 bg-[#005791] border border-[#90CAF9] hover:bg-[#0068a8]" style={{ borderTop: '2px solid pink' }} onClick={() => window.open('https://scribe.athelas.com', '_blank', 'noopener,noreferrer,width=1280,height=720,location=no')}>
            <div className="bg-[#003059] rounded p-0.5">
              <Circle className="h-3 w-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-xs font-medium text-white">Ambient Scribe</span>
          </button>
        </div>

        <div className="bg-[#e6eaee] text-[#00426c] rounded-md p-1 font-bold" style={{ border: '1px solid #00426c', borderStyle: 'inset', marginTop: '0px', marginLeft: '0px', marginBottom: '8px', textAlign: 'left' }}>
          02/18/25 visit with Dr. Michael Commons - For Return Visit / Follow Up
        </div>

        <div className="w-full">
          <img 
            src="/lovable-uploads/12dd6138-d9ee-4770-9833-272b9bec4743.png" 
            alt="Eye Exam"
            className="h-12"
          />
        </div>

        <div className="flex border-b border-gray-200">
          <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-blue-500">
            <span className="text-blue-600">Main Menu</span>
          </button>
          <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
            <Glasses className="h-4 w-4" />
            <span>Contact Lens</span>
          </button>
          <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
            <Eye className="h-4 w-4" />
            <span>Strabismus</span>
          </button>
          <button className="inline-flex items-center px-2 py-0.5 text-sm gap-1 text-gray-600">
            <TestTubes className="h-4 w-4" />
            <span>ROP</span>
          </button>
        </div>
        
        <ResizablePanelGroup direction="horizontal" className="flex flex-1">
          <ResizablePanel defaultSize={65} minSize={30}>
            <div className="p-2">
              <div className="space-y-3 text-xs">
                <div className="exam-grid items-start">
                  <div className="flex items-center gap-1 text-gray-600 justify-start">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs">Exam Normal</span>
                    <ChevronDown className="h-4 w-4" />
                    <div className="flex items-center gap-1 text-gray-400 ml-auto">
                      <File className="h-3 w-3" />
                      <span className="text-xs">Copy Previous</span>
                    </div>
                  </div>
                  <div className="exam-column"></div>
                  <div className="exam-column"></div>
                </div>

                <div className="exam-section">
                  <h3 className="exam-header">External</h3>
                  <div className="flex justify-between">
                    <span className="text-center">Right</span>
                    <span className="text-center">Left</span>
                  </div>
                  <div className="exam-grid items-start">
                    <div className="flex gap-1 items-center justify-center">
                      <span className="exam-label">Ext</span>
                      <input type="text" id="external-right" defaultValue="Normal" className="exam-field flex-1" />
                    </div>
                    <div className="flex justify-center">
                      <input type="checkbox" id="external-checkbox" className="h-3 w-3" onChange={(e) => {
                        const rightValue = (document.getElementById('external-right') as HTMLInputElement).value;
                        const leftInput = document.getElementById('external-left') as HTMLInputElement;
                        if (e.target.checked) {
                          leftInput.value = rightValue;
                        } else {
                          leftInput.value = '';
                        }
                      }} />
                    </div>
                    <div>
                      <input type="text" id="external-left" defaultValue="Normal" className="exam-field w-full" />
                    </div>
                  </div>
                </div>
                <hr className="w-full" />
                <div className="exam-section">
                  <h3 className="exam-header">Slit Lamp</h3>
                  <div className="flex justify-between">
                    <span>Right</span>
                    <span>Left</span>
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { label: 'L/L', value: 'Normal', id: 'slitlamp-ll' },
                      { label: 'C/S', value: 'White and quiet', id: 'slitlamp-cs' },
                      { label: 'Cornea', value: 'Edema, Corneal dystrophy', id: 'slitlamp-cornea' },
                      { label: 'AC', value: 'Deep and quiet', id: 'slitlamp-ac' },
                      { label: 'Iris', value: 'Round and reactive', id: 'slitlamp-iris' },
                      { label: 'Lens', value: '+1 Nuclear sclerosis', id: 'slitlamp-lens' },
                      { label: 'Vitreous', value: 'Normal', id: 'slitlamp-vitreous' },
                    ].map((item) => (
                      <div key={item.label} className="exam-grid">
                        <div className="flex gap-1 items-center">
                          <span className="exam-label">{item.label}</span>
                          <input type="text" id={`${item.id}-right`} defaultValue={item.value} className="exam-field flex-1" />
                        </div>
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            id={`${item.id}-checkbox`}
                            className="h-3 w-3"
                            onChange={(e) => {
                              const rightValue = (document.getElementById(`${item.id}-right`) as HTMLInputElement).value;
                              const leftInput = document.getElementById(`${item.id}-left`) as HTMLInputElement;
                              if (e.target.checked) {
                                leftInput.value = rightValue;
                              } else {
                                leftInput.value = '';
                              }
                            }}
                          />
                        </div>
                        <div>
                          <input type="text" id={`${item.id}-left`} defaultValue={item.value} className="exam-field w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="w-full" />
                <div className="exam-section">
                  <h3 className="exam-header">Fundus</h3>
                  <div className="flex justify-between">
                    <span>Right</span>
                    <span>Left</span>
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { label: 'Disc', value: 'Normal', id: 'fundus-disc' },
                      { label: 'C/D Ratio', value: '0.3', id: 'fundus-cdratio' },
                      { label: 'Macula', value: 'Normal', id: 'fundus-macula' },
                      { label: 'Vessels', value: 'Normal', id: 'fundus-vessels' },
                      { label: 'Periph', value: 'Normal', id: 'fundus-periph' },
                    ].map((item) => (
                      <div key={item.label} className="exam-grid">
                        <div className="flex gap-1 items-center">
                          <span className="exam-label">{item.label}</span>
                          <input type="text" id={`${item.id}-right`} defaultValue={item.value} className="exam-field flex-1" />
                        </div>
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            id={`${item.id}-checkbox`}
                            className="h-3 w-3"
                            onChange={(e) => {
                              const rightValue = (document.getElementById(`${item.id}-right`) as HTMLInputElement).value;
                              const leftInput = document.getElementById(`${item.id}-left`) as HTMLInputElement;
                              if (e.target.checked) {
                                leftInput.value = rightValue;
                              } else {
                                leftInput.value = '';
                              }
                            }}
                          />
                        </div>
                        <div>
                          <input type="text" id={`${item.id}-left`} defaultValue={item.value} className="exam-field w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="w-full" />
                

                <div>
                  <div style={{textAlign: 'left'}}>
                    <img
                      src="/lovable-uploads/menu.png"
                      alt="Menu Bar"
                      className="h-6 object-contain"
                      style={{ display: 'block', marginLeft: '0', maxWidth: '100%' }}
                    />
                  </div>
                  <textarea
                    className="w-full p-1 border rounded-b-md h-24 text-xs"
                    placeholder="Additional notes..."
                  ></textarea>
                </div>
              </div>
            </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          <ResizablePanel defaultSize={35} minSize={20}>
            <div className="p-2">
              <div className="flex border-b border-gray-200">
                <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                  <span className="text-xs">Base</span>
                </button>
                <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 gap-1 text-gray-600">
                  <span className="text-xs">Addl</span>
                </button>
                <button className="inline-flex items-center px-2 py-0.5 text-sm border-r border-gray-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-blue-500">
                  <span className="text-xs text-blue-600">Cornea</span>
                </button>
              </div>
              <h3 className="text-xs font-bold mb-2">Conditions</h3>
              <ConditionList
                conditionsData={conditionsData}
                checkedConditions={checkedConditions}
                handleCheckboxChange={handleCheckboxChange}
              />
              <img
                src="/lovable-uploads/examimge.png"
                alt="Clock"
                className="h-24 w-full object-contain"
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ExamSection;
