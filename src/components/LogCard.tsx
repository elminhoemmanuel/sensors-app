import React from 'react';
import { SensorEvent } from '../interfaces/sensorDetails';
import { formatDistance } from 'date-fns';
import { GoPrimitiveDot } from "react-icons/go";

type LogCardProps = {
    data: Omit<SensorEvent, 'event_name'>;
}

const LogCard = ({ data }: LogCardProps) => {

    const formatDate = (val: string) => {
        const presentDay = new Date();
        return `${formatDistance(new Date(Number(val)), presentDay)} ago`
    }

    return (
        <div className='flex justify-between relative border-l border-gray-300 pb-6 pt-0'>
            <p className='w-4/5 pl-3'>
                {data?.description}
            </p>
            <p className='w-1/5 text-right px-2'>
                {formatDate(data?.time)}
            </p>
            <GoPrimitiveDot className='h-6 w-6 text-gray-500 absolute -top-1 -left-3' />
        </div>
    )
}

export default LogCard