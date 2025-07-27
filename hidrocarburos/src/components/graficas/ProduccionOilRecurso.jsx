import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export default function ProduccionOilRecurso() {
  const [prodOilConvMensual, setProdOilConvMensual] = useState([]);
  const [prodOilConvAnual, setProdOilConvAnual] = useState([]);

  const [prodOilShaleMensual, setProdOilShaleMensual] = useState([]);
  const [prodOilShaleAnual, setProdOilShaleAnual] = useState([]);

  const [prodOilTightMensual, setProdOilTightMensual] = useState([]);
  const [prodOilTightAnual, setProdOilTightAnual] = useState([]);

  const option = {
    title: {
      text: "Stacked Area Chart",
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
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
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
        name: "Oil Convencional",
        smooth: true,
        type: "line",

        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,prodOilConvMensual],
      },
      {
        name: "Oil Shale",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,prodOilShaleMensual],
      },
      {
        name: "Oil Tight",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [null, null, null, 150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [null, null, null, 320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Oil Convencional",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: prodOilConvAnual,
      },
      {
        name: "Oil Tight",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: prodOilTightAnual,
      },
      {
        name: "Oil Shale",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: prodOilShaleAnual,
      },
      {
        name: "Oil Convencional",
        type: "line",
        smooth: true,
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,prodOilConvAnual],
      },
    ],
  };

  async function loadProdOilConv() {
    try {
      const response = await fetch(
        "/api/produccion/recurso?fluidoId=1&tipoRecursoId=1"
      );
      const data = await response.json();
      const dataProdOilConvMensual = data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad);
      setProdOilConvMensual(dataProdOilConvMensual);

      const dataProdOilConvAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setProdOilConvAnual(dataProdOilConvAnual);
    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  async function loadProdOilShale() {
    try {
      const response = await fetch(
        "/api/produccion/recurso?fluidoId=1&tipoRecursoId=2"
      );
      const data = await response.json();
      const dataProdOilShaleMensual = data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad);
      setProdOilShaleMensual(dataProdOilShaleMensual);

      const dataProdOilShaleAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setProdOilShaleAnual(dataProdOilShaleAnual);
    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  async function loadProdOilTight() {
    try {
      const response = await fetch(
        "/api/produccion/recurso?fluidoId=1&tipoRecursoId=3"
      );
      const data = await response.json();
      const dataProdOilTightMensual = data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad);
      setProdOilTightMensual(dataProdOilTightMensual);

      const dataProdOilTightAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setProdOilTightAnual(dataProdOilTightAnual);
    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      await loadProdOilConv();
      await loadProdOilShale();
      await loadProdOilTight();
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("produccion Oil Convencional:", prodOilConvMensual,prodOilConvAnual,"Produccion Oil Shale:", prodOilShaleMensual, prodOilShaleAnual,"Produccion Oil Tight:", prodOilTightMensual, prodOilTightAnual);
  }, [prodOilConvMensual, prodOilConvAnual,prodOilShaleMensual, prodOilShaleAnual,prodOilTightMensual, prodOilTightAnual]);
  
  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}
