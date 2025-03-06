import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteButton } from '@esri/calcite-components-react';
import { useEffect, useRef, useState } from 'react';
import { measurement, view } from '../Scene';

function MeasurementTool() {
  const [activeAnalysis, setActiveAnalysis] = useState<any | undefined>('');
  const measurementToolDiv = useRef<HTMLDivElement | undefined | any>(null);

  useEffect(() => {
    // Measurement tool
    measurement.container = measurementToolDiv.current;
    const measureButton = document.getElementById('measurementToolMenu') as HTMLElement;
    view.ui.add(measureButton, 'top-right');
  }, []);

  useEffect(() => {
    if (activeAnalysis === 'directLineMeasurementAnalysisButton') {
      measurement.activeTool = 'direct-line';
    } else if (activeAnalysis === 'areaMeasurementAnalysisButton') {
      measurement.activeTool = 'area';
    } else if (activeAnalysis === 'clearButton') {
      measurement.clear();
    }
  }, [activeAnalysis]);

  return (
    <>
      <div
        id="measurementToolMenu"
        className="esri-widget"
        style={{
          padding: '0.5em',
          maxWidth: '110px',
          width: '200px',
          height: '45px',
        }}
      >
        <CalciteButton
          id="directLineMeasurementAnalysisButton"
          icon-start="measure-line"
          title="Interact with direct line measurement"
          onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
        ></CalciteButton>
        <CalciteButton
          id="areaMeasurementAnalysisButton"
          icon-start="measure-area"
          title="Interact with area measurement"
          onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
        ></CalciteButton>
        <CalciteButton
          id="clearButton"
          icon-start="trash"
          title="Clear measurement"
          onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
        ></CalciteButton>
      </div>
    </>
  );
}

export default MeasurementTool;
