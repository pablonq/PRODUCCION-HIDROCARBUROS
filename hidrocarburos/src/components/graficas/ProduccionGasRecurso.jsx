import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function ProduccionGasRecurso() {
  const [prodGasConvMensual, setProdGasConvMensual] = useState([]);
  const [prodGasConvAnual, setProdGasConvAnual] = useState([]);

  const [prodGasShaleMensual, setProdGasShaleMensual] = useState([]);
  const [prodGasShaleAnual, setProdGasShaleAnual] = useState([]);

  const [prodGasTightMensual, setProdGasTightMensual] = useState([]);
  const [prodGasTightAnual, setProdGasTightAnual] = useState([]);

  
  const option = {
    title: {
      text: 'Produccion Gas Recurso'

    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#102e4d'
        }
      }
    },
    legend: {
      data: ['Gas Convencional', 'Gas Shale', 'Tight Gas']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      top: '15%',
      left: '3%',
      right: '4%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: [
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
          '2024',
          
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Gas Convencional',
        smooth: true,
        type: 'line',

        stack: 'Total',
        areaStyle: {
          opacity: 0.5,
        },
        emphasis: {
          focus: 'series'
        },
        data: prodGasConvMensual
      },
      {
        name: 'Gas Shale',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: prodGasShaleMensual
      },
      {
        name: 'Tight Gas',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: prodGasTightMensual
      },
      
        
      {
        name: 'Gas Convencional',
        type: 'bar',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: prodGasConvAnual
      },

      {
        name: 'Gas Shale',
        type: 'bar',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: prodGasShaleAnual
      },
      {
        name: 'Tight Gas',
        type: 'bar',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: prodGasTightAnual
      },
      // {
      //   name: 'Gas Shale',
      //   type: 'bar',
      //   smooth: true,
      //   stack: 'Total',
      //   label: {
      //     show: true,
      //     position: 'top'
      //   },
      //   areaStyle: {},
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: [null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, 820, 932, 901, 934, 1290, 1330, 1320]
      // }
    ]
  };

  async function loadProdGasConv() {
    try {
      const response = await fetch(
        "/api/produccion/recurso?fluidoId=2&tipoRecursoId=1"
      );
      const data = await response.json();
      const dataProdGasConvMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setProdGasConvMensual(dataProdGasConvMensual);

      const dataProdGasConvAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setProdGasConvAnual(dataProdGasConvAnual);
    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  async function loadProdGasShale() {
    try {
      const response = await fetch(
        "/api/produccion/recurso?fluidoId=2&tipoRecursoId=2"
      );
      const data = await response.json();
      const dataProdGasShaleMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setProdGasShaleMensual(dataProdGasShaleMensual);

      const dataProdGasShaleAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setProdGasShaleAnual(dataProdGasShaleAnual);
    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }

  async function loadProdGasTight() {
    try {
      const response = await fetch(
        "/api/produccion/recurso?fluidoId=2&tipoRecursoId=3"
      );
      const data = await response.json();
      const dataProdGasTightMensual = [
        ...Array(15).fill(null),
        ...data
        .filter(item => item.anio === 2025)
        .map(item => item.cantidad)
      ];
      setProdGasTightMensual(dataProdGasTightMensual);

      const dataProdGasTightAnual = data
        .filter(item => item.anio !== 2025)
        .map(item => item.cantidad);
      setProdGasTightAnual(dataProdGasTightAnual);
    } catch (error) {
      console.error("Error al cargar la produccion:", error);
    }
  }


  
    useEffect(() => {
      const fetchData = async () => {
        await loadProdGasConv();
        await loadProdGasShale();
        await loadProdGasTight();
      };
  
      fetchData();
    }, []);

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}