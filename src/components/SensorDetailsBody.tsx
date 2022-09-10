import React from 'react';
import { AllDetails } from '../interfaces/sensorDetails';
import ActivityDisplay from './ActivityDisplay';
import LogsDisplay from './LogsDisplay';
import StackedCards from './StackedCards';

type SensorDetailsProps = {
    data: AllDetails;
}

const SensorDetailsBody = ({ data }: SensorDetailsProps) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 mb-16'>
                <div className='border border-gray-300 col-span-1 md:col-span-5'>
                    <StackedCards data={data.sensor} />
                </div>
                <div className='border-y border-r border-gray-300 col-span-1 md:col-span-7 p-5'>

                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-8 mb-16'>
                <LogsDisplay data={data.logs} />
                <ActivityDisplay data={data.events} />
            </div>
        </div>
    )
}

export default SensorDetailsBody