import '../index.css';
import '../App.css';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteSwitch } from '@esri/calcite-components-react';
import { useEffect, useState } from 'react';
import { map, view } from '../Scene';

function UndergroundSwitch() {
  const [underground, setUnderground] = useState<boolean>(false);

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  return (
    <>
      <div
        className="groundSwitchDiv"
        style={{
          position: 'fixed',
          zIndex: 1,
          bottom: 10,
          right: '31%',
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
    </>
  );
}

export default UndergroundSwitch;
