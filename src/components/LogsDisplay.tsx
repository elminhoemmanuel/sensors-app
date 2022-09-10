import React from 'react'
import { SensorEvent } from '../interfaces/sensorDetails'
import LogCard from './LogCard';
import SectionHeader from './SectionHeader';

type LogsDisplayProps = {
    data: Omit<SensorEvent, 'event_name'>[];
}

const LogsDisplay = ({ data }: LogsDisplayProps) => {
    return (
        <div className=''>
            <SectionHeader className='mb-1' hasBorder={false} hasIcon={false} text="SYSTEM LOG" />
            <div className='border border-gray-300 p-5 h-96 overflow-auto'>
                {
                    data?.map((item) => (
                        <LogCard data={item} key={item?.time} />
                    ))
                }
            </div>
        </div>
    )
}

export default LogsDisplay