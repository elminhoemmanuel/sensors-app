import React from 'react';
import { StatsWeekly } from '../interfaces/sensorDetails';
import Button from './common/Button';
import Settings from './icons/Settings';
import SectionHeader from './SectionHeader';
import WeeklyAverageChart from './WeeklyAverageChart';

type WeeklyAverageDisplayProps = {
    data: StatsWeekly[];
}

const WeeklyAverageDisplay = ({ data }: WeeklyAverageDisplayProps) => {
    return (
        <div className='mb-10 p-5 border border-gray-300'>
            <SectionHeader
                text='TEMPERATURE DAILY'
                hasBorder={false}
                hasIcon
                className="mb-7"
                icon={<Button variant='secondary' className='rounded-sm p-2 flex items-center justify-center'><Settings className='w-6 h-6 text-gray-500' /></Button>}
            />
            <div className=''>
                <WeeklyAverageChart stats={data} />
            </div>
        </div>
    )
}

export default WeeklyAverageDisplay