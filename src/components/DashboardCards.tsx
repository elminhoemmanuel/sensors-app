import React from 'react';
import { dashboardCards } from '../data';
import { DashboardCardItem } from '../interfaces/data';
import Card from './common/Card';

const DashboardCards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10'>
        {
            dashboardCards.map((item: DashboardCardItem)=>(
                <Card key={item.id} text={item.text} value={item.value} icon={item.icon} addStyles='border border-gray-300 p-5' />
            ))
        }
    </div>
  )
}

export default DashboardCards