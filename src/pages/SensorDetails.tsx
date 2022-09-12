import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import PageNav from '../components/PageNav';
import Loader from '../components/common/Loader';
import { Fetch } from '../interfaces/home';
import { AllDetails } from '../interfaces/sensorDetails';
import { getAllSensorData } from '../services/sensorDetails';
import SensorDetailsBody from '../components/SensorDetailsBody';

const SensorDetails = () => {

    let { sensorId } = useParams();
    const [fetch, setFetch] = useState<Fetch>({ loading: false, error: '' });
    const [allDetails, setAllDetails] = useState<AllDetails>({} as AllDetails);

    const handleFetchData = (fetchData: Fetch, data: AllDetails) => {
        setFetch(fetchData);
        setAllDetails(data);
    }

    const fetchAllSensorData = () => {
        handleFetchData({ loading: true, error: '' }, {} as AllDetails);
        getAllSensorData(sensorId)
            .then(([{data: {result: sensor}}, {data: {results: events}}, {data: {results: logs}}, {data: {results: weekly_stats}}, {data: {results: weekly_average_stats}}]) => {
                let res = { sensor, events, logs, weekly_stats, weekly_average_stats }
                handleFetchData({ loading: false, error: '' }, res);
            })
            .catch((err) => {
                handleFetchData({ loading: false, error: 'Something went wrong , could not fetch the required page data' }, {} as AllDetails);
            })
    }

    useEffect(() => {
        fetchAllSensorData();
    }, [])

    return (
        <DashboardLayout>
            <div className='p-8'>
                <PageNav><h1 className='text-lg font-extrabold mb-16' > &#160;&#160;&#160;Sensor - {sensorId}</h1></PageNav>
                {
                    fetch?.loading ?
                        <div className='my-3 flex items-center justify-center'><Loader variant='dark' /></div> :
                        <div>
                            {
                                !fetch?.error ?
                                    <SensorDetailsBody data={allDetails} /> 
                                    :
                                    <p className='text-center py-3'>{fetch.error}</p>
                            }
                        </div>
                }
            </div>
        </DashboardLayout>
    )
}

export default SensorDetails