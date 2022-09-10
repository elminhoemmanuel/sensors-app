import { API } from ".";
import { AddSensorResponse, Sensor } from "../interfaces/addSensor";

export const editSensor = async (reqData: Sensor, id:string | undefined) => (await API.put<AddSensorResponse>(`/sensor/${id}`, reqData)).data;