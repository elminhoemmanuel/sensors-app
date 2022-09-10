import React from 'react';
import { dashboardCards } from '../data';
import { DashboardCardItem } from '../interfaces/data';

const DashboardCards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10'>
        {
            dashboardCards.map((item: DashboardCardItem)=>(
                <div key={item.id} className="border border-gray-300 p-5 flex items-center justify-between">
                    <div>
                        <h1 className='text-lg font-extrabold'>{item.text}</h1>
                        <p>{item.value}</p>
                    </div>
                    {item.icon}
                </div>
            ))
        }
    </div>
  )
}

export default DashboardCards