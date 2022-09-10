import { API } from ".";
import { AddSensorResponse, Sensor } from "../interfaces/addSensor";

export const createSensor = async (reqData: Sensor) => (await API.post<AddSensorResponse>(`/sensor`, reqData)).data;