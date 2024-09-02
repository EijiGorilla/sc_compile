import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import BuildingSceneLayer from '@arcgis/core/layers/BuildingSceneLayer';
import {
  TextSymbol3DLayer,
  LabelSymbol3D,
  PolygonSymbol3D,
  ExtrudeSymbol3DLayer,
  PointSymbol3D,
  IconSymbol3DLayer,
  SimpleMarkerSymbol,
  LineSymbol3D,
  PathSymbol3DLayer,
  WebStyleSymbol,
  MeshSymbol3D,
  FillSymbol3DLayer,
  SimpleLineSymbol,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import CustomContent from '@arcgis/core/popup/content/CustomContent';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import SizeVariable from '@arcgis/core/renderers/visualVariables/SizeVariable';
import RotationVariable from '@arcgis/core/renderers/visualVariables/RotationVariable';
import { labelSymbol3DLine } from './Label';
import ColorVariable from '@arcgis/core/renderers/visualVariables/ColorVariable';
import {
  lotStatusColor,
  lotStatusField,
  lotStatusLabel,
  lotUseArray,
  nloStatusField,
  nloStatusLabel,
  nloStatusSymbolRef,
  structureOccupancyRef,
  structureOccupancyStatusField,
  structureOccupancyStatusLabel,
  structureOwnershipColor,
  structureOwnershipStatusField,
  structureOwnershipStatusLabel,
  structureStatusColorRgb,
  structureStatusField,
  structureStatusLabel,
} from './StatusUniqueValues';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,

  popupEnabled: false,
});

/* Station Box */
let stationBoxRenderer = new UniqueValueRenderer({
  field: 'Layer',
  uniqueValueInfos: [
    {
      value: '00_Platform',
      label: 'Platform',
      symbol: new SimpleFillSymbol({
        color: [160, 160, 160],
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
    {
      value: '00_Platform 10car',
      label: 'Platform 10car',
      symbol: new SimpleFillSymbol({
        color: [104, 104, 104],
        style: 'cross',
        outline: {
          width: 1,
          color: 'black',
          style: 'short-dash',
        },
      }),
    },
    {
      value: '00_Station',
      label: 'Station Box',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: [115, 0, 0],
        },
      }),
    },
  ],
});

export const stationBoxLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 7,
  renderer: stationBoxRenderer,
  minScale: 150000,
  maxScale: 0,
  title: 'Station Box',

  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* ROW Layer */
const prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});

export const prowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/SC_Alignment/FeatureServer/5',
  layerId: 5,
  title: 'PROW',
  popupEnabled: false,
  renderer: prowRenderer,
});
prowLayer.listMode = 'hide';

/*------- NGCP Layers ---------- */
/* NGCP Working Area */
const ngcpPoleWARenderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [197, 0, 255],
    style: 'backward-diagonal',
    outline: {
      color: '#C500FF',
      width: 0.7,
    },
  }),
});

export const ngcp_working_area7 = new FeatureLayer({
  portalItem: {
    id: 'd5b30a79bdae40c492771ec1e46ab0e9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  renderer: ngcpPoleWARenderer,
  elevationInfo: {
    mode: 'on-the-ground',
  },
  definitionExpression: "SiteNo = '7'",
  layerId: 2,
  title: 'Proposed Pole Working Areas',
});

export const ngcp_working_area6 = new FeatureLayer({
  portalItem: {
    id: 'd5b30a79bdae40c492771ec1e46ab0e9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  renderer: ngcpPoleWARenderer,
  elevationInfo: {
    mode: 'on-the-ground',
  },
  definitionExpression: "SiteNo = '6'",
  layerId: 2,
  title: 'Proposed Pole Working Areas',
});

/* NGCP Line  */
const bufferColor = ['#55FF00', '#FFFF00', '#E1E1E1'];
const ngcpLineRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: bufferColor[0],
    width: '3px',
    style: 'dash',
  }),
});

export const ngcp_line7 = new FeatureLayer({
  portalItem: {
    id: 'd5b30a79bdae40c492771ec1e46ab0e9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'on-the-ground',
  },
  renderer: ngcpLineRenderer,
  definitionExpression: "SiteNo = '7'",
  layerId: 1,
  title: 'Proposed/Recorded NGCP Lines',
});

export const ngcp_line6 = new FeatureLayer({
  portalItem: {
    id: 'd5b30a79bdae40c492771ec1e46ab0e9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'on-the-ground',
  },
  renderer: ngcpLineRenderer,
  definitionExpression: "SiteNo = '6'",
  layerId: 1,
  title: 'Proposed/Recorded NGCP Lines',
});

/* NGCP Pole site */
var label_ngcp_pole = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: [255, 255, 0],
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        // font: {
        //   family: 'Ubuntu Mono',
        //   //weight: "bold"
        // },
      }),
    ],
    verticalOffset: {
      screenLength: 30,
      maxWorldLength: 20,
      minWorldLength: 10,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.POLE_ID',
    //value: "{TEXTSTRING}"
  },
});

const ngcpDpwhRoadRenderer = new SimpleRenderer({
  symbol: new SimpleFillSymbol({
    color: [255, 255, 0],
    style: 'backward-diagonal',
    outline: {
      color: '#FFFF00',
      width: 0.7,
    },
  }),
});

export const ngcp_pole7 = new FeatureLayer({
  portalItem: {
    id: 'd5b30a79bdae40c492771ec1e46ab0e9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  definitionExpression: "SiteNo = '7'",
  layerId: 3,
  renderer: ngcpDpwhRoadRenderer,
  labelingInfo: [label_ngcp_pole],
  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupEnabled: true,
  title: 'Proposed Pole Relocation',
});

export const ngcp_pole6 = new FeatureLayer({
  portalItem: {
    id: 'd5b30a79bdae40c492771ec1e46ab0e9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  definitionExpression: "SiteNo = '6'",
  layerId: 3,
  renderer: ngcpDpwhRoadRenderer,
  labelingInfo: [label_ngcp_pole],
  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupEnabled: true,
  title: 'Proposed Pole Relocation',
});

/* PROW for SC Tunnel Alignment */
const prow_tunnel_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '3px',
    style: 'dash',
  }),
});

export const prow_tunnelLayer = new FeatureLayer({
  portalItem: {
    id: '63605177aec648e5b3ad232d2b181874',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'on-the-ground',
  },
  renderer: prow_tunnel_renderer,
  popupEnabled: false,
  title: 'PROW for Tunnel Alignment',
});

/* PNR */
let pnrRenderer = new UniqueValueRenderer({
  field: 'OwnershipType',
  uniqueValueInfos: [
    {
      value: 1, // RP
      symbol: new SimpleFillSymbol({
        color: [137, 205, 102],
        style: 'diagonal-cross',
        outline: {
          width: 0.5,
          color: 'black',
        },
      }),
    },
    {
      value: 2, // PNR
      symbol: new SimpleFillSymbol({
        color: [137, 205, 102],
        style: 'diagonal-cross',
        outline: {
          width: 0.5,
          color: 'black',
        },
      }),
    },
  ],
});

export const pnrLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Land (Excluded for Acquisition)',
  definitionExpression: 'OwnershipType IN (1, 2)',
  elevationInfo: {
    mode: 'on-the-ground',
  },
  labelsVisible: false,
  renderer: pnrRenderer,
  popupTemplate: {
    title: '<p>{LandOwner} ({LotID})</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'OwnershipType',
            label: 'Ownership Type',
          },
          {
            fieldName: 'HandOverDate',
            label: 'Hand-Over Date',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'LandOwner',
            label: 'Land Owner',
          },
        ],
      },
    ],
  },
});

/* Station Layer */
var labelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#d4ff33',
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        // font: {
        //   family: 'Ubuntu Mono',
        //   //weight: "bold"
        // },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 700,
      minWorldLength: 80,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Station',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'SC Stations',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* Land and Structure Layers */
var lotIdLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.LotID' },
  symbol: {
    type: 'text',
    color: 'black',
    haloColor: 'white',
    haloSize: 0.5,
    font: {
      size: 11,
      weight: 'bold',
    },
  },
});

let lotDefaultSymbol = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [110, 110, 110],
    width: 0.7,
  },
});

const uniqueValueInfosLotStatus = lotStatusLabel.map((status: any, index: any) => {
  return Object.assign({
    value: index + 1,
    label: status,
    symbol: new SimpleFillSymbol({
      color: lotStatusColor[index],
    }),
  });
});
let lotLayerRenderer = new UniqueValueRenderer({
  field: lotStatusField,
  defaultSymbol: lotDefaultSymbol, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: uniqueValueInfosLotStatus,
});

// Custom popup for lot layer
const endorsedStatus = ['Not Endorsed', 'Endorsed', 'NA'];

let customContentLot = new CustomContent({
  outFields: ['*'],
  creator: (event: any) => {
    // Extract AsscessDate of clicked pierAccessLayer
    const handedOverDate = event.graphic.attributes.HandedOverDate;
    const handOverArea = event.graphic.attributes.percentHandedOver;
    const statusLot = event.graphic.attributes.StatusLA;
    const landUse = event.graphic.attributes.LandUse;
    const municipal = event.graphic.attributes.Municipality;
    const barangay = event.graphic.attributes.Barangay;
    const landOwner = event.graphic.attributes.LandOwner;
    const cpNo = event.graphic.attributes.CP;
    const endorse = event.graphic.attributes.Endorsed;
    const endorsed = endorsedStatus[endorse];

    let daten: any;
    let date: any;
    if (handedOverDate) {
      daten = new Date(handedOverDate);
      const year = daten.getFullYear();
      const month = daten.getMonth() + 1;
      const day = daten.getDate();
      date = `${year}-${month}-${day}`;
    } else {
      date = 'Undefined';
    }
    // Convert numeric to date format 0
    //var daten = new Date(handedOverDate);
    //var date = dateFormat(daten, 'MM-dd-yyyy');
    //<li>Hand-Over Date: <b>${date}</b></li><br>

    return `<ul><li>Handed-Over Area: <b>${handOverArea} %</b></li><br>
      <li>Handed-Over Date: <b>${date}</b></li><br>
                <li>Status:           <b>${
                  statusLot >= 0 ? lotStatusLabel[statusLot - 1] : ''
                }</b></li><br>
                <li>Land Use:         <b>${landUse >= 1 ? lotUseArray[landUse - 1] : ''}</b></li><br>
                <li>Municipality:     <b>${municipal}</b></li><br>
                <li>Barangay:         <b>${barangay}</b></li><br>
                <li>Land Owner:       <b>${landOwner}</b>
                <li>CP:               <b>${cpNo}</b><br>
                <li>Endorsed:         <b>${endorsed}</b></li></ul>`;
  },
});

const templateLot = new PopupTemplate({
  title: 'Lot No.: <b>{LotID}</b>',
  lastEditInfoEnabled: false,
  content: [customContentLot],
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  labelingInfo: [lotIdLabel],
  renderer: lotLayerRenderer,
  popupTemplate: templateLot,
  title: 'Land Acquisition',
  minScale: 150000,
  maxScale: 0,
  //labelsVisible: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Handed-Over Lot (public + private) */
const handedOverLotRenderer = new UniqueValueRenderer({
  field: 'HandedOver',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Handed-Over',
      symbol: new SimpleFillSymbol({
        color: [255, 0, 0, 0],
        outline: {
          color: '#00c5ff',
          width: 0.3,
        },
      }),
    },
  ],
});

export const handedOverLotLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  definitionExpression: 'HandedOver = 1',
  renderer: handedOverLotRenderer,
  popupEnabled: false,
  labelsVisible: false,
  title: 'Handed-Over (public + private)',
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Structure Layer */
const height = 5;
const edgeSize = 0.3;

const dismantled = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [0, 197, 255, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const paid = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [112, 173, 71, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const payp = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [0, 112, 255, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const legalpass = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 255, 0, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const otc = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 170, 0, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const lbp = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 0, 0, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const defaultStructureRenderer = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: 5,
      material: {
        color: [0, 0, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const uniqueValueInfosStrucStatus = structureStatusLabel.map((status: any, index: any) => {
  return Object.assign({
    value: index + 1,
    symbol: new PolygonSymbol3D({
      symbolLayers: [
        new ExtrudeSymbol3DLayer({
          size: height,
          material: {
            color: structureStatusColorRgb[index],
          },
          edges: new SolidEdges3D({
            color: '#4E4E4E',
            size: edgeSize,
          }),
        }),
      ],
    }),
    label: status,
  });
});
const structureRenderer = new UniqueValueRenderer({
  defaultSymbol: defaultStructureRenderer,
  defaultLabel: 'Other',
  field: structureStatusField,
  uniqueValueInfos: uniqueValueInfosStrucStatus,
});

export const structureLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Structure',
  renderer: structureRenderer,

  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'StatusStruc',
            label: '<p>Status for Structure</p>',
          },
          {
            fieldName: 'Name',
          },
          {
            fieldName: 'Status',
            label: 'NLO/LO Ownership (structure) ',
          },
        ],
      },
    ],
  },
});

// NLO Layer
const symbolSize = 30;

const uniqueValueInfosNlo = nloStatusLabel.map((status: any, index: any) => {
  return Object.assign({
    value: index + 1,
    symbol: new PointSymbol3D({
      symbolLayers: [
        new IconSymbol3DLayer({
          resource: {
            href: nloStatusSymbolRef[index],
          },
          size: symbolSize,
          outline: {
            color: 'white',
            size: 2,
          },
        }),
      ],
    }),
  });
});
const nloRenderer = new UniqueValueRenderer({
  field: nloStatusField,
  uniqueValueInfos: uniqueValueInfosNlo,
});

export const nloLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 3,
  renderer: nloRenderer,

  title: 'NLO (Non-Land Owner)',
  elevationInfo: {
    mode: 'relative-to-scene',
  },
  minScale: 10000,
  maxScale: 0,
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'StatusRC',
            label: '<p>Status for Relocation</p>',
          },
          {
            fieldName: 'Name',
          },
          {
            fieldName: 'Status',
            label: 'NLO/LO Ownership (structure) ',
          },
        ],
      },
    ],
  },
});

/* Structure Ownership Layer */
const uniqueValueInfosStrucOwnership = structureOwnershipStatusLabel.map(
  (status: any, index: any) => {
    return Object.assign({
      value: index + 1,
      label: status,
      symbol: new SimpleFillSymbol({
        style: 'forward-diagonal',
        color: structureOwnershipColor[index],
        outline: {
          color: '#6E6E6E',
          width: 0.3,
        },
      }),
    });
  },
);
let structureOwnershipRenderer = new UniqueValueRenderer({
  field: structureOwnershipStatusField,
  uniqueValueInfos: uniqueValueInfosStrucOwnership,
});

export const strucOwnershipLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  renderer: structureOwnershipRenderer,
  layerId: 2,
  title: 'NLO/LO Ownership (Structure)',

  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Occupancy (Status of Relocation) */
var verticalOffsetExistingOccupancy = {
  screenLength: 10,
  maxWorldLength: 10,
  minWorldLength: 10,
};
const occupancyPointSize = 20;

const uniqueValueInfosOccupancy = structureOccupancyStatusLabel.map((status: any, index: any) => {
  return Object.assign({
    value: index,
    label: status,
    symbol: new PointSymbol3D({
      symbolLayers: [
        new IconSymbol3DLayer({
          resource: {
            href: structureOccupancyRef[index],
          },
          size: occupancyPointSize,
          outline: {
            color: 'white',
            size: 2,
          },
        }),
      ],
      verticalOffset: verticalOffsetExistingOccupancy,

      callout: {
        type: 'line', // autocasts as new LineCallout3D()
        color: [128, 128, 128, 0.6],
        size: 0.4,
        border: {
          color: 'grey',
        },
      },
    }),
  });
});

let occupancyRenderer = new UniqueValueRenderer({
  field: structureOccupancyStatusField,
  uniqueValueInfos: uniqueValueInfosOccupancy,
});

export const occupancyLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,

  title: 'Occupancy (Structure)',
  renderer: occupancyRenderer,
  elevationInfo: {
    mode: 'relative-to-scene',
  },
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'Occupancy',
            label: '<p>Status for Relocation(structure)</p>',
          },
          {
            fieldName: 'Name',
          },
          {
            fieldName: 'Status',
            label: 'NLO/LO Ownership',
          },
        ],
      },
    ],
  },
});

/* Pier Head and Column */
const pHeight = 0;

const pierColumn = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: pHeight + 10,
      material: {
        color: [78, 78, 78, 0.5],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: 0.3,
      }),
    }),
  ],
});

const pileCap = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: pHeight + 3,
      material: {
        color: [200, 200, 200, 0.7],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: 1.0,
      }),
    }),
  ],
});

const pierHeadRenderer = new UniqueValueRenderer({
  defaultSymbol: new PolygonSymbol3D({
    symbolLayers: [
      {
        type: 'extrude',
        size: 5, // in meters
        material: {
          color: '#E1E1E1',
        },
        edges: new SolidEdges3D({
          color: '#4E4E4E',
          size: 1.0,
        }),
      },
    ],
  }),
  defaultLabel: 'Other',
  field: 'Layer',
  legendOptions: {
    title: 'Pier Head/Pier Column/Pile Cap',
  },
  uniqueValueInfos: [
    {
      value: 'Pier_Column',
      symbol: pierColumn,
      label: 'Column',
    },
    /*
  {
    value: "Pier_Head",
    symbol: pierHead,
    label: "Pier Head"
  },
  */
    {
      value: 'Pile_Cap',
      symbol: pileCap,
      label: 'Pile Cap',
    },
  ],
});

export const pierHeadColumnLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,
  title: 'Pier Head/Column',
  definitionExpression: "Layer <> 'Pier_Head'",

  minScale: 150000,
  maxScale: 0,
  renderer: pierHeadRenderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});
pierHeadColumnLayer.listMode = 'hide';

/* Pier Point Layer with access dates */
const pierAccessDateColor = {
  0: [0, 255, 0, 0.9], // Accessible (green)
  1: [255, 127, 80], // Orange
  2: [255, 255, 0], // Yellow
  3: [0, 112, 255], // Blue
  4: [143, 0, 255], // violet
  5: [255, 255, 255, 0.9],
  6: [255, 0, 0, 0.9], // Dates are missing
};

//const cutOffDateAccess = '01/01/1970';
const today = new Date();
const todayn = today.getTime();
const cutOffDateAccess = todayn;
console.log(todayn);

const pierAccessReadyDateLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: pierAccessDateColor[0],
        },
        size: 15,
        font: {
          family: 'Ubuntu Mono',
          weight: 'bold',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: `var accessdate = $feature.AccessDate;
                  var cutoffDate = 1718062335146;
                  var labelPier = when($feature.AccessDate <= cutoffDate, $feature.PIER, '');
                  return \`\${labelPier}\`
                  `,
  },
  labelPlacement: 'above-center',
});

const pierAccessNotYetLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#cccccc',
        },
        size: 10,
        font: {
          family: 'Ubuntu Mono',
          weight: 'normal',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: `var accessdate = $feature.AccessDate;
                  var cutoffDate = 1718062335146;
                  var labelPier = when($feature.AccessDate > cutoffDate || isEmpty($feature.AccessDate), $feature.PIER, '');
                  return \`\${labelPier}\`
                  `,
  },
  labelPlacement: 'above-center',
});

const pierAccessDateMissingLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#ff0000',
        },
        size: 10,
        font: {
          family: 'Ubuntu Mono',
          weight: 'normal',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: '$feature.PIER',
    //'DefaultValue($feature.GeoTechName, "no data")'
    //"IIF($feature.Score >= 13, '', '')"
    //value: "{Type}"
  },
  labelPlacement: 'above-center',
  where: 'AccessDate IS NULL',
});

// 1. Get unique dates
export const pierAccessLayer = new FeatureLayer(
  {
    portalItem: {
      id: 'e09b9af286204939a32df019403ef438',
      portal: {
        url: 'https://gis.railway-sector.com/portal',
      },
    },
    layerId: 3,
    labelingInfo: [pierAccessReadyDateLabel, pierAccessNotYetLabel, pierAccessDateMissingLabel], //[pierAccessDateMissingLabel, pierAccessReadyDateLabel, pierAccessNotYetLabel],
    title: 'Pier with Access Date',
    minScale: 150000,
    maxScale: 0,

    elevationInfo: {
      mode: 'on-the-ground',
    },
  },
  //{ utcOffset: 300 },
);

const pierAccessRenderer = new UniqueValueRenderer({
  field: 'AccessDate',

  valueExpression:
    "When(IsEmpty($feature.AccessDate), 'empty', $feature.AccessDate <= 1636070400000, 'accessible', $feature.AccessDate > 1636070400000, 'others',$feature.AccessDate)",
  uniqueValueInfos: [
    {
      value: 'empty',
      label: 'Dates are missing',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[6],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
    {
      value: 'accessible',
      label: 'Accessible',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[0],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
    {
      value: 'others',
      label: 'Others',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[5],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
  ],
});
pierAccessLayer.renderer = pierAccessRenderer;

// 3. Popup Template
function dateFormat(inputDate: any, format: any) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace('MM', month.toString().padStart(2, '0'));

  //replace the year
  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString());
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace('dd', day.toString().padStart(2, '0'));

  return format;
}

// Custom Popup Content for pierAccessLayer
let customContent = new CustomContent({
  outFields: ['*'],
  creator: (event: any) => {
    // Extract AsscessDate of clicked pierAccessLayer
    const statsDate = event.graphic.attributes.AccessDate;

    // Convert numeric to date format
    const date = new Date(statsDate);
    let dateValue = dateFormat(date, 'MM-dd-yyyy');

    // If the date is before current date, popupContent should be "AVAILABLE"
    let DATES: any;
    if (dateValue === '01-01-1970') {
      // Empty date is entered as this
      DATES = 'NO DATES AVAILABLE';
    } else if (statsDate <= cutOffDateAccess) {
      DATES = 'ACCESSIBLE';
    } else if (statsDate > cutOffDateAccess) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      DATES = dateValue;
    }

    //return `Access Date: <b>${DATES}</b>`;
    return `Access Date: <b>${dateValue}</b><br>
            Status: <b>${DATES}</b> 
    `;
  },
});

const template = new PopupTemplate({
  title: 'Pier No: <b>{PIER}</b>',
  lastEditInfoEnabled: false,
  content: [customContent],
});
pierAccessLayer.popupTemplate = template;

/* Tree Cutting and Compensation Layers */
/* Tree cutting layer */
export const colorsCutting = ['#71ab48', '#ffff00', '#ffaa00', '#ff0000'];
const treeCutting3DSymbol = (name: any) => {
  return new WebStyleSymbol({
    name: name,
    styleName: 'EsriThematicTreesStyle',
  });
};

const outlineColor = 'gray';

const treeCuttingRenderer = new UniqueValueRenderer({
  field: 'Status',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Cut/Earthballed',
      symbol: treeCutting3DSymbol('Larix'),
    },
    {
      value: 2,
      label: 'Permit Acquired',
      symbol: treeCutting3DSymbol('Larix'),
    },
    {
      value: 3,
      label: 'Submitted to DENR',
      symbol: treeCutting3DSymbol('Larix'),
    },
    {
      value: 4,
      label: 'Ongoing Acquisition of Application Documents',
      symbol: treeCutting3DSymbol('Larix'),
    },
  ],
  visualVariables: [
    new SizeVariable({
      axis: 'height',
      // field: 'SIZE',
      valueExpression: 'When($feature.Status >= 1, 5, 0)',
      valueUnit: 'meters',
    }),
    new ColorVariable({
      valueExpression: '$feature.Status',
      valueExpressionTitle: 'Status Color',
      stops: [
        { value: 1, color: '#71AB48' },
        { value: 2, color: '#FFFF00' },
        { value: 3, color: '#FFAA00' },
        { value: 4, color: '#FF0000' },
      ],
      legendOptions: {
        title: '',
        showLegend: false,
      },
    }),
  ],
});

export const treeCuttingLayer = new FeatureLayer({
  portalItem: {
    id: 'dfd0bca99c754002b55459004b684415',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  elevationInfo: {
    mode: 'on-the-ground',
  },

  title: 'Tree Cutting',
  renderer: treeCuttingRenderer,
  popupTemplate: {
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'ScientificName',
            label: 'Scientific Name',
          },
          {
            fieldName: 'CommonName',
            label: 'Common Name',
          },
          {
            fieldName: 'Province',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'TreeNo',
            label: 'Tree No.',
          },
          {
            fieldName: 'CP',
            label: '<h5>CP</h5>',
          },
          {
            fieldName: 'Compensation',
            label: 'Status of Tree Compensation',
          },
          {
            fieldName: 'Conservation',
            label: 'Conservation Status',
          },
        ],
      },
    ],
  },
});

/* Tree compensation layer */
export const colorsCompen = ['#0070ff', '#ffff00', '#71ab48'];

const treeCompensationRenderer = new UniqueValueRenderer({
  field: 'Compensation',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Non-Compensable',
      symbol: treeCutting3DSymbol('Larix'),
    },
    {
      value: 2,
      label: 'For Processing',
      symbol: treeCutting3DSymbol('Larix'),
    },
    {
      value: 3,
      label: 'Compensated',
      symbol: treeCutting3DSymbol('Larix'),
    },
  ],
  visualVariables: [
    new SizeVariable({
      axis: 'height',
      valueExpression: 'When($feature.Compensation >= 1, 5, 0)',
      valueUnit: 'meters',
    }),
    new ColorVariable({
      valueExpression: '$feature.Compensation',
      valueExpressionTitle: 'Status Color',
      legendOptions: {
        title: '',
        showLegend: false,
      },
      stops: [
        { value: 1, color: '#0070FF' },
        { value: 2, color: '#FFFF00' },
        { value: 3, color: '#71AB48' },
      ],
    }),
  ],
});

export const treeCompensationLayer = new FeatureLayer({
  portalItem: {
    id: 'dfd0bca99c754002b55459004b684415',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,

  title: 'Tree Compensation',
  renderer: treeCompensationRenderer,
  popupTemplate: {
    title: '<h5>{Compensation}</h5>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'ScientificName',
            label: 'Scientific Name',
          },
          {
            fieldName: 'CommonName',
            label: 'Common Name',
          },
          {
            fieldName: 'Province',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'TreeNo',
            label: 'Tree No.',
          },
          {
            fieldName: 'CP',
            label: '<h5>CP</h5>',
          },
          {
            fieldName: 'Status',
            label: 'Status of Tree Cutting',
          },
          {
            fieldName: 'Conservation',
            label: 'Conservation Status',
          },
        ],
      },
    ],
  },
});

/* Utility Layers */
// * Utility Point * //
function customSymbol3D(name: string) {
  return new WebStyleSymbol({
    //portal: 'https://www.maps.arcgis.com',
    // IMPORTANT: Your browser needs to be able to open the following link. It will say insecure so need to go to advanced.
    styleUrl:
      'https://www.maps.arcgis.com/sharing/rest/content/items/c04d4d4145f64f8fa38407dd5331dd1f/data',
    name: name,
  });
}

function utilPtSymbolInfra(name: string) {
  return new WebStyleSymbol({
    name: name,
    styleName: 'EsriInfrastructureStyle',
  });
}

function utilPtSymbolStreet(name: string) {
  return new WebStyleSymbol({
    name: name,
    styleName: 'EsriRealisticStreetSceneStyle',
  });
}

const verticalOffsetRelocation = {
  screenLength: 10,
  maxWorldLength: 30,
  minWorldLength: 35,
};

// Function that automatically creates the symbol for the points of interest
function getUniqueValueSymbol(name: string, color: any, sizeS: number) {
  return new PointSymbol3D({
    symbolLayers: [
      new IconSymbol3DLayer({
        resource: {
          href: name,
        },
        size: sizeS,
        outline: {
          color: color,
          size: 2,
        },
      }),
    ],

    verticalOffset: verticalOffsetRelocation,

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.1],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  });
}

const utilPointSymbolRenderer = new UniqueValueRenderer({
  valueExpression:
    // eslint-disable-next-line no-multi-str
    "When($feature.UtilType2 == 1, 'Telecom Pole (BTS)', \
                          $feature.UtilType2 == 2, 'Telecom Pole (CATV)', \
                          $feature.UtilType2 == 3, 'Water Meter', \
                          $feature.UtilType2 == 4, 'Water Valve', \
                          $feature.UtilType2 == 5, 'Manhole', \
                          $feature.UtilType2 == 6, 'Drain Box', \
                          $feature.UtilType2 == 7, 'Electric Pole', \
                          $feature.UtilType2 == 8, 'Street Light', \
                          $feature.UtilType2 == 9, 'Junction Box', \
                          $feature.UtilType2 == 10, 'Coupling', \
                          $feature.UtilType2 == 11, 'Fitting', \
                          $feature.UtilType2 == 12, 'Transformer', \
                          $feature.UtilType2 == 13, 'Truss Guy', \
                          $feature.UtilType2 == 14, 'Concrete Pedestal', \
                          $feature.UtilType2 == 15, 'Ground', \
                          $feature.UtilType2 == 16, 'Down Guy', \
                          $feature.UtilType2 == 17, 'Entry/Exit Pit', \
                          $feature.UtilType2 == 18, 'Handhole', \
                          $feature.UtilType2 == 19, 'Transmission Tower', \
                          $feature.UtilType)",
  uniqueValueInfos: [
    {
      value: 'Telecom Pole (BTS)',
      symbol: customSymbol3D('3D_Telecom_BTS'),
    },
    {
      value: 'Telecom Pole (CATV)',
      symbol: customSymbol3D('3D_TelecomCATV_Pole'),
    },
    {
      value: 'Manhole',
      symbol: utilPtSymbolStreet('Storm_Drain'),
    },
    {
      value: 'Electric Pole',
      //symbol: utilPtSymbolInfra("Powerline_Pole")
      symbol: customSymbol3D('3D_Electric_Pole'),
    },
    {
      value: 'Street Light',
      symbol: utilPtSymbolStreet('Overhanging_Street_and_Sidewalk_-_Light_on'),
    },
    {
      value: 'Junction Box',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Coupling',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Fitting',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Transformer',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Truss Guy',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Concrete Pedestal',
      symbol: customSymbol3D('Concrete Pedestal'),
    },
    {
      value: 'Ground',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Down Guy',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Entry/Exit Pit',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Handhole',
      symbol: customSymbol3D('3D_Drain_Box'),
    },
    {
      value: 'Transmission Tower',
      symbol: utilPtSymbolInfra('Powerline_Pole'),
    },
  ],
  visualVariables: [
    new SizeVariable({
      axis: 'height',
      field: 'SIZE',
      valueUnit: 'meters',
    }),
    new RotationVariable({
      field: 'ROTATION',
    }),
  ],
});

export const utilityPointLayer = new FeatureLayer({
  portalItem: {
    id: 'b7d01020d54c4015ba0ba9454475d1dc',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Point Symbol',
  // outFields: ['*'],
  renderer: utilPointSymbolRenderer,
  elevationInfo: {
    mode: 'relative-to-ground', // original was "relative-to-scene"
    featureExpressionInfo: {
      expression: '$feature.Height',
    },
    unit: 'meters',
    //offset: 0
  },
  popupTemplate: {
    title: '<h5>{comp_agency}</h5>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Id',
          },
          {
            fieldName: 'UtilType',
            label: 'Utility Type',
          },
          {
            fieldName: 'UtilType2',
            label: 'Utility Name',
          },
          {
            fieldName: 'LAYER',
            label: '<h5>Action</h5>',
          },
          {
            fieldName: 'Status',
            label: '<h5>Status</h5>',
          },
          {
            fieldName: 'CP',
          },
          {
            fieldName: 'Remarks',
          },
        ],
      },
    ],
  },
});

const utilityStatusRenderer = new UniqueValueRenderer({
  valueExpression:
    // eslint-disable-next-line no-multi-str
    "When($feature.Remarks == 'pending', 'NoAction', \
                          $feature.Status == 1 && $feature.LAYER == 1, 'DemolishComplete',\
                          $feature.Status == 0 && $feature.LAYER == 1, 'DemolishIncomplete',\
                          $feature.Status == 0 && $feature.LAYER == 2, 'RelocIncomplete', \
                          $feature.Status == 1 && $feature.LAYER == 2, 'RelocComplete', \
                          $feature.Status == 0 && $feature.LAYER == 3, 'NewlyAdded', \
                          $feature.Status == 1 && $feature.LAYER == 3, 'NewlyAddedComplete',$feature.Comp_Agency)",
  uniqueValueInfos: [
    {
      value: 'DemolishIncomplete',
      label: 'To be Demolished',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Demolished.png',
        '#D13470',
        20,
      ),
    },
    {
      value: 'DemolishComplete',
      label: 'Demolision Completed',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/DemolishComplete_v2.png',
        '#D13470',
        25,
      ),
    },
    {
      value: 'RelocIncomplete',
      label: 'Proposed Relocation',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Relocatd.png',
        '#D13470',
        30,
      ),
    },
    {
      value: 'RelocComplete',
      label: 'Relocation Completed',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Utility_Relocated_Completed_Symbol.png',
        '#D13470',
        30,
      ),
    },
    {
      value: 'NewlyAdded',
      label: 'Add New Utility',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/NewlyAdded.png',
        '#D13470',
        35,
      ),
    },
    {
      value: 'NewlyAddedComplete',
      label: 'Newly Utility Added',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/NewlyAdded_Completed.png',
        '#D13470',
        35,
      ),
    },
    {
      value: 'NoAction',
      label: 'Require Data Checking',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Unknown_v2.png',
        '#D13470',
        35,
      ),
    },
  ],
});

const utilPointStatusTextSymbol = labelSymbol3DLine({
  materialColor: 'white',
  fontSize: 10,
  haloColor: [0, 0, 0, 0.7],
  haloSize: 0.4,
});

const utilPointStatusLabel = new LabelClass({
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    //value: "{Company}",
    expression: "When($feature.Status >= 0, DomainName($feature, 'Comp_Agency'), '')", //$feature.Comp_Agency
  },
  symbol: utilPointStatusTextSymbol,
});

export const utilityPointLayer1 = new FeatureLayer({
  portalItem: {
    id: 'b7d01020d54c4015ba0ba9454475d1dc',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Point Status',
  // outFields: ['*'],
  renderer: utilityStatusRenderer,
  elevationInfo: {
    mode: 'relative-to-ground', // original was "relative-to-scene"
    featureExpressionInfo: {
      expression: '$feature.Height',
    },
    unit: 'meters',
    //offset: 0
  },
  labelingInfo: [utilPointStatusLabel],
  popupTemplate: {
    title: '<h5>{comp_agency}</h5>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Id',
          },
          {
            fieldName: 'UtilType',
            label: 'Utility Type',
          },
          {
            fieldName: 'UtilType2',
            label: 'Utility Name',
          },
          {
            fieldName: 'LAYER',
            label: '<h5>Action</h5>',
          },
          {
            fieldName: 'Status',
            label: '<h5>Status</h5>',
          },
          {
            fieldName: 'CP',
          },
          {
            fieldName: 'Remarks',
          },
        ],
      },
    ],
  },
});

// * Utility Line * //
const utilLineStatusRenderer = new UniqueValueRenderer({
  valueExpression:
    // eslint-disable-next-line no-multi-str
    "When($feature.Remarks == 'pending', 'NoAction', \
                          $feature.Status == 1 && $feature.LAYER == 1, 'DemolishComplete',\
                          $feature.Status == 0 && $feature.LAYER == 1, 'DemolishIncomplete',\
                          $feature.Status == 0 && $feature.LAYER == 2, 'RelocIncomplete', \
                          $feature.Status == 1 && $feature.LAYER == 2, 'RelocComplete', \
                          $feature.Status == 0 && $feature.LAYER == 3, 'NewlyAdded', \
                          $feature.Status == 1 && $feature.LAYER == 3, 'NewlyAddedComplete',$feature.Comp_Agency)",
  //field: "Company",
  uniqueValueInfos: [
    {
      value: 'DemolishIncomplete',
      label: 'To be Demolished',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Demolished.png',
        '#D13470',
        20,
      ),
    },
    {
      value: 'DemolishComplete',
      label: 'Demolision Completed',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/DemolishComplete_v2.png',
        '#D13470',
        25,
      ),
    },
    {
      value: 'RelocIncomplete',
      label: 'Proposed Relocation',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Relocatd.png',
        '#D13470',
        30,
      ),
    },
    {
      value: 'RelocComplete',
      label: 'Relocation Completed',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Utility_Relocated_Completed_Symbol.png',
        '#D13470',
        30,
      ),
    },
    {
      value: 'NewlyAdded',
      label: 'Add New Utility',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/NewlyAdded.png',
        '#D13470',
        35,
      ),
    },
    {
      value: 'NewlyAddedComplete',
      label: 'Newly Utility Added',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/NewlyAdded_Completed.png',
        '#D13470',
        35,
      ),
    },
    {
      value: 'NoAction',
      label: 'Require Data Checking',
      symbol: getUniqueValueSymbol(
        'https://EijiGorilla.github.io/Symbols/Unknown_v2.png',
        '#D13470',
        35,
      ),
    },
  ],
});

export const utilityLineLayer = new FeatureLayer({
  portalItem: {
    id: 'b7d01020d54c4015ba0ba9454475d1dc',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Line Symbol', // Relocation PLan?
  elevationInfo: {
    mode: 'relative-to-ground', // original was "relative-to-scene"
    featureExpressionInfo: {
      expression: '$feature.height',
    },
    unit: 'meters',
    //offset: 0
  },
  // outFields: ['*'],
  popupTemplate: {
    title: '<h5>{comp_agency}</h5>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Id',
          },
          {
            fieldName: 'UtilType',
            label: 'Utility Type',
          },
          {
            fieldName: 'UtilType2',
            label: 'Utility Name',
          },
          {
            fieldName: 'LAYER',
            label: '<h5>Action</h5>',
          },
          {
            fieldName: 'Status',
            label: '<h5>Status</h5>',
          },
          {
            fieldName: 'CP',
          },
          {
            fieldName: 'Remarks',
          },
        ],
      },
    ],
  },
});

const utilLineColor = [
  [32, 178, 170, 0.5], //Telecom Line
  [112, 128, 144, 0.5], // Internet Cable Line
  [0, 128, 255, 0.5], // Water Distribution Pipe
  [224, 224, 224, 0.5], // Sewage
  [105, 105, 105, 0.5], // Drainage
  [205, 133, 63, 0.5], // Canal
  [139, 69, 19, 0.5], // Creek
  [211, 211, 211, 0.5], // Electric Line
  [0, 128, 255, 0.5], // Duct Bank
  [0, 128, 255, 0.5], // Water line
  [0, 128, 255, 0.5], // Gas Line
];

function lineSizeShapeSymbolLayers(
  profile: 'circle' | 'quad' | undefined,
  cap: 'round' | 'none' | 'butt' | 'square' | undefined,
  join: 'round' | 'miter' | 'bevel' | undefined,
  width: number,
  height: number,
  profileRotation: 'heading' | 'all' | undefined,
  property: number,
) {
  return new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: profile,
        material: {
          color: utilLineColor[property],
        },
        width: width,
        height: height,
        join: join,
        cap: cap,
        anchor: 'bottom',
        profileRotation: profileRotation,
      }),
    ],
  });
}

function renderutilityLineLayer() {
  const renderer = new UniqueValueRenderer({
    field: 'utiltype2',
  });

  for (var i = 1; i <= utilLineColor.length; i++) {
    renderer.addUniqueValueInfo({
      value: i,
      symbol: lineSizeShapeSymbolLayers('circle', 'none', 'miter', 0.5, 0.5, 'all', i - 1),
    });
  }
  utilityLineLayer.renderer = renderer;
}

renderutilityLineLayer();

const utilLineStatusTextSymbol = labelSymbol3DLine({
  materialColor: 'black',
  fontSize: 10,
  haloColor: [255, 255, 255, 0.7],
  haloSize: 0.7,
});

const utilityLineLabelClass = new LabelClass({
  //labelPlacement: 'above-center', // Polyline has not choice
  labelExpressionInfo: {
    expression: "When($feature.Status >= 0, DomainName($feature, 'Comp_Agency'), '')",
  },
  symbol: utilLineStatusTextSymbol,
});

export const utilityLineLayer1 = new FeatureLayer({
  portalItem: {
    id: 'b7d01020d54c4015ba0ba9454475d1dc',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Line Status',
  elevationInfo: {
    mode: 'relative-to-ground', // original was "relative-to-scene"
    featureExpressionInfo: {
      expression: '$feature.height',
    },
    unit: 'meters',
    //offset: 0
  },
  // outFields: ['*'],
  renderer: utilLineStatusRenderer,
  labelingInfo: [utilityLineLabelClass],
  popupTemplate: {
    title: '<h5>{comp_agency}</h5>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Id',
          },
          {
            fieldName: 'UtilType',
            label: 'Utility Type',
          },
          {
            fieldName: 'UtilType2',
            label: 'Utility Name',
          },
          {
            fieldName: 'LAYER',
            label: '<h5>Action</h5>',
          },
          {
            fieldName: 'Status',
            label: '<h5>Status</h5>',
          },
          {
            fieldName: 'CP',
          },
          {
            fieldName: 'Remarks',
          },
        ],
      },
    ],
  },
});

/* Viaduct */
const colorViaduct = [
  [225, 225, 225, 0.1], // To be Constructed (white)
  [130, 130, 130, 0.5], // Under Construction
  [255, 0, 0, 0.8], // Delayed
  [0, 112, 255, 0.8], // Completed
];

function renderViaductLayer() {
  const renderer = new UniqueValueRenderer({
    field: 'Status',
  });

  for (var i = 0; i < colorViaduct.length; i++) {
    renderer.addUniqueValueInfo({
      value: i + 1,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: colorViaduct[i],
              colorMixMode: 'replace',
            },
            edges: new SolidEdges3D({
              color: [225, 225, 225, 0.3],
            }),
          }),
        ],
      }),
    });
  }
  viaductLayer.renderer = renderer;
}

export const viaductLayer = new SceneLayer({
  portalItem: {
    id: '1f89733a04b443e2a1e0e5e6dfd493e3',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'absolute-height', //absolute-height, relative-to-ground
  },
  title: 'Viaduct',
  labelsVisible: false,
  popupTemplate: {
    title: '<p>{PierNumber}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Type',
            label: 'Type',
          },
          {
            fieldName: 'CP',
          },
          {
            // this gives error.. WHY?
            fieldName: 'start_actual',
            label: 'Construction started',
          },
          {
            fieldName: 'uniqueID',
          },
        ],
      },
    ],
  },
});

renderViaductLayer();

export const viaductLayerStatus4 = new SceneLayer({
  portalItem: {
    id: '1f89733a04b443e2a1e0e5e6dfd493e3',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  definitionExpression: 'Status = 4',
});
