import React from 'react';
import { SensorData } from '../interfaces/sensorDetails';
import Card from './common/Card';

type StackedCardsProps = {
    data: SensorData;
}

const StackedCards = ({ data }: StackedCardsProps) => {
    return (
        <div className=''>
            <Card
                text="TOTAL MESSAGES"
                value="Total messages this week"
                addStyles='border-b border-gray-300 p-5'
                icon={<p className='text-xl font-extrabold'>{data?.overview.total_messages}</p>}
            />
            <Card
                text="DOWNTIME"
                value="Total down time"
                addStyles='border-b border-gray-300 p-5'
                icon={<div className='flex flex-col'><p className='text-xl font-extrabold p-0'>{data?.overview.down_time}</p><p className='text-sm'>sec</p></div>}
            />
            <Card
                text="ALERTS"
                value="System alerts this week"
                addStyles='p-5'
                icon={<p className='text-xl font-extrabold'>{data?.overview.alerts}</p>}
            />
        </div>
    )
}

export default StackedCards