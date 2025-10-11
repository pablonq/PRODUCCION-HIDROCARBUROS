

import { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import React, { useState } from "react";

export default function PozoGasRecurso() {
  const [pozoGasConvMensual, setPozoGasConvMensual] = useState([]);
  const [pozoGasConvAnual, setPozoGasConvAnual] = useState([]);
  const [pozoGasTightMensual, setPozoGasTightMensual] = useState([]);
  const [pozoGasTightAnual, setPozoGasTightAnual] = useState([]);
  const [pozoGasShaleMensual, setPozoGasShaleMensual] = useState([]);
  const [pozoGasShaleAnual, setPozoGasShaleAnual] = useState([]);

      const option = {
    title: {
      text: "Pozos de Gas",
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
      data: ['Pozos Gas Convencional', 'Pozos Gas Shale', 'Pozos Gas Tight'],
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
        name: "Pozos Gas Convencional Mensual",
        smooth: true,
        type: "line",

        stack: "Total",
        areaStyle: {
          opacity: 0.5,
        },
        emphasis: {
          focus: "series",
        },
        data: pozoGasConvMensual,
      },
      {
        name: "Pozos Gas Shale Mensual",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoGasShaleMensual,
      },
      {
        name: "Pozos Gas Tight Mensual",
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
        data: pozoGasTightMensual,
      },
      
      {
        name: "Pozos Gas Convencional Anual",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoGasConvAnual
      },

      {
        name: "Pozos Gas Shale Anual",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoGasShaleAnual
      },

      {
        name: "Pozos Gas Tight Anual",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pozoGasTightAnual
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
  async function loadPozoGasConv(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2&tipoRecursoId=1");
      const data = await response.json();
      const dataPozoGasConv = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setPozoGasConvMensual(dataPozoGasConv);
      console.log(dataPozoGasConv);

      const dataPozoGasConvAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);


      setPozoGasConvAnual(dataPozoGasConvAnual);
      
      
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  async function loadPozoGasShale(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2&tipoRecursoId=2");
      const data = await response.json();
      const dataPozoGasShaleMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setPozoGasShaleMensual(dataPozoGasShaleMensual);

      const dataPozoGasShaleAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setPozoGasShaleAnual(dataPozoGasShaleAnual);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  async function loadPozoGasTight(){
    try{
      const response = await fetch("/api/pozos/recurso?fluidoId=2&tipoRecursoId=3");
      const data = await response.json();
      const dataPozoGasTightMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setPozoGasTightMensual(dataPozoGasTightMensual);

      const dataPozoGasTightAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setPozoGasTightAnual(dataPozoGasTightAnual);
    } catch (error) {
      console.error('Error fetching pozo sistema data:', error);
    }
  }

  useEffect(() => {
      const fetchData = async () => {
        await loadPozoGasConv();
        await loadPozoGasShale();
        await loadPozoGasTight();
      };
  
      fetchData();
    }, []);

  return (
    <>
      <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
    </>
  );
}