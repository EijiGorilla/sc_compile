import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
} from '@esri/calcite-components-react';
import { useEffect, useState } from 'react';
import { lotLayer } from '../layers';
import { ContractPackageDataProvider } from './ContractPackageContext';
import LotChart from './LotChart';
import loadable from '@loadable/component';

import '../index.css';
import '../App.css';

function MainChart() {
  const [lotLayerLoaded, setLotLayerLoaded] = useState<any>();
  useEffect(() => {
    lotLayer.load().then(() => {
      setLotLayerLoaded(lotLayer.loadStatus);
    });
  });

  // loadable for code splitting
  const NloChart = loadable(() => import('./NloChart'));
  const StructureChart = loadable(() => import('./StructureChart'));
  const TreeChart = loadable(() => import('./TreeChart'));
  const UtilityChart = loadable(() => import('./UtilityChart'));
  const ViaductChart = loadable(() => import('./ViaductChart'));

  return (
    <>
      <CalciteTabs slot="panel-end" layout="center" scale="m">
        <CalciteTabNav slot="title-group" id="thetabs">
          <CalciteTabTitle class="Land">Land</CalciteTabTitle>
          <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
          <CalciteTabTitle class="NLO">NLO</CalciteTabTitle>
          <CalciteTabTitle class="Tree">Tree</CalciteTabTitle>
          <CalciteTabTitle class="Utility">Utility</CalciteTabTitle>
          <CalciteTabTitle class="Viaduct">Viaduct</CalciteTabTitle>
        </CalciteTabNav>

        {/* CalciteTab: Lot */}
        <CalciteTab>
          <ContractPackageDataProvider>
            {lotLayerLoaded === 'loaded' && <LotChart />}
          </ContractPackageDataProvider>
        </CalciteTab>

        {/* CalciteTab: Structure */}
        <CalciteTab>
          <ContractPackageDataProvider>
            <StructureChart />
          </ContractPackageDataProvider>
        </CalciteTab>

        {/* CalciteTab: Non-Land Owner */}
        <CalciteTab>
          <ContractPackageDataProvider>
            <NloChart />
          </ContractPackageDataProvider>
        </CalciteTab>

        {/* CalciteTab: Tree */}
        <CalciteTab>
          <ContractPackageDataProvider>
            <TreeChart />
          </ContractPackageDataProvider>
        </CalciteTab>

        {/* CalciteTab: Utility */}
        <CalciteTab>
          <ContractPackageDataProvider>
            <UtilityChart />
          </ContractPackageDataProvider>
        </CalciteTab>

        {/* CalciteTab: Viaduct */}
        <CalciteTab>
          <ContractPackageDataProvider>
            <ViaductChart />
          </ContractPackageDataProvider>
        </CalciteTab>
      </CalciteTabs>
    </>
  );
}

export default MainChart;
