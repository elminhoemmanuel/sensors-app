import React from 'react'
import { useParams } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout';

const SensorDetails = () => {
    let { sensorId } = useParams();

    return (
        <DashboardLayout>
            <div>The sensor whose details will be here is - {sensorId}</div>
        </DashboardLayout>
    )
}

export default SensorDetails