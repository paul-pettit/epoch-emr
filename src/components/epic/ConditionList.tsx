import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface Condition {
  name: string;
  buttons: string[];
}

interface ConditionListProps {
  conditionsData: Condition[];
  checkedConditions: string[];
  handleCheckboxChange: (conditionName: string) => void;
}

const ConditionList = ({
  conditionsData,
  checkedConditions,
  handleCheckboxChange,
}: ConditionListProps) => {
  return (
    <div className="">
      {conditionsData.map((condition) => (
        <div
          key={condition.name}
          className={`flex items-center gap-2 group hover:bg-blue-50 rounded`}
        >
          <div
            className={`flex items-center gap-2 min-w-[180px] ${
              checkedConditions.includes(condition.name) ? 'bg-blue-500 text-white p-0' : ''
            }`}
          >
            <input
              type="checkbox"
              className="h-3 w-3"
              checked={checkedConditions.includes(condition.name)}
              onChange={() => handleCheckboxChange(condition.name)}
            />
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
            <span className="px-1 py-0 text-xs bg-gray-100 hover:bg-gray-200 rounded border border-gray-300">None</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConditionList;