import React from 'react'
import SectionHeader from './SectionHeader';
import Plus from './icons/Plus';
import { Fetch, SensorsResult, PageData } from '../interfaces/home';
import Loader from './common/Loader';
import SensorTable from './SensorTable';
import Pagination from './Pagination';
import { useNavigate } from "react-router-dom";

type SensorListProps = {
    sensors: SensorsResult[];
    fetchSensors: Fetch;
    pageData: PageData;
    handlePageChange: (val:number)=>void;
}

const SensorList = ({ sensors, fetchSensors, pageData, handlePageChange }: SensorListProps) => {
    
    let navigate = useNavigate();
    
    return (
        <div className='mb-12'>
            <SectionHeader
                text='SENSOR LIST'
                hasBorder={false}
                hasIcon
                className="py-5"
                icon={<button onClick={()=>navigate(`/sensor/add`)} className='bg-gray-200 rounded-sm p-2 flex items-center justify-center focus:outline-none'><Plus className='w-6 h-6 text-gray-600' /></button>}
            />
            <div className='border border-gray-300 p-3'>
                {
                    fetchSensors.loading ?
                        <div className='my-3 flex items-center justify-center'><Loader variant='dark' /></div> :
                        <div>
                            {
                                sensors && sensors?.length > 0 ?
                                    <SensorTable data={sensors} /> :
                                    <p className='text-center py-3'>{fetchSensors.error}</p>
                            }
                        </div>
                }
            </div>
            <Pagination pageData={pageData} handlePageChange={handlePageChange} />
        </div>
    )
}

export default SensorList