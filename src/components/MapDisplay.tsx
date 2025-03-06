import { useEffect, useRef } from 'react';
import { map, searchExpand, view, zoom } from '../Scene';
import '../index.css';
import '../App.css';

function MapDisplay() {
  //**** Set states */ test
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.ui.add(searchExpand, {
        position: 'top-right',
      });
      view.ui.add(zoom, { position: 'bottom-right' });

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
    }
  }, []);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>
    </>
  );
}

export default MapDisplay;
