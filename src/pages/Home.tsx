import React, { useState, useCallback, useEffect } from 'react';
import DashboardCards from '../components/DashboardCards';
import DashboardLayout from '../components/layout/DashboardLayout';
import SensorList from '../components/SensorList';
import StatsDisplay from '../components/StatsDisplay';
import { Fetch, PageData, SensorsResult, SingleStatsResponse } from '../interfaces/home';
import { getSensors, getSensorsStats } from '../services/home';

const Home = () => {

    const [stats, setStats] = useState<SingleStatsResponse[]>([] as SingleStatsResponse[]);
    const [sensors, setSensors] = useState<SensorsResult[]>([] as SensorsResult[]);
    const [fetchStats, setFetchStats] = useState<Fetch>({ loading: false, error: '' });
    const [fetchSensors, setFetchSensors] = useState<Fetch>({ loading: false, error: '' });
    const [pageData, setPageData] = useState<PageData>({ page: 1, pages: [] as number[], });

    const handleFetchSensors = (fetchData: Fetch, data: SensorsResult[], page: PageData) => {
        setFetchSensors(fetchData);
        setSensors(data);
        setPageData(page);
    }

    const handleFetchStats = (fetchData: Fetch, data: SingleStatsResponse[]) => {
        setFetchStats(fetchData);
        setStats(data);
    }

    const handlePageChange = (val:number) =>{
        setPageData({ ...pageData, page: val })
    }

    const fetchSensorsData = useCallback(
        (): void => {
            handleFetchSensors({ loading: true, error: '' }, [] as SensorsResult[], pageData)
            getSensors(pageData.page)
                .then((data) => {
                    let pageObj = { page: data?.paging.currentPage!, pages: data?.paging.pages! }
                    handleFetchSensors({ loading: false, error: '' }, data?.results!, pageObj)
                })
                .catch((err) => {
                    handleFetchSensors({ loading: false, error: 'Something went wrong, could not fetch sensors list' }, [] as SensorsResult[], pageData)
                })
        },
        [pageData.page],
    )

    const fetchStatsData = () => {
        handleFetchStats({ loading: true, error: '' }, [] as SingleStatsResponse[])
        getSensorsStats()
            .then((data) => {
                handleFetchStats({ loading: false, error: '' }, data?.results!);
            })
            .catch((err) => {
                handleFetchStats({ loading: false, error: 'Something went wrong, could not fetch sensor stats' }, [] as SingleStatsResponse[])
            })
    }

    useEffect(() => {
        fetchSensorsData();
    }, [fetchSensorsData])

    useEffect(() => {
        fetchStatsData();
    }, [])

    return (
        <DashboardLayout>
            <div className='p-8'>
                <DashboardCards />
                <StatsDisplay fetchStats={fetchStats} stats={stats} />
                <SensorList
                    fetchSensors={fetchSensors}
                    sensors={sensors}
                    pageData={pageData}
                    handlePageChange={handlePageChange}
                />
            </div>
        </DashboardLayout>
    )
}

export default Home