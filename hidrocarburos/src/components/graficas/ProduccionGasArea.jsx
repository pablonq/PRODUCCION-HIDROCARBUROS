import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export default function ProduccionGasArea() {

  //Un hook para cada área top
  const [areaMensual1, setAreaMensual1] = useState(null);
  const [areaMensual2, setAreaMensual2] = useState(null);
  const [areaMensual3, setAreaMensual3] = useState(null);
  const [areaMensual4, setAreaMensual4] = useState(null);
  const [areaMensual5, setAreaMensual5] = useState(null);
  const [areaAnual, setAreaAnual] = useState([]);
  const [areaAnual2024, setAreaAnual2024] = useState([]);
  const [areaAnual2023, setAreaAnual2023] = useState([]);
  const [areaAnual2022, setAreaAnual2022] = useState([]);
  const [areaAnual2021, setAreaAnual2021] = useState([]);
  const [areaAnual2020, setAreaAnual2020] = useState([]);
  const [areaAnual2019, setAreaAnual2019] = useState([]);
  const [areaAnual2018, setAreaAnual2018] = useState([]);
  const [areaAnual2017, setAreaAnual2017] = useState([]);
  const [areaAnual2016, setAreaAnual2016] = useState([]);
  const [areaAnual2015, setAreaAnual2015] = useState([]);
  const [areaAnual2014, setAreaAnual2014] = useState([]);
  const [areaAnual2013, setAreaAnual2013] = useState([]);
  const [areaAnual2012, setAreaAnual2012] = useState([]);
  const [areaAnual2011, setAreaAnual2011] = useState([]);
  const [areaAnual2010, setAreaAnual2010] = useState([]);



  const option = {
    title: {
      text: "Produccion Gas Area",
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
        name: "Area",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: areaAnual,
      },

      /* {
        name: "Gas Shale",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: prodGasShaleAnual,
      },
      {
        name: "Tight Gas",
        type: "bar",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: prodGasTightAnual,
      },
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
      const response = await fetch("/api/produccion/area?fluidoId=2");
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


      const area1 = resultado[0] ? [...Array(15).fill(null),...data2025.filter(item => item.areaId === resultado[0].areaId).map(item => item.cantidad)] : [];
      const area2 = resultado[1] ? [...Array(15).fill(null),...data2025.filter(item => item.areaId === resultado[1].areaId).map(item => item.cantidad)] : [];
      const area3 = resultado[2] ? [...Array(15).fill(null),...data2025.filter(item => item.areaId === resultado[2].areaId).map(item => item.cantidad)] : [];
      const area4 = resultado[3] ? [...Array(15).fill(null),...data2025.filter(item => item.areaId === resultado[3].areaId).map(item => item.cantidad)] : [];
      const area5 = resultado[4] ? [...Array(15).fill(null),...data2025.filter(item => item.areaId === resultado[4].areaId).map(item => item.cantidad)] : [];
      

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

  async function loadProdGasAnual() {
    try {
      const response = await fetch("/api/produccion/area?fluidoId=2");
      const data = await response.json();
      const dataAnual = data.filter(item => item.anio !== 2025);
      
      const dataAnualArea = dataAnual.map(item => ({
        nombreArea: item.area.nombreArea,
        anio: item.anio,
        cantidad: item.cantidad}));
    
      setAreaAnual(dataAnualArea);
      
      
      

      // const data2023 = data.filter(item => item.anio === 2023);
      // setAreaAnual2023(data2023);

      // const data2022 = data.filter(item => item.anio === 2022);
      // setAreaAnual2022(data2022);

      // const data2021 = data.filter(item => item.anio === 2021);
      // setAreaAnual2021(data2021);

      // const data2020 = data.filter(item => item.anio === 2020);
      // setAreaAnual2020(data2020);

      // const data2019 = data.filter(item => item.anio === 2019);
      // setAreaAnual2019(data2019);

      // const data2018 = data.filter(item => item.anio === 2018);
      // setAreaAnual2018(data2018);

      // const data2017 = data.filter(item => item.anio === 2017);
      // setAreaAnual2017(data2017);

      // const data2016 = data.filter(item => item.anio === 2016);
      // setAreaAnual2016(data2016);

      // const data2015 = data.filter(item => item.anio === 2015);
      // setAreaAnual2015(data2015);

      // const data2014 = data.filter(item => item.anio === 2014);
      // setAreaAnual2014(data2014);

      // const data2013 = data.filter(item => item.anio === 2013);
      // setAreaAnual2013(data2013);

      // const data2012 = data.filter(item => item.anio === 2012);
      // setAreaAnual2012(data2012);

      // const data2011 = data.filter(item => item.anio === 2011);
      // setAreaAnual2011(data2011);

      // const data2010 = data.filter(item => item.anio === 2010);
      // setAreaAnual2010(data2010);







    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      await loadProdGasMensual();
      await loadProdGasAnual();

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
