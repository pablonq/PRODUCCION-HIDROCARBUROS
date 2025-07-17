"use client";
import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import ReactECharts from 'echarts-for-react';


// import { barChartClasses } from '@mui/x-charts/BarChart';

const chartTheme = {
  axis: {
    line: {
      stroke: '#CCCCCC', // línea de eje
    },
    tickColor: '#CCCCCC', // color de ticks
    tickLabel: {
      color: '#CCCCCC', // etiquetas de los ticks
    },
  },
  legend: {
    label: {
      color: '#CCCCCC', // color del texto de la leyenda
    },
  },
};



export default function Produccion() {
  const option = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
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
    left: '3%',
    right: '4%',
    bottom: '3%',
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


  const [produccion, setProduccion] = useState([]);

  async function loadProduccion() {
    try {
      const response = await fetch('/api/produccion');
      const data = await response.json();
      console.log("Producción cargada:", data);

      setProduccion(data);
    } catch (error) {
      console.error('Error al cargar la produccion:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await loadProduccion();
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-200 py-0">
      <h1 className="text-2xl font-bold ">Bienvenido a la página de Producción</h1>
      <div className="grid [grid-template-columns:repeat(2,minmax(0,1fr))_0.5fr] [grid-template-rows:repeat(2,minmax(0,1fr))] gap-[10px]">
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 bg-gray-500">
          <h2 className="text-xl font-semibold text-white">Gráfico de Producción</h2>
          <p className="text-white">Aquí puedes ver un gráfico representativo de la producción.</p>
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-blue-200">
          <ul className="w-full max-w-3xl bg-white rounded shadow p-6 my-20">
            <h2 className="text-xl font-semibold mb-4">Listado de Producción</h2>
            {produccion.length === 0 ? (
              <li className="text-gray-500">No hay datos disponibles.</li>
            ) : (
              produccion.map((item, idx) => (
                <li key={idx} className="border-b py-2">
                  <span className="font-bold text-orange-900">{item.cantidad}</span>{" "}
                  <span className="text-gray-700">| {item.empresa.nombreEmpresa} | </span>
                  <span className="text-gray-700">{item.fluido.tipoFluido} | {item.area.nombreArea} | {item.tipoRecurso.tipoRecurso}</span>

                </li>
              ))
            )}
          </ul>
        </div>

        <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-green-200">
          <ReactECharts option={option} />
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#102e4d]">

          <BarChart
            series={[
              { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
              { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },

            ]}
            barLabel={(item, context) => {
              if ((item.value ?? 0) > 10) {
                return 'High';
              }
              return context.bar.height < 60 ? null : item.value?.toString();
            }}
            height={350}
            margin={{ left: 0 }}
            sx={{
              // Eje: línea y ticks
              '.MuiChartsAxis-line, .MuiChartsAxis-tick': {
                stroke: '#CCCCCC',
              },
              // Etiquetas de ticks (texto en ejes)
              '.MuiChartsAxis-tickLabel tspan': {
                fill: '#CCCCCC',
                fontSize: '0.9em',
              },
              // Texto de la leyenda (SVG <text>)
              '.MuiChartsLegend-series text': {
                fill: '#CCCCCC',
                fontSize: '0.9em',
              },
              // Recuadro de la leyenda (opcional)
              '.MuiChartsLegend-root': {
                color: '#CCCCCC',
              },
            }}
            theme={chartTheme}
          //barCategoryGap={0} // Reduce el espacio entre categorías
          //barGap={0} // Reduce el espacio entre barras dentro de la misma categoría
          //groupMode="grouped" // Agrupa las barras para el mismo valor de x
          />

        </div>

        <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-transparent">
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <ChartContainer
              xAxis={[{
                scaleType: 'band',
                data: ['2010', '2011', '2012', '2013', 'Ene-25', 'Feb-25', 'Mar-25'],
                id: 'quarters',
                label: 'Quarters',
                height: 50,
                labelStyle: { fontSize: 18 },
              }]}
              yAxis={[
                { id: 'quantities', position: 'left', width: 65 },
              ]}
              series={[
                {
                  type: 'line',
                  id: 'revenue',
                  yAxisId: 'quantities',
                  data: [null, null, null, null, 7542, 9135, 12221],
                  label: 'Revenue',
                  stack: 'total',
                  area: true,
                  areaOpacity: 0.3,
                  showMarkers: false,
                },
                {
                  type: 'line',
                  id: 'expenses',
                  yAxisId: 'quantities',
                  data: [null, null, null, null, 5542, 5146, 3735],
                  stack: 'total',
                  areaOpacity: 0.3,
                  area: true,
                  showMarkers: false,
                },
                {
                  type: 'line',
                  id: 'profit',
                  yAxisId: 'quantities',
                  data: [null, null, null, null, 6542, 7146, 8735],
                  stack: 'total',
                  areaOpacity: 0.3,
                  fill: 'solid',
                  area: true,
                  showMarkers: false,
                  color: '#CCCCCC', // Color de la línea de profit
                  backgroundcolor: '#CCCCCC', // Color de fondo del área de profit 
                },
                {
                  type: 'bar',
                  id: 'cookies',
                  yAxisId: 'quantities',
                  data: [3205, 2542, 3135, 8374, null, null, null],
                  stack: 'A',
                  barCategoryGap: 0,
                  barGap: 0,
                  groupMode: 'grouped',
                  color: '#CCCCCC', // Color de las barras de cookies
                  label: 'Cookies',
                },
                {
                  type: 'bar',
                  id: 'icecream',
                  yAxisId: 'quantities',
                  data: [1645, 5542, 5146, 3735, null, null, null],
                  stack: 'A',
                  barCategoryGap: 0,
                  barGap: 0,
                  groupMode: 'grouped',
                },
              ]}
              height={400}
              //groupMode="grouped"

              experimentalFeatures={{ preferStrictDomainInLineCharts: true }}
            >
              <BarPlot />
              <LinePlot />
              <ChartsXAxis axisId="quarters" label="2021 quarters" labelStyle={{ fontSize: 18 }} />
              <ChartsYAxis axisId="quantities" label="# units sold" />
            </ChartContainer>

          </Box>
        </div>


      </div>
    </div>
  );
}