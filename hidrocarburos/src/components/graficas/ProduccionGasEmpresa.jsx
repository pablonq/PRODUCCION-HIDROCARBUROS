import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export default function ProduccionGasEmpresa() {

  //Un hook para cada área top
  const [empresaMensual1, setAreaMensual1] = useState(null);
  const [empresaMensual2, setAreaMensual2] = useState(null);
  const [empresaMensual3, setAreaMensual3] = useState(null);
  const [empresaMensual4, setAreaMensual4] = useState(null);
  const [empresaMensual5, setAreaMensual5] = useState(null);
  const [empresaAnual1, setAreaAnual1] = useState([]);
  const [empresaAnual2, setAreaAnual2] = useState([]);
  const [empresaAnual3, setAreaAnual3] = useState([]);
  const [empresaAnual4, setAreaAnual4] = useState([]);
  const [empresaAnual5, setAreaAnual5] = useState([]);




  const option = {
    title: {
      text: "Produccion Gas Empresa",
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
        name: empresaMensual1?.nombreEmpresa || "Empresa 1",
        smooth: true,
        type: "line",

        stack: "Total",
        areaStyle: {
          opacity: 0.5,
        },
        emphasis: {
          focus: "series",
        },
        data: empresaMensual1,
      },
      {
        name: empresaMensual2?.nombreEmpresa || "Empresa 2",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaMensual2,
      },
      {
        name: empresaMensual3?.nombreEmpresa || "Empresa 3",
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
        data: empresaMensual3,
      },
      {
        name: empresaMensual4?.nombreEmpresa || "Empresa 4",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaMensual4,
      },
      {
        name: empresaMensual5?.nombreEmpresa || "Empresa 5",
        type: "line",
        stack: "Total",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaMensual5,
      },
      {
        name: "Empresa 1",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaAnual1.map(item => item.cantidad),
      },

      {
        name: "Empresa 2",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaAnual2.map(item => item.cantidad),
      },

      {
        name: "Empresa 3",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaAnual3.map(item => item.cantidad),
      },

      {
        name: "Empresa 4",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaAnual4.map(item => item.cantidad),
      },
      {
        name: "Empresa 5",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: empresaAnual5.map(item => item.cantidad),
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

  async function loadProdGasMensual() {
    try {
      const response = await fetch("/api/produccion/empresa?fluidoId=2");
      const data = await response.json();
      const data2025 = data.filter(item => item.anio === 2025);


      //Agrupar por empresaId y sumar cantidades
      const agrupado = {};
      data2025.forEach(item => {
        if (!agrupado[item.empresaId]) {
          agrupado[item.empresaId] = {
            empresaId: item.empresaId,
            nombreEmpresa: item.empresa?.nombreEmpresa || "",
            cantidadTotal: 0,
          };
        }
        agrupado[item.empresaId].cantidadTotal += item.cantidad ?? 0;
      });

      //Ordenar y tomar las 5 áreas principales
      const resultado = Object.values(agrupado)
        .sort((a, b) => b.cantidadTotal - a.cantidadTotal)
        .slice(0, 5);


      const empresa1 = resultado[0] ? [...Array(15).fill(null), ...data2025.filter(item => item.empresaId === resultado[0].empresaId).map(item => item.cantidad)] : [];
      const empresa2 = resultado[1] ? [...Array(15).fill(null), ...data2025.filter(item => item.empresaId === resultado[1].empresaId).map(item => item.cantidad)] : [];
      const empresa3 = resultado[2] ? [...Array(15).fill(null), ...data2025.filter(item => item.empresaId === resultado[2].empresaId).map(item => item.cantidad)] : [];
      const empresa4 = resultado[3] ? [...Array(15).fill(null), ...data2025.filter(item => item.empresaId === resultado[3].empresaId).map(item => item.cantidad)] : [];
      const empresa5 = resultado[4] ? [...Array(15).fill(null), ...data2025.filter(item => item.empresaId === resultado[4].empresaId).map(item => item.cantidad)] : [];


      //Guardar cada área en su hook correspondiente
      setAreaMensual1(empresa1);
      setAreaMensual2(empresa2);
      setAreaMensual3(empresa3);
      setAreaMensual4(empresa4);
      setAreaMensual5(empresa5);


    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  async function loadProdGasAnual() {
    try {
      const response = await fetch("/api/produccion/empresa?fluidoId=2");
      const data = await response.json();
      const dataAnual = data.filter(item => item.anio !== 2025);

      const dataAnualArea = dataAnual.map(item => ({
        nombreArea: item.empresa.nombreEmpresa,
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
      await loadProdGasMensual();
      await loadProdGasAnual();

    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("produccion Gas ", empresaMensual1, empresaMensual2, empresaMensual3, empresaMensual4, empresaMensual5);
  // }, [empresaMensual1, empresaMensual2, empresaMensual3, empresaMensual4, empresaMensual5]);


  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}
