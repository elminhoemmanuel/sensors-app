import React from 'react';
import { SingleStatsResponse } from '../interfaces/home';
import Chart from "react-apexcharts";

type StatsChartProps = {
    stats: SingleStatsResponse[];
}

const StatsChart = ({ stats }: StatsChartProps) => {

    let chartSeries = stats.map((stat) => {
        let data = stat.stats.map(each => each.temp);
        return {
            name: stat.device_id,
            data,
        }
    })

    let chartOptions = {
        chart: {
            id: "stats-chart"
        },
        colors: ["#e6e600", "#00e600", "#76bdd5"],
        stroke: {
            width: 1
        },
    }

    return (
        <div className='bg-black py-6'>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                width="100%"
                height="500px"
            />
        </div>
    )
}

export default StatsChart