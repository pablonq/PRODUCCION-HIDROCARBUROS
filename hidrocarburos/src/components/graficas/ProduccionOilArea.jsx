import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export default function ProduccionOilArea() {

  //Un hook para cada área top
  const [areaMensual1, setAreaMensual1] = useState(null);
  const [areaMensual2, setAreaMensual2] = useState(null);
  const [areaMensual3, setAreaMensual3] = useState(null);
  const [areaMensual4, setAreaMensual4] = useState(null);
  const [areaMensual5, setAreaMensual5] = useState(null);
  const [areaAnual1, setAreaAnual1] = useState([]);
  const [areaAnual2, setAreaAnual2] = useState([]);
  const [areaAnual3, setAreaAnual3] = useState([]);
  const [areaAnual4, setAreaAnual4] = useState([]);
  const [areaAnual5, setAreaAnual5] = useState([]);




  const option = {
    title: {
      text: "Produccion Oil Area",
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
      data: [""],
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
        name: areaMensual1?.nombreArea || "Area 1",
        smooth: true,
        type: "line",

        stack: "Total",
        areaStyle: {
          opacity: 0.5,
        },
        emphasis: {
          focus: "series",
        },
        data: areaMensual1,
      },
      {
        name: areaMensual2?.nombreArea || "Area 2",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaMensual2,
      },
      {
        name: areaMensual3?.nombreArea || "Area 3",
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
        data: areaMensual3,
      },
      {
        name: areaMensual4?.nombreArea || "Area 4",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaMensual4,
      },
      {
        name: areaMensual5?.nombreArea || "Area 5",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaMensual5,
      },
      {
        name: "Area1",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaAnual1.map(item => item.cantidad),
      },

      {
        name: "Area 2",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaAnual2.map(item => item.cantidad),
      },

      {
        name: "Area 3",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaAnual3.map(item => item.cantidad),
      },

      {
        name: "Area 4",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaAnual4.map(item => item.cantidad),
      },
      {
        name: "Area 5",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaAnual5.map(item => item.cantidad),
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

  async function loadProdOilMensual() {
    try {
      const response = await fetch("/api/produccion/area?fluidoId=1");
      const data = await response.json();
      const data2025 = data.filter(item => item.anio === 2025);


      //Agrupar por areaId y sumar cantidades
      const agrupado = {};
      data2025.forEach(item => {
        if (!agrupado[item.areaId]) {
          agrupado[item.areaId] = {
            areaId: item.areaId,
            nombreArea: item.area?.nombreArea || "",
            cantidadTotal: 0,
          };
        }
        agrupado[item.areaId].cantidadTotal += item.cantidad ?? 0;
      });

      //Ordenar y tomar las 5 áreas principales
      const resultado = Object.values(agrupado)
        .sort((a, b) => b.cantidadTotal - a.cantidadTotal)
        .slice(0, 5);


      const area1 = resultado[0] ? [...Array(15).fill(null), ...data2025.filter(item => item.areaId === resultado[0].areaId).map(item => item.cantidad)] : [];
      const area2 = resultado[1] ? [...Array(15).fill(null), ...data2025.filter(item => item.areaId === resultado[1].areaId).map(item => item.cantidad)] : [];
      const area3 = resultado[2] ? [...Array(15).fill(null), ...data2025.filter(item => item.areaId === resultado[2].areaId).map(item => item.cantidad)] : [];
      const area4 = resultado[3] ? [...Array(15).fill(null), ...data2025.filter(item => item.areaId === resultado[3].areaId).map(item => item.cantidad)] : [];
      const area5 = resultado[4] ? [...Array(15).fill(null), ...data2025.filter(item => item.areaId === resultado[4].areaId).map(item => item.cantidad)] : [];


      //Guardar cada área en su hook correspondiente
      setAreaMensual1(area1);
      setAreaMensual2(area2);
      setAreaMensual3(area3);
      setAreaMensual4(area4);
      setAreaMensual5(area5);


    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  async function loadProdOilAnual() {
    try {
      const response = await fetch("/api/produccion/area?fluidoId=1");
      const data = await response.json();
      const dataAnual = data.filter(item => item.anio !== 2025);

      const dataAnualArea = dataAnual.map(item => ({
        nombreArea: item.area.nombreArea,
        anio: item.anio,
        cantidad: item.cantidad,
      }));

      const grupos = dividirEnGrupos(dataAnualArea, 15);

      // Acceso a los 5 grupos
      const grupo1 = grupos[0] || [];
      setAreaAnual1(grupo1)
      const grupo2 = grupos[1] || [];
      setAreaAnual2(grupo2)
      const grupo3 = grupos[2] || [];
      setAreaAnual3(grupo3)
      const grupo4 = grupos[3] || [];
      setAreaAnual4(grupo4)
      const grupo5 = grupos[4] || [];
      setAreaAnual5(grupo5)

      // Puedes usarlos como gustes, ejemplo:
      /* console.log("Grupo 1:", grupo1);
      console.log("Grupo 2:", grupo2);
      console.log("Grupo 3:", grupo3);
      console.log("Grupo 4:", grupo4);
      console.log("Grupo 5:", grupo5); */

    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  function dividirEnGrupos(array, tamañoGrupo) {
    const resultado = [];
    for (let i = 0; i < array.length; i += tamañoGrupo) {
      resultado.push(array.slice(i, i + tamañoGrupo));
    }
    return resultado;
  }


  useEffect(() => {
    const fetchData = async () => {
      await loadProdOilMensual();
      await loadProdOilAnual();

    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("produccion Gas ", areaMensual1, areaMensual2, areaMensual3, areaMensual4, areaMensual5);
  // }, [areaMensual1, areaMensual2, areaMensual3, areaMensual4, areaMensual5]);


  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}
