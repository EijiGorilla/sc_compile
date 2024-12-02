import { useEffect, useRef, useState } from 'react';
import { handedOverLotLayer, lotLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateHandedOver,
  generateLotData,
  generateLotMoaData,
  generateLotNumber,
  statusLotChart,
  statusMoaLotChart,
  thousands_separators,
  zoomToLayer,
} from '../Query';
import '../App.css';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-checkbox';
import { CalciteLabel, CalciteCheckbox } from '@esri/calcite-components-react';
import { cpField, primaryLabelColor, valueLabelColor } from '../StatusUniqueValues';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const LotChart = (props: any) => {
  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [lotData, setLotData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  const chartID = 'pie-two';

  const [lotNumber, setLotNumber] = useState([]);
  const [handedOverNumber, setHandedOverNumber] = useState([]);

  // 2.Mode of Acquisition
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_moa = useRef<unknown | any | undefined>({});
  const [lotMoaData, setLotMoaData] = useState([]);
  const chartID_moa = 'land-moa';

  // Handed Over View checkbox
  const [handedOverCheckBox, setHandedOverCheckBox] = useState<boolean>(false);

  // Query
  const queryDefault = '1=1';
  const queryContractp = `${cpField} = '` + props.contractp + "'";

  if (props.contractp === 'All') {
    lotLayer.definitionExpression = queryDefault;
    handedOverLotLayer.definitionExpression = queryDefault;
  } else {
    lotLayer.definitionExpression = queryContractp;
    handedOverLotLayer.definitionExpression = queryContractp;
  }

  useEffect(() => {
    if (handedOverCheckBox === true) {
      handedOverLotLayer.visible = true;
    } else {
      handedOverLotLayer.visible = false;
    }
  }, [handedOverCheckBox]);

  useEffect(() => {
    generateLotData().then((result: any) => {
      setLotData(result);
    });

    // Lot number
    generateLotNumber().then((response: any) => {
      setLotNumber(response);
    });

    generateHandedOver().then((response: any) => {
      setHandedOverNumber(response);
    });

    // Mode of Acquisition
    generateLotMoaData().then((response: any) => {
      setLotMoaData(response);
    });

    zoomToLayer(lotLayer);
  }, [props.contractp]);

  // 1. Pie Chart for Land Acquisition
  useEffect(() => {
    // Dispose previously created root element
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 2.2,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // values inside a donut
    let inner_label = pieSeries.children.push(
      am5.Label.new(root, {
        text: '[#ffffff]{valueSum}[/]\n[fontSize: 0.4rem; #d3d3d3; verticalAlign: super]PRIVATE LOTS[/]',
        fontSize: '1rem',
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    pieSeries.onPrivate('width', (width: any) => {
      inner_label.set('maxWidth', width * 0.7);
    });

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: 'none',
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = statusLotChart.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = lotLayer.createQuery();

      view.when(function () {
        view.whenLayerView(lotLayer).then((layerView): any => {
          //chartLayerView = layerView;

          lotLayer.queryFeatures(query).then(function (results) {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            lotLayer.queryExtent(queryExt).then(function (result) {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: 'StatusLA = ' + statusSelect,
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(lotData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        scale: 1,
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 220; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 1.1,
      paddingBottom: 2,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, lotData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(lotData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  // Mode of Acquisition
  // useEffect(() => {
  //   // Dispose previously created root element

  //   maybeDisposeRoot(chartID_moa);

  //   var root2 = am5.Root.new(chartID_moa);
  //   root2.container.children.clear();
  //   root2._logo?.dispose();

  //   // Set themesf
  //   // https://www.amcharts.com/docs/v5/concepts/themes/
  //   root2.setThemes([am5themes_Animated.new(root2), am5themes_Responsive.new(root2)]);

  //   // Create chart
  //   // https://www.amcharts.com/docs/v5/charts/xy-chart/
  //   var chart = root2.container.children.push(
  //     am5xy.XYChart.new(root2, {
  //       panX: false,
  //       panY: false,
  //       wheelX: 'none',
  //       wheelY: 'none',
  //       paddingLeft: 0,
  //     }),
  //   );
  //   chartRef_moa.current = chart;

  //   // Create axes
  //   // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  //   var yRenderer = am5xy.AxisRendererY.new(root2, {
  //     minGridDistance: 5,
  //     strokeOpacity: 1,
  //     strokeWidth: 1,
  //     inversed: true,
  //     stroke: am5.color('#ffffff'),
  //   });
  //   yRenderer.grid.template.set('location', 1);

  //   var yAxis = chart.yAxes.push(
  //     am5xy.CategoryAxis.new(root2, {
  //       maxDeviation: 0,
  //       categoryField: 'category',
  //       renderer: yRenderer,
  //     }),
  //   );

  //   // Remove grid lines
  //   yAxis.get('renderer').grid.template.set('forceHidden', true);

  //   var xAxis = chart.xAxes.push(
  //     am5xy.ValueAxis.new(root2, {
  //       maxDeviation: 0,
  //       min: 0,
  //       strictMinMax: true,
  //       calculateTotals: true,
  //       renderer: am5xy.AxisRendererX.new(root2, {
  //         visible: true,
  //         strokeOpacity: 1,
  //         strokeWidth: 1,
  //         stroke: am5.color('#ffffff'),
  //       }),
  //     }),
  //   );
  //   // Remove grid lines
  //   xAxis.get('renderer').grid.template.set('forceHidden', true);

  //   // Label properties for yAxis (category axis)
  //   yAxis.get('renderer').labels.template.setAll({
  //     //oversizedBehavior: "wrap",
  //     textAlign: 'center',
  //     fill: am5.color('#ffffff'),
  //     //maxWidth: 150,
  //     fontSize: 12,
  //   });

  //   xAxis.get('renderer').labels.template.setAll({
  //     fill: am5.color('#ffffff'),
  //     fontSize: 10,
  //   });

  //   // Create series
  //   // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  //   var series = chart.series.push(
  //     am5xy.ColumnSeries.new(root2, {
  //       name: 'Series 1',
  //       xAxis: xAxis,
  //       yAxis: yAxis,
  //       valueXField: 'value',
  //       sequencedInterpolation: true,
  //       categoryYField: 'category',
  //     }),
  //   );
  //   barSeriesRef.current = series;
  //   chart.series.push(series);

  //   var columnTemplate = series.columns.template;

  //   columnTemplate.setAll({
  //     draggable: true,
  //     cursorOverStyle: 'pointer',
  //     tooltipText: '{value}',
  //     cornerRadiusBR: 10,
  //     cornerRadiusTR: 10,
  //     strokeOpacity: 0,
  //   });

  //   // Add Label bullet
  //   series.bullets.push(function () {
  //     return am5.Bullet.new(root2, {
  //       locationY: 1,
  //       sprite: am5.Label.new(root2, {
  //         text: '{value}',
  //         fill: root2.interfaceColors.get('alternativeText'),
  //         centerY: 8,
  //         centerX: am5.p50,
  //         fontSize: 13,
  //         populateText: true,
  //       }),
  //     });
  //   });

  //   // Use different color by column
  //   /*
  //       columnTemplate.adapters.add('fill', (fill, target) => {
  //         return chart.get('colors').getIndex(series.columns.indexOf(target));
  //       });

  //       columnTemplate.adapters.add('stroke', (stroke, target) => {
  //         return chart.get('colors').getIndex(series.columns.indexOf(target));
  //       });
  //       */

  //   series.columns.template.events.on('click', function (ev) {
  //     const selected: any = ev.target.dataItem?.dataContext;
  //     const categorySelect: string = selected.category;
  //     const find = statusMoaLotChart.find((emp: any) => emp.category === categorySelect);
  //     const statusSelect = find?.value;

  //     var highlightSelect: any;

  //     var query = lotLayer.createQuery();
  //     view.whenLayerView(lotLayer).then(function (layerView) {
  //       //CHART_ELEMENT.style.visibility = "visible";

  //       lotLayer.queryFeatures(query).then(function (results) {
  //         const RESULT_LENGTH = results.features;
  //         const ROW_N = RESULT_LENGTH.length;

  //         let objID = [];
  //         for (var i = 0; i < ROW_N; i++) {
  //           var obj = results.features[i].attributes.OBJECTID;
  //           objID.push(obj);
  //         }

  //         var queryExt = new Query({
  //           objectIds: objID,
  //         });

  //         lotLayer.queryExtent(queryExt).then(function (result) {
  //           if (result.extent) {
  //             view.goTo(result.extent);
  //           }
  //         });

  //         if (highlightSelect) {
  //           highlightSelect.remove();
  //         }
  //         highlightSelect = layerView.highlight(objID);

  //         view.on('click', function () {
  //           layerView.filter = new FeatureFilter({
  //             where: undefined,
  //           });
  //           highlightSelect.remove();
  //         });
  //       });
  //       layerView.filter = new FeatureFilter({
  //         where: 'MoA = ' + statusSelect,
  //       });
  //     }); // End of whenLayerView
  //   });

  //   yAxisRef.current = yAxis;
  //   yAxis.data.setAll(lotMoaData);
  //   series.data.setAll(lotMoaData);

  //   // Make stuff animate on load
  //   // https://www.amcharts.com/docs/v5/concepts/animations/
  //   series.appear(1000);
  //   chart.appear(1000, 100);

  //   return () => {
  //     root2.dispose();
  //   };
  // }, [chartID_moa, lotMoaData]);

  // useEffect(() => {
  //   barSeriesRef.current?.data.setAll(lotMoaData);
  //   yAxisRef.current?.data.setAll(lotMoaData);
  // });

  return (
    <>
      <div
        style={{
          color: primaryLabelColor,
          fontSize: '1.2rem',
          marginLeft: '13px',
          marginTop: '10px',
        }}
      >
        TOTAL LOTS
      </div>

      <CalciteLabel layout="inline">
        <b className="totalLotsNumber" style={{ color: valueLabelColor }}>
          <div
            style={{
              color: valueLabelColor,
              fontSize: '2rem',
              fontWeight: 'bold',
              fontFamily: 'calibri',
              lineHeight: '1.2',
              marginLeft: '15px',
            }}
          >
            {thousands_separators(lotNumber[0])}
          </div>
          <img
            src="https://EijiGorilla.github.io/Symbols/Land_logo.png"
            alt="Land Logo"
            height={'50px'}
            width={'50px'}
            style={{ marginLeft: '260px', display: 'flex', marginTop: '-50px' }}
          />
        </b>
      </CalciteLabel>

      <div
        id={chartID}
        style={{
          height: '48vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginTop: '8%',
          marginBottom: '10%',
        }}
      ></div>

      {/* Handed-Over */}
      <div style={{ display: 'flex' }}>
        <div
          style={{
            color: primaryLabelColor,
            fontSize: '1.2rem',
            marginLeft: '13px',
            marginBottom: '13px',
            marginRight: '10px',
          }}
        >
          HANDED-OVER
        </div>
        <CalciteCheckbox
          name="handover-checkbox"
          label="VIEW"
          style={{ width: '20px' }}
          scale="l"
          onCalciteCheckboxChange={(event: any) =>
            setHandedOverCheckBox(handedOverCheckBox === false ? true : false)
          }
        ></CalciteCheckbox>
        <div style={{ color: primaryLabelColor }}>View on the map</div>
      </div>

      <CalciteLabel layout="inline">
        {handedOverNumber[0] === 'Infinity' ? (
          <b className="permitToEnterNumber" style={{ color: valueLabelColor }}>
            N/A
            <img
              src="https://EijiGorilla.github.io/Symbols/Land_Acquisition/Handed_Over.svg"
              alt="Land Logo"
              height={'50px'}
              width={'50px'}
              style={{ marginLeft: '260px', display: 'flex', marginTop: '-60px' }}
            />
          </b>
        ) : (
          <b className="permitToEnterNumber" style={{ color: valueLabelColor }}>
            <div
              style={{
                color: valueLabelColor,
                fontSize: '2rem',
                fontWeight: 'bold',
                fontFamily: 'calibri',
                lineHeight: '1.2',
                marginLeft: '15px',
                marginTop: '-10px',
                marginBottom: '20px',
              }}
            >
              {handedOverNumber[0]}% ({thousands_separators(handedOverNumber[1])})
            </div>
            <img
              src="https://EijiGorilla.github.io/Symbols/Land_Acquisition/Handed_Over.svg"
              alt="Land Logo"
              height={'50px'}
              width={'50px'}
              style={{ marginLeft: '260px', display: 'flex', marginTop: '-60px' }}
            />
          </b>
        )}
      </CalciteLabel>

      {/* Mode of Acquisition */}
      {/* <div style={{ color: primaryLabelColor, fontSize: '1.2rem', marginLeft: '13px' }}>
        MODE OF ACQUISITION
      </div>
      <div
        id={chartID_moa}
        style={{
          height: '21vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
        }}
      ></div> */}
    </>
  );
}; // End of lotChartgs

export default LotChart;
