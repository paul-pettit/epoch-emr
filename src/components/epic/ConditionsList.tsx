
import { ResizablePanel } from "@/components/ui/resizable";

const ConditionsList = () => {
  return (
    <div className="flex-1 min-w-0">
      <div className="conditions-list h-full">
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
  );
};

export default ConditionsList;
