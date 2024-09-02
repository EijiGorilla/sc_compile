import { useEffect, useRef, useState } from 'react';
import { treeCompensationLayer, treeCuttingLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateTreeCuttingData,
  generateTreesNumber,
  statusTreeCuttingChart,
  statusTreeCompensationChart,
  thousands_separators,
  generateTreeCompensationData,
} from '../Query';
import '../App.css';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

const TreeChart = (props: any) => {
  // Tree cutting
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [treeCuttingData, setTreeCuttingData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);
  const chartID_cuting = 'pie-cut';

  // Tree compensation
  const pieSeriesRef_compen = useRef<unknown | any | undefined>({});
  const legendRef_compen = useRef<unknown | any | undefined>({});
  const chartRef_compen = useRef<unknown | any | undefined>({});
  const [treeCompensationData, setTreeCompensationData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);
  const chartID_compen = 'pie-compen';

  const [treesNumber, setTreesNumber] = useState([]);

  const defaultExpression = '1=1';
  const queryExpression = "CP = '" + props.contractp + "'";
  if (props.contractp === 'All') {
    treeCuttingLayer.definitionExpression = defaultExpression;
    treeCompensationLayer.definitionExpression = defaultExpression;
  } else {
    treeCuttingLayer.definitionExpression = queryExpression;
    treeCompensationLayer.definitionExpression = queryExpression;
  }

  // chart and box properties
  const legendBoxWidth = 220;
  const legendY = am5.percent(53);

  useEffect(() => {
    generateTreeCuttingData().then((result: any) => {
      setTreeCuttingData(result);
    });

    generateTreeCompensationData().then((result: any) => {
      setTreeCompensationData(result);
    });

    generateTreesNumber().then((response: any) => {
      setTreesNumber(response);
    });
  }, [props.contractp]);

  useEffect(() => {
    maybeDisposeRoot(chartID_cuting);

    var root = am5.Root.new(chartID_cuting);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        //centerY: am5.percent(-2), //-10
        y: am5.percent(-25), // space between pie chart and total lots
        layout: root.horizontalLayout,
      }),
    );

    // Add image in the middle
    // chart.children.push(
    //   am5.Picture.new(root, {
    //     width: 50,
    //     height: 50,
    //     x: am5.percent(50),
    //     y: am5.percent(50),
    //     centerX: am5.percent(100),
    //     centerY: am5.percent(55),
    //     src: 'https://EijiGorilla.github.io/Symbols/Tree_Cutting_Logo.svg',
    //   }),
    // );

    chartRef.current = chart;

    // Create series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        marginBottom: -10,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 1,
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
      const find = statusTreeCuttingChart.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = treeCuttingLayer.createQuery();

      view.when(function () {
        view.whenLayerView(treeCuttingLayer).then((layerView): any => {
          //chartLayerView = layerView;

          treeCuttingLayer.queryFeatures(query).then((results: any) => {
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

            treeCuttingLayer.queryExtent(queryExt).then((result: any) => {
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
            where: 'Status = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(treeCuttingData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = root.container.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: legendY,
        layout: root.verticalLayout,
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
    chart.onPrivate('width', function (width: any) {
      const boxWidth = legendBoxWidth; //props.style.width;
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
  }, [chartID_cuting, treeCuttingData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(treeCuttingData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  useEffect(() => {
    maybeDisposeRoot(chartID_compen);

    var root = am5.Root.new(chartID_compen);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        //centerY: am5.percent(-2), //-10
        y: am5.percent(-25), // space between pie chart and total lots
        layout: root.horizontalLayout,
      }),
    );
    chartRef_compen.current = chart;

    // Create series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        marginBottom: -10,
      }),
    );
    pieSeriesRef_compen.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 1,
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
      const find = statusTreeCompensationChart.find(
        (emp: any) => emp.category === categorySelected,
      );
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = treeCompensationLayer.createQuery();

      view.when(function () {
        view.whenLayerView(treeCompensationLayer).then((layerView): any => {
          //chartLayerView = layerView;

          treeCompensationLayer.queryFeatures(query).then((results: any) => {
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

            treeCompensationLayer.queryExtent(queryExt).then((result: any) => {
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
            where: 'Compensation = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(treeCompensationData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = root.container.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: legendY,
        layout: root.verticalLayout,
      }),
    );
    legendRef_compen.current = legend;
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
      const boxWidth = legendBoxWidth; //props.style.width;
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
  }, [chartID_compen, treeCompensationData]);

  useEffect(() => {
    pieSeriesRef_compen.current?.data.setAll(treeCompensationData);
    legendRef_compen.current?.data.setAll(pieSeriesRef_compen.current.dataItems);
  });

  return (
    <>
      <div className="treesNumberImage">
        <div>
          <div className="totalTreesLabel">TOTAL TREES</div>
          <br />
          <br />
          <b className="totalTreesNumber">{thousands_separators(treesNumber[0])} </b>
        </div>
        <img
          src="https://EijiGorilla.github.io/Symbols/Tree_Logo.svg"
          alt="Land Logo"
          height={'20%'}
          width={'20%'}
          style={{ padding: '10px', margin: 'auto', marginRight: '40px' }}
        />
      </div>
      <div
        id={chartID_cuting}
        style={{
          height: '45vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '-7vh',
        }}
      ></div>
      <div
        id={chartID_compen}
        style={{
          height: '45vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginBottom: '-1.5vh',
        }}
      ></div>
    </>
  );
}; // End of lotChartgs

export default TreeChart;
