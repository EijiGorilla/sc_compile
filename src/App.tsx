/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList, measurement, searchExpand } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTab,
  CalciteButton,
} from '@esri/calcite-components-react';

import LotChart from './components/LotChart';
import ViaductProgressChart from './components/ViaductProgressChart';
import loadable from '@loadable/component';
import LotProgressChart from './components/LotProgressChart';
import { dateUpdate } from './Query';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const measurementToolDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // For dropdown filter
  const [cpValueSelected, setCpValueSelected] = useState<any>('All');
  const contractPackage = [
    'All',
    'S-01',
    'S-02',
    'S-03a',
    'S-03b',
    'S-03c',
    'S-04',
    'S-05',
    'S-06',
    'S-07',
  ];

  // Tab change
  const [tabCheckedName, setTabCheckedName] = useState('Land');

  // Measurement tools
  const [activeAnalysis, setActiveAnalysis] = useState<any | undefined>('');

  // load building layer
  const [buildingLayerLoaded, setBuildingLayerLoaded] = useState<any>();

  const StructureChart = loadable(() => import('./components/StructureChart'));
  const NloChart = loadable(() => import('./components/NloChart'));
  const TreeChart = loadable(() => import('./components/TreeChart'));
  const UtilityChart = loadable(() => import('./components/UtilityChart'));
  const ViaductChart = loadable(() => import('./components/ViaductChart'));

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  // Measurement Tool
  useEffect(() => {
    if (activeAnalysis === 'directLineMeasurementAnalysisButton') {
      measurement.activeTool = 'direct-line';
    } else if (activeAnalysis === 'areaMeasurementAnalysisButton') {
      measurement.activeTool = 'area';
    } else if (activeAnalysis === 'clearButton') {
      measurement.clear();
    }
    view.ui.add(measurement, 'top-right');
  }, [activeAnalysis]);

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });

    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;

      // Measurement tool
      measurement.container = measurementToolDiv.current;
      const measureButton = document.getElementById('measurementToolMenu') as HTMLElement;
      view.ui.add(measureButton, 'top-right');

      layerList.container = layerListDiv.current;
      view.ui.add(searchExpand, {
        position: 'top-right',
      });
    }
  }, []);

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '27vw' }}>
          <div id="chartPanel" style={{ height: '100%' }}>
            <CalciteTabNav
              slot="title-group"
              onCalciteTabChange={(event) =>
                setTabCheckedName(event.target.selectedTitle.className)
              }
            >
              <CalciteTabTitle class="Land">Land</CalciteTabTitle>
              <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
              <CalciteTabTitle class="NLO">NLO</CalciteTabTitle>
              <CalciteTabTitle class="Tree">Tree</CalciteTabTitle>
              <CalciteTabTitle class="Utility">Utility</CalciteTabTitle>
              <CalciteTabTitle class="Viaduct">Viaduct</CalciteTabTitle>
            </CalciteTabNav>
            {/* CalciteTab: Lot */}
            <CalciteTab>
              <LotChart contractp={!cpValueSelected ? '' : cpValueSelected} />
            </CalciteTab>

            {/* CalciteTab: Structure */}
            <CalciteTab>
              {tabCheckedName === 'Structure' && (
                <StructureChart contractp={!cpValueSelected ? '' : cpValueSelected} />
              )}
            </CalciteTab>

            {/* CalciteTab: Non-Land Owner */}
            <CalciteTab>
              {tabCheckedName === 'NLO' && (
                <NloChart contractp={!cpValueSelected ? '' : cpValueSelected} />
              )}
            </CalciteTab>

            {/* CalciteTab: Trees */}
            <CalciteTab>
              {tabCheckedName === 'Tree' && (
                <TreeChart contractp={!cpValueSelected ? '' : cpValueSelected} />
              )}
            </CalciteTab>

            {/* CalciteTab: Utility */}
            <CalciteTab>
              {tabCheckedName === 'Utility' && (
                <UtilityChart contractp={!cpValueSelected ? '' : cpValueSelected} />
              )}
            </CalciteTab>

            {/* CalciteTab: Viaduct */}
            <CalciteTab>
              {tabCheckedName === 'Viaduct' && (
                <ViaductChart contractp={!cpValueSelected ? '' : cpValueSelected} />
              )}
            </CalciteTab>
          </div>
        </CalciteTabs>
        <header
          slot="header"
          id="headerDiv"
          style={{ display: 'flex', width: '100%', height: '55px', padding: '0.4rem' }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle" style={{ width: '30%' }}>
            SC OVERALL PROGRESS
          </b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>
          <CalciteSegmentedControl
            scale="m"
            onCalciteSegmentedControlChange={(event: any) =>
              setCpValueSelected(event.target.selectedItem.id)
            }
          >
            {cpValueSelected &&
              contractPackage.map((contractp: any, index: any) => {
                return (
                  <CalciteSegmentedControlItem
                    {...(cpValueSelected === contractp ? { checked: true } : {})}
                    key={index}
                    value={contractp}
                    id={contractp}
                  >
                    {contractp}
                  </CalciteSegmentedControlItem>
                );
              })}
          </CalciteSegmentedControl>
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'75px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: '0.5rem',
              marginRight: '2rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="lot-charts"
              icon="graph-bar"
              text="Handed-Over Lot"
              id="lot-charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="viaduct-charts"
              icon="graph-bar-stacked"
              text="Viaduct Construction"
              id="viaduct-charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '20vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '20vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="lot-charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="viaduct-charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    <b>Check progress</b> by clicking each tab on the right: Land, Structure, NLO,
                    Trees, Utiliy Relocation, and Viaduct.
                  </li>
                  <br />
                  <li>
                    <b>Click the chart series</b> in the tab to view the corresponding progress on
                    the map.
                  </li>
                  <br />
                  <li>
                    <b>Bar-graph icon</b> in the action panel shows monthly progress on handed-over
                    lots.{' '}
                  </li>
                  <li>
                    <b>Stacked-bar-graph icon</b> in the action panel shows monthly progress on
                    viaduct construction.{' '}
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '470px',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <div className="mapDiv" ref={mapDiv}></div>

        {/* Measurement Tools */}
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

        {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
        {nextWidget === 'lot-charts' && nextWidget !== activeWidget ? (
          <LotProgressChart contractp={!cpValueSelected ? '' : cpValueSelected} />
        ) : (
          ''
        )}

        {/* Viaduct progress chart is loaded ONLY when charts widget is clicked. */}
        {nextWidget === 'viaduct-charts' && nextWidget !== activeWidget ? (
          <ViaductProgressChart contractp={!cpValueSelected ? '' : cpValueSelected} />
        ) : (
          ''
        )}
      </CalciteShell>
    </>
  );
}

export default App;
