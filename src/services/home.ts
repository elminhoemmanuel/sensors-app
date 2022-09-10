import { API } from ".";
import { SensorsResponse, StatsResponse } from "../interfaces/home";

export const getSensors = async (page: number) => (await API.get<SensorsResponse>(`/sensor?page=${page}`)).data;
export const getSensorsStats = async () => (await API.get<StatsResponse>(`/sensor/stats`)).data;