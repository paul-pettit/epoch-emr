
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";
import EpicHeader from "@/components/epic/EpicHeader";
import PatientSidebar from "@/components/epic/PatientSidebar";
import ExamSection from "@/components/epic/ExamSection";
import ConditionsList from "@/components/epic/ConditionsList";
import ProgressNotes from "@/components/epic/ProgressNotes";

const Index = () => {
  const openScribe = () => {
    window.open(
      'https://scribe.athelas.com',
      'Athelas Scribe',
      'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no'
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <EpicHeader openScribe={openScribe} />
      
      <div className="flex flex-1 h-[calc(100vh-7.5rem)]">
        <PatientSidebar />
        <div className="epic-vertical-separator" />
        
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          <ExamSection />
          <ResizableHandle className="w-1 bg-gray-200 hover:bg-gray-300 transition-colors" />
          <ConditionsList />
          <ResizableHandle className="w-1 bg-gray-200 hover:bg-gray-300 transition-colors" />
          <ProgressNotes />
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Index;
