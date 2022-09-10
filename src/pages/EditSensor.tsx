import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';

const EditSensor = () => {

    let { sensorId } = useParams();

    return (
        <DashboardLayout>
            <div>
                The sensor to be edited is - {sensorId}
            </div>
        </DashboardLayout>
    )
}

export default EditSensor