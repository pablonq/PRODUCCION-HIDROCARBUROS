import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

export default function ProduccionGasRecurso() {
  const [produccion, setProduccion] = useState([]);

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
        name: 'Convencional',
        smooth: true,
        type: 'line',

        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, 120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Shale Gas',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, 220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Tight Gas',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, 150, 232, 201, 154, 190, 330, 410]
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
        name: 'Convencional',
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
        data: [null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, 820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

    async function loadProduccionGasConvencional() {
      try {
        const response = await fetch('/api/produccion?fluidoId=2&tipoRecursoId=2');
        const data = await response.json();
        
  
        setProduccion(data);
      } catch (error) {
        console.error('Error al cargar la produccion:', error);
      }
    }
  
    useEffect(() => {
      const fetchData = async () => {
        await loadProduccionGasConvencional();
      };
  
      fetchData();
    }, []);

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}