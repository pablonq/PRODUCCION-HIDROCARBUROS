
import {useEffect} from "react";
import ReactECharts from "echarts-for-react";


export default function PozoOilRecurso() {

  //   const option = {
  //   title: {
  //     text: "Produccion Gas Area",
  //   },
  //   tooltip: {
  //     trigger: "axis",
  //     axisPointer: {
  //       type: "cross",
  //       label: {
  //         backgroundColor: "#102e4d",
  //       },
  //     },
  //   },
  //   legend: {
  //     data: [""],
  //   },
  //   toolbox: {
  //     feature: {
  //       saveAsImage: {},
  //     },
  //   },
  //   grid: {
  //     top: "15%",
  //     left: "3%",
  //     right: "4%",
  //     bottom: "0%",
  //     containLabel: true,
  //   },
  //   xAxis: [
  //     {
  //       type: "category",
  //       boundaryGap: true,
  //       data: [
  //         "2010",
  //         "2011",
  //         "2012",
  //         "2013",
  //         "2014",
  //         "2015",
  //         "2016",
  //         "2017",
  //         "2018",
  //         "2019",
  //         "2020",
  //         "2021",
  //         "2022",
  //         "2023",
  //         "2024",

  //         "Ene",
  //         "Feb",
  //         "Mar",
  //         "Abr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //       ],
  //     },
  //   ],
  //   yAxis: [
  //     {
  //       type: "value",
  //     },
  //   ],
  //   series: [
  //     {
  //       name: areaMensual1?.nombreArea || "Area 1",
  //       smooth: true,
  //       type: "line",

  //       stack: "Total",
  //       areaStyle: {
  //         opacity: 0.5,
  //       },
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaMensual1,
  //     },
  //     {
  //       name: areaMensual2?.nombreArea || "Area 2",
  //       type: "line",
  //       stack: "Total",
  //       smooth: true,
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaMensual2,
  //     },
  //     {
  //       name: areaMensual3?.nombreArea || "Area 3",
  //       type: "line",
  //       stack: "Total",
  //       label: {
  //         show: true,
  //         position: "top",
  //       },
  //       smooth: true,
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaMensual3,
  //     },
  //     {
  //       name: areaMensual4?.nombreArea || "Area 4",
  //       type: "line",
  //       stack: "Total",
  //       smooth: true,
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaMensual4,
  //     },
  //     {
  //       name: areaMensual5?.nombreArea || "Area 5",
  //       type: "line",
  //       stack: "Total",
  //       smooth: true,
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaMensual5,
  //     },
  //     {
  //       name: "Area1",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaAnual1.map(item => item.cantidad),
  //     },

  //     {
  //       name: "Area 2",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaAnual2.map(item => item.cantidad),
  //     },

  //     {
  //       name: "Area 3",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaAnual3.map(item => item.cantidad),
  //     },

  //     {
  //       name: "Area 4",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaAnual4.map(item => item.cantidad),
  //     },
  //     {
  //       name: "Area 5",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: areaAnual5.map(item => item.cantidad),
  //     },
  //     /*
  //     {
  //       name: 'Gas Shale',
  //       type: 'bar',
  //       smooth: true,
  //       stack: 'Total',
  //       label: {
  //         show: true,
  //         position: 'top'
  //       },
  //       areaStyle: {},
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 820, 932, 901, 934, 1290, 1330, 1320]
  //     } */
  //   ],
  // };

/**
 * Cargar pozos de oil convencional
 */
  async function loadPozoOilConv(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=1");
      const data = await response.json();
      const data2025 = data.filter(item => item.anio === 2025);
      console.log(data2025);

    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }
/**
 * Cargar pozos de oil shale
 */
  async function loadPozoOilShale(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=2");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }

  }
/**
 * Cargar pozos de oil tight
 */
  /**
   * This function asynchronously loads data related to oil tight wells from a specific API endpoint.
   */
  async function loadPozoOilTight(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=3");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

/* The `useEffect` hook in React is used to perform side effects in function components. In this case,
the `useEffect` hook is being used to fetch data asynchronously when the component mounts. */
  useEffect(() => {
      const fetchData = async () => {
        await loadPozoOilConv();
        await loadPozoOilShale();
        await loadPozoOilTight();
      };
  
      fetchData();
    }, []);
  return (
    <>
      {/* <ReactECharts option={option} />       */}
    </>
  );
}