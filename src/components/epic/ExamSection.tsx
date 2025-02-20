
import { ResizablePanel } from "@/components/ui/resizable";

const ExamSection = () => {
  return (
    <ResizablePanel defaultSize={45}>
      <div className="epic-exam-section">
        <div>
          <img 
            src="/lovable-uploads/12dd6138-d9ee-4770-9833-272b9bec4743.png" 
            alt="Eye Exam"
            className="h-8"
          />
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
        </div>
      </div>
    </ResizablePanel>
  );
};

export default ExamSection;
