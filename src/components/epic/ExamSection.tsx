
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { LayoutGrid, FileText, BarChart, Eye, Circle, MoreHorizontal, Glasses, CrosshairIcon, TestTubes } from "lucide-react";

const ExamSection = () => {
  const conditionsData = [
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
  ];

  return (
    <div className="flex-1 min-w-0">
      <div className="epic-exam-section h-full flex flex-col">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#FEF7CD]/10">
            <LayoutGrid className="h-4 w-4" style={{color: '#FEF7CD'}} />
            <span className="text-sm">Zeiss Forum</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#D946EF]/10">
            <FileText className="h-4 w-4" style={{color: '#D946EF'}} />
            <span className="text-sm">Plan</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#D3E4FD]/10">
            <BarChart className="h-4 w-4" style={{color: '#D3E4FD'}} />
            <span className="text-sm">Chart Review</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#8E9196]/10">
            <Eye className="h-4 w-4" style={{color: '#8E9196'}} />
            <span className="text-sm">Exam</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#D946EF]/10">
            <div className="relative">
              <Circle className="h-4 w-4" style={{color: '#D946EF', strokeWidth: 3}} />
            </div>
            <span className="text-sm">Ambient Scribe</span>
          </button>
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
          </ResizablePanel>
          
          <ResizableHandle />
          
          <ResizablePanel defaultSize={35} minSize={20}>
            <div className="p-2">
              <h3 className="text-xs font-bold mb-2">Conditions</h3>
              <div className="space-y-1">
                {conditionsData.map((condition) => (
                  <div key={condition.name} className="flex items-center gap-2 group hover:bg-blue-50 p-1 rounded">
                    <div className="flex items-center gap-2 min-w-[180px]">
                      <input type="checkbox" className="h-3 w-3" />
                      <span className="text-xs">{condition.name}</span>
                      {condition.buttons.length > 0 && (
                        <button className="opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="h-3 w-3 text-gray-500" />
                        </button>
                      )}
                    </div>
                    {condition.buttons.length > 0 && (
                      <div className="flex gap-1 flex-wrap">
                        {condition.buttons.map((btn) => (
                          <button
                            key={btn}
                            className="px-1 py-0 text-xs bg-gray-100 hover:bg-gray-200 rounded border border-gray-300"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="ml-auto">
                      <span className="text-xs text-gray-500">None</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ExamSection;
