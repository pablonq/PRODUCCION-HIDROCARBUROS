
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';


export default function PozosSistema() {
  const [pozoSistema, setpozoSistema] = useState([]);
  const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Sistemas',
      type: 'pie',
      radius: ['45%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
         ...pozoSistema.map(item => ({
           value: item.cantidad,
           name: item.sistema.nombreSistema
         })),
        //  { value: 1048, name: 'Search Engine' },
        //  { value: 735, name: 'Direct' },
        //  { value: 580, name: 'Email' },
        //  { value: 484, name: 'Union Ads' },
        //  { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

async function loadPozoSistema(){
  try{
    const response = await fetch("/api/pozos/sistema");
    const data = await response.json();
    
    const data2025 = data.filter(item => item.anio === 2025 && item.mes === 8);
    setpozoSistema(data2025);
    
  } catch (error) {
    console.error('Error fetching pozo sistema data:', error);
  }
}
useEffect(() => {
    const fetchData = async () => {
      await loadPozoSistema();
    };

    fetchData();
  }, []);

  return (
    <>
      <ReactECharts option={option} style={{ height: 400, width: '100%' }} />
    </>
  );
        
}