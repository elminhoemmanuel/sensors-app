export interface Sensor {
    sensorId: string,
    location: string,
    customer: string,
    min_temp_limit: number | undefined,
    max_temp_limit: number | undefined,
    monitor_min_temp: boolean,
    monitor_max_temp: boolean,
}

export interface AddSensorResult {
    device_id: string;
    customer: string;
    location: string;
}

export interface AddSensorResponse {
    result: AddSensorResult
}