import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import {
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalcitePanel,
} from '@esri/calcite-components-react';
import { useEffect, useRef, useState } from 'react';
import { basemaps, layerList } from '../Scene';
import loadable from '@loadable/component';
import { ContractPackageDataProvider } from './ContractPackageContext';

function ActionPanel() {
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);

  //   const LotProgressChart = loadable(() => import('./LotProgressChart'));
  const LotProgressChart = loadable(() => import('./LotProgressChart'));
  const HandedOverAreaChart = loadable(() => import('./HandedOverAreaChart'));
  const ViaductProgressChart = loadable(() => import('./ViaductProgressChart'));

  useEffect(() => {
    basemaps.container = calcitePanelBasemaps.current;
    layerList.container = layerListDiv.current;
  });

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

  return (
    <>
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

          {/* <CalciteAction
            data-action-id="charts"
            icon="graph-time-series"
            text="Progress Chart"
            id="charts"
            onClick={(event: any) => {
              setNextWidget(event.target.id);
              setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
            }}
          ></CalciteAction> */}

          <CalciteAction
            data-action-id="handedover-charts"
            icon="graph-bar-side-by-side"
            text="Handed-Over Area"
            id="handedover-charts"
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
          style={{ width: '18vw' }}
          hidden
        >
          <div id="layers-container" ref={layerListDiv}></div>
        </CalcitePanel>

        <CalcitePanel
          heading="Basemaps"
          height-scale="l"
          data-panel-id="basemaps"
          style={{ width: '18vw' }}
          hidden
        >
          <div id="basemap-container" ref={calcitePanelBasemaps}></div>
        </CalcitePanel>

        <CalcitePanel
          class="timeSeries-panel"
          height-scale="l"
          data-panel-id="charts"
          hidden
        ></CalcitePanel>

        <CalcitePanel
          class="handedOverArea-panel"
          height-scale="l"
          data-panel-id="handedover-charts"
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
                  <b>Click the chart series</b> in the tab to view the corresponding progress on the
                  map.
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

      {/* Lot progress chart */}
      <ContractPackageDataProvider>
        {nextWidget === 'charts' && nextWidget !== activeWidget && <LotProgressChart />}
      </ContractPackageDataProvider>

      {/* Lot handed-over area chart */}
      {nextWidget === 'handedover-charts' && nextWidget !== activeWidget && <HandedOverAreaChart />}

      {/* Viaduct progress chart */}
      <ContractPackageDataProvider>
        {nextWidget === 'viaduct-charts' && nextWidget !== activeWidget && <ViaductProgressChart />}
      </ContractPackageDataProvider>
    </>
  );
}

export default ActionPanel;
