"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import Box from '@mui/material/Box';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

import ProduccionGasRecurso from "@/components/graficas/ProduccionGasRecurso";


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



  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-200 py-0">
      <h1 className="text-2xl font-bold ">Bienvenido a la página de Producción</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-4 w-full p-2">
        
        <div className="w-full bg-blue-200">
          <ProduccionGasRecurso />
        </div>

        <div className="w-full bg-blue-200">
          
        </div>

        <div className="w-full bg-blue-200">

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

        <div className="w-full bg-blue-200">
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