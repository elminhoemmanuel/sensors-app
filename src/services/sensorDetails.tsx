import { API } from ".";

// export const createSensor = async (reqData: Sensor) => (await API.post<AddSensorResponse>(`/sensor`, reqData)).data;
export const getAllSensorData = async (id: string | undefined) =>{
    let endpoints = [
        `/sensor/${id}`,
        `/sensor/${id}/events`,
        `/sensor/${id}/logs`,
        `/sensor/${id}/stats/weekly`,
        `/sensor/${id}/stats/weekly_avg`,
    ]

    return await Promise.all(endpoints.map((endpoint) => API.get(endpoint)));
}