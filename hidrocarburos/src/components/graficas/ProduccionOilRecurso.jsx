import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function ProduccionOilRecurso() {

  const option = {
    title: {
      text: 'Stacked Area Chart'

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
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
          'Ene',
          'Mar',
          'Abr',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sun'
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
        name: 'Email',
        smooth: true,
        type: 'line',

        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, 120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, 220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, 150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, 320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Direct',
        type: 'bar',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301]
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [50, 256, 125]
      },
      {
        name: 'Search Engine',
        type: 'line',
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
        data: [null, null, null, 820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

    async function loadProduccionPetroleo() {
      try {
        const response = await fetch('/api/produccion?fluidoId=2');
        const data = await response.json();
        console.log("Producción cargada:", data);
  
        setProduccion(data);
      } catch (error) {
        console.error('Error al cargar la produccion:', error);
      }
    }
  
    useEffect(() => {
      const fetchData = async () => {
        await loadProduccionPetroleo();
      };
  
      fetchData();
    }, []);

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}