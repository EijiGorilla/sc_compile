import { useRef, useState, useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import { dateFormat, generateLotProgress } from '../Query';
import { lotLayer } from '../layers';
import { view } from '../Scene';
import Query from '@arcgis/core/rest/support/Query';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}
const LotProgressChart = (props: any) => {
  const legendRef = useRef<unknown | any | undefined>({});
  const xAxisRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [lotProgressData, setLotProgressData] = useState([]);

  const chartID = 'lot-progress';
  useEffect(() => {
    generateLotProgress(props.contractp).then((result: any) => {
      setLotProgressData(result);
    });
  }, [props.contractp]);

  useEffect(() => {
    maybeDisposeRoot(chartID);
    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        paddingBottom: 35,
      }),
    );
    chartRef.current = chart;

    // Chart title
    chart.children.unshift(
      am5.Label.new(root, {
        text: 'Monthly Progress of Handed-Over Lots',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        fill: am5.color('#ffffff'),
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0,
      }),
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'zoomX',
      }),
    );
    cursor.lineY.set('visible', false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0,
        groupData: true,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        groupIntervals: [{ timeUnit: 'month', count: 1 }],
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 60,
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: am5.color('#ffffff'),
        }),

        //tooltip: am5.Tooltip.new(root, {})
      }),
    );

    let xRenderer = xAxis.get('renderer');
    xRenderer.labels.template.setAll({
      //oversizedBehavior: "wrap",
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        calculateTotals: true,
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 60,
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: am5.color('#ffffff'),
        }),
      }),
    );

    yAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",//
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });
    xAxisRef.current = xAxis;
    yAxisRef.current = yAxis;

    // Add yaxix title
    yAxis.children.unshift(
      am5.Label.new(root, {
        rotation: -90,
        text: 'No. of handed-over lots',
        y: am5.p50,
        centerX: am5.p50,
        fill: am5.color('#ffffff'),
        fontSize: 11,
      }),
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        centerY: am5.percent(50),
        x: am5.p50,
        y: am5.percent(108),
      }),
    );
    legendRef.current = legend;

    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      fontSize: 17,
      scale: 0.8,
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    // Add series
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: 'date',
        valueYGrouped: 'sum',
      }),
    );

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 1,
        locationX: 0.5,
        sprite: am5.Label.new(root, {
          text: '{valueYTotal}',
          fill: root.interfaceColors.get('alternativeText'),
          centerY: 0,
          centerX: am5.p50,
          populateText: true,
          fontSize: 10,
        }),
      });
    });

    var highlightSelect: any;
    series.columns.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const selectedDate = dateFormat(selected.date, 'yyyy-MM-dd');

      // const qExpression =
      const queryDefault = '1=1';
      const queryContractp = "CP = '" + props.contractp + "'";
      const qDate =
        'HandedOverDate IS NOT NULL' + ' AND ' + "HandedOverDate = date'" + selectedDate + "'";

      var query = lotLayer.createQuery();
      if (props.contractp === 'All') {
        query.where = qDate + ' AND ' + queryDefault;
      } else {
        query.where = qDate + ' AND ' + queryContractp;
      }

      view.whenLayerView(lotLayer).then((layerView: any) => {
        lotLayer.queryFeatures(query).then((results: any) => {
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
        });
      }); // End of whenLayerView
    });
    series.columns.template.setAll({
      tooltipText: 'Total: {valueY}',
      tooltipY: am5.percent(10),
      strokeOpacity: 0,
    });
    series.data.setAll(lotProgressData);

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, lotProgressData]);

  return (
    <>
      <div
        id={chartID}
        style={{
          height: '32vh',
          width: '67%',
          backgroundColor: '#2b2b2b',
          color: 'white',
          position: 'absolute',
          zIndex: 99,
          bottom: 10,
          marginLeft: '1vw',
          marginRight: 'auto',
          border: 'solid 0.1px gray',
        }}
      ></div>
    </>
  );
};

export default LotProgressChart;
