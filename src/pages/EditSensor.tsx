import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import EditSensorBody from '../components/EditSensorBody';
import PageNav from '../components/PageNav';

const EditSensor = () => {

    let { sensorId } = useParams();

    return (
        <DashboardLayout>
            <div className='p-8'>
                <PageNav><p className='text-lg ml-5'>Edit Sensor - <span className='text-sm font-extrabold'>{sensorId}</span></p></PageNav>
                <EditSensorBody />
            </div>
        </DashboardLayout>
    )
}

export default EditSensor