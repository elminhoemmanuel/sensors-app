import React from 'react';
import Chart from "react-apexcharts";
import { StatsWeekly } from '../interfaces/sensorDetails';

type WeeklyAverageChartProps = {
    stats: StatsWeekly[];
}

const WeeklyAverageChart = ({ stats }: WeeklyAverageChartProps) => {

    let chartSeries = stats?.map((stat) => {
        let data = stat?.stats?.map(each => each.temp);
        return {
            name: stat.sensor_id,
            data,
        }
    })

    let chartOptions = {
        chart: {
            id: "stats-chart"
        },
        colors: ["#cccccc","#4B5563"],
        stroke: {
            width: 1,
            
        },
    }

    return (
        <div className='bg-transparent'>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                width="100%"
                height="260px"
            />
        </div>
    )
}

export default WeeklyAverageChart