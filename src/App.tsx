/* eslint-disable react/jsx-no-comment-textnodes */
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteShell } from '@esri/calcite-components-react';
import Header from './components/Header';
import ActionPanel from './components/ActionPanel';
import UndergroundSwitch from './components/UndergroundSwitch';
import MeasurementTool from './components/MeasurementTool';
import MainChart from './components/MainChart';
import MapDisplay from './components/MapDisplay';

function App() {
  return (
    <>
      <CalciteShell>
        {/* Calcite Action Panel */}
        <ActionPanel />

        {/* Map */}
        <MapDisplay />

        {/* Main Chart */}
        <MainChart />

        {/* Header display*/}
        <Header />

        {/* Measurement Tools */}
        <MeasurementTool />

        {/* Underground switch */}
        <UndergroundSwitch />
      </CalciteShell>
    </>
  );
}

export default App;
