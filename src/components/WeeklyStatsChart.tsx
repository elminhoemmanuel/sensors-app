import React from 'react';
import { Stats } from '../interfaces/home';
import Chart from "react-apexcharts";

type WeeklyStatsChartProps = {
    stats: Stats[];
}

const WeeklyStatsChart = ({ stats }: WeeklyStatsChartProps) => {

    let data = stats?.map((stat) => stat.temp);
    let chartSeries = [
        {name:"Sensor-1", data}
    ];

    let chartOptions = {
        chart: {
            id: "stats-chart",
        },
        colors: ["#cccccc"],
        stroke: {
            width: 4
        },
        markers: {
            size: 2,
            colors: "#4B5563"
        }
    }

    return (
        <div className='bg-transparent'>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="area"
                width="100%"
                height="260px"
            />
        </div>
    )
}

export default WeeklyStatsChart