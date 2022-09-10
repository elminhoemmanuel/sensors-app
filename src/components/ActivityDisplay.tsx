import React from 'react'
import { SensorEvent } from '../interfaces/sensorDetails'
import ActivityCard from './ActivityCard';
import SectionHeader from './SectionHeader';

type ActivityDisplayProps = {
    data: SensorEvent[];
}

const ActivityDisplay = ({ data }: ActivityDisplayProps) => {
  return (
    <div className=''>
        <SectionHeader className='mb-1' hasBorder={false} hasIcon={false} text="ACTIVITY" />
        <div className='border border-gray-300 p-5 h-96 overflow-auto'>
            {
                data?.map((item)=>(
                    <ActivityCard data={item}  key={item.time} />
                ))
            }
        </div>
    </div>
  )
}

export default ActivityDisplay