
import {useEffect} from "react";
import ReactECharts from "echarts-for-react";
import React, { useState } from "react";


export default function PozoOilRecurso() {
  const [pozoOilConvMensual, setPozoOilConvMensual] = useState([]);
  const [pozoOilConvAnual, setPozoOilConvAnual] = useState([]);
  const [pozoOilTightMensual, setPozoOilTightMensual] = useState([]);
  const [pozoOilTightAnual, setPozoOilTightAnual] = useState([]);
  const [pozoOilShaleMensual, setPozoOilShaleMensual] = useState([]);
  const [pozoOilShaleAnual, setPozoOilShaleAnual] = useState([]);

    const option = {
    title: {
      text: "Pozos de Oil",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#102e4d",
        },
      },
    },
    legend: {
      data: ['Pozos Oil Convencional', 'Pozos Oil Shale', 'Pozos Oil Tight'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      top: "15%",
      left: "3%",
      right: "4%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",

          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Pozos Oil Convencional Mensual",
        smooth: true,
        type: "line",

        stack: "Total",
        areaStyle: {
          opacity: 0.5,
        },
        emphasis: {
          focus: "series",
        },
        data: pozoOilConvMensual,
      },
      {
        name: "Pozos Oil Shale Mensual",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoOilShaleMensual,
      },
      {
        name: "Pozos Oil Tight Mensual",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoOilTightMensual,
      },
      
      {
        name: "Pozos Oil Convencional Anual",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoOilConvAnual
      },

      {
        name: "Pozos Oil Shale Anual",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoOilShaleAnual
      },

      {
        name: "Pozos Oil Tight Anual",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoOilTightAnual
      },

      /*
      {
        name: 'Gas Shale',
        type: 'bar',
        smooth: true,
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 820, 932, 901, 934, 1290, 1330, 1320]
      } */
    ],
  };

/**
 * Cargar pozos de oil convencional
 */
  async function loadPozoOilConv(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=1");
      const data = await response.json();
      const dataPozoOilConv = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setPozoOilConvMensual(dataPozoOilConv);
      console.log(dataPozoOilConv);

      const dataPozoOilConvAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      
      
      setPozoOilConvAnual(dataPozoOilConvAnual);

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
      const dataPozoOilShaleMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setPozoOilShaleMensual(dataPozoOilShaleMensual);

      const dataPozoOilShaleAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setPozoOilShaleAnual(dataPozoOilShaleAnual);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }

  }

  /**
   * Fetches pozo oil tight resource data from the API, processes it into monthly and annual datasets,
   * and updates the corresponding state variables.
   *
   * - For monthly data (`setPozoOilTightMensual`): Prepends 15 `null` values, then appends the `cantidad`
   *   values from items where `anio` is 2025.
   * - For annual data (`setPozoOilTightAnual`): Uses the `cantidad` values from items where `anio` is not 2025.
   *
   * Handles and logs any errors that occur during the fetch or data processing.
   *
   * @async
   * @function loadPozoOilTight
   * @returns {Promise<void>} Resolves when data is fetched and state is updated.
   */
  async function loadPozoOilTight(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=1&tipoRecursoId=3");
      const data = await response.json();
      const dataPozoOilTightMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setPozoOilTightMensual(dataPozoOilTightMensual);

      const dataPozoOilTightAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setPozoOilTightAnual(dataPozoOilTightAnual);
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
      <ReactECharts option={option} />     
    </>
  );
}