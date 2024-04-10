"use client"
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import InputForm from "./components/InputForm";
import PredictionOutput from "./components/PredictionOutput";

const ResizableComponent: React.FC = () => {
  return (
    <>
      <PanelGroup className="h-full" autoSaveId="example" direction="horizontal">
        <Panel className="h-full" defaultSize={25}>
          <div className="flex items-center justify-center flex-col bg-slate-300 h-full">
            <InputForm />
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <PanelResizeHandle />
          <div className="h-full bg-slate-400">
            <PredictionOutput />
          </div>
        </Panel>
      </PanelGroup>
    </>
  );
};

export default ResizableComponent;
