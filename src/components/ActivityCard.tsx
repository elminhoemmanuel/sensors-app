import React from 'react';
import { SensorEvent } from '../interfaces/sensorDetails';
import User from './icons/User';
import { formatDistance } from 'date-fns';

type ActivityCardProps = {
    data: SensorEvent;
}

const ActivityCard = ({ data }: ActivityCardProps) => {

    const formatDate = (val: string) => {
        const presentDay = new Date();
        return `${formatDistance(new Date(Number(val)), presentDay)} ago`
    }

    return (
        <div className='mb-8'>
            <div className='flex mb-1 items-center'>
                <User />
                <div className='ml-3'>
                    <p>{data?.event_name}</p>
                    <p>{formatDate(data?.time)}</p>
                </div>
            </div>

            <p>{data?.description}</p>
        </div>
    )
}

export default ActivityCard