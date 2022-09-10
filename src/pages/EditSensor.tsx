import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import EditSensorBody from '../components/EditSensorBody';
import PageNav from '../components/PageNav';

const EditSensor = () => {
    return (
        <DashboardLayout>
            <div className='p-8'>
                <PageNav></PageNav>
                <EditSensorBody />
            </div>
        </DashboardLayout>
    )
}

export default EditSensor