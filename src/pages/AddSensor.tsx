import React from 'react';
import AddSensorBody from '../components/AddSensorBody';
import DashboardLayout from '../components/layout/DashboardLayout';
import PageNav from '../components/PageNav';

const AddSensor = () => {
  return (
    <DashboardLayout>
        <div className='p-8'>
            <PageNav></PageNav>
            <AddSensorBody/>
        </div>
    </DashboardLayout>
  )
}

export default AddSensor