import React from 'react';
import { Fetch, SingleStatsResponse } from '../interfaces/home';
import Loader from './common/Loader';
import Settings from './icons/Settings';
import SectionHeader from './SectionHeader';
import StatsChart from './StatsChart';

type StatsDisplayProps = {
    stats: SingleStatsResponse[];
    fetchStats: Fetch;
}

const StatsDisplay = ({ fetchStats, stats }: StatsDisplayProps) => {
    return (
        <div className='mb-10'>
            <SectionHeader
                text='SENSOR TEMPERATURES'
                hasBorder
                hasIcon
                className="p-2"
                icon={<div className='bg-gray-200 rounded-sm p-2 flex items-center justify-center cursor-pointer'><Settings className='w-6 h-6 text-gray-600' /></div>}
            />
            <div>
                {
                    fetchStats.loading ?
                        <div className='my-3 flex items-center justify-center'><Loader variant='dark' /></div> :
                        <div>
                            {
                                stats && stats?.length > 0 ?
                                    <StatsChart stats={stats} /> :
                                    <p className='text-center py-3'>{fetchStats.error}</p>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default StatsDisplay