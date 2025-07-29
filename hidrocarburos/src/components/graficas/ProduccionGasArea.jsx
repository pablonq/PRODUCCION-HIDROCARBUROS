import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export default function ProduccionGasArea() {
  // const [prodGasMensual, setProdGasMensual] = useState([]);
  // const [prodGasAnual, setProdGasAnual] = useState([]);

  // const option = {
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
  //     data: ["Gas Convencional", "Gas Shale", "Tight Gas"],
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
  //       name: "Gas Convencional",
  //       smooth: true,
  //       type: "line",

  //       stack: "Total",
  //       areaStyle: {
  //         opacity: 0.5,
  //       },
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: prodGasConvMensual,
  //     },
  //     {
  //       name: "Gas Shale",
  //       type: "line",
  //       stack: "Total",
  //       smooth: true,
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: prodGasShaleMensual,
  //     },
  //     {
  //       name: "Tight Gas",
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
  //       data: prodGasTightMensual,
  //     },

  //     {
  //       name: "Gas Convencional",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: prodGasConvAnual,
  //     },

  //     {
  //       name: "Gas Shale",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: prodGasShaleAnual,
  //     },
  //     {
  //       name: "Tight Gas",
  //       type: "bar",
  //       stack: "Total",
  //       areaStyle: {},
  //       emphasis: {
  //         focus: "series",
  //       },
  //       data: prodGasTightAnual,
  //     },
  //     // {
  //     //   name: 'Gas Shale',
  //     //   type: 'bar',
  //     //   smooth: true,
  //     //   stack: 'Total',
  //     //   label: {
  //     //     show: true,
  //     //     position: 'top'
  //     //   },
  //     //   areaStyle: {},
  //     //   emphasis: {
  //     //     focus: 'series'
  //     //   },
  //     //   data: [null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, 820, 932, 901, 934, 1290, 1330, 1320]
  //     // }
  //   ],
  // };

  async function loadProdGas() {
    try {
      const response = await fetch("/api/produccion/area?fluidoId=2");
      const data = await response.json();
      

    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      
    };

    fetchData();
  }, []);

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}
