import { Stats } from "./home";

export interface OverviewData {
    alerts: number;
    down_time: number;
    total_messages: number;
}

export interface SensorData {
    device_id: string;
    customer: string;
    location: string;
    last_online?: string;
    last_temp: number;
    overview: OverviewData
}

export interface SensorResult {
    result: SensorData;
}

export interface SensorResponse {
    [key: string]: unknown;
    data: SensorResult
}

export interface SensorEvent {
    description: string;
    event_name: string;
    time: string;
}

export interface SensorEventsResult {
    results: SensorEvent[]
}

export interface SensorEventsResponse {
    [key: string]: unknown;
    data: SensorEventsResult;
}

export interface SensorLogsResult {
    results: Omit<SensorEvent, 'event_name'>[];
}

export interface SensorLogsResponse {
    [key: string]: unknown;
    data: SensorLogsResult;
}

export interface StatsWeeklyAverageResult {
    results: Stats[];
}

export interface StatsWeeklyAverageResponse {
    [key: string]: unknown;
    data: StatsWeeklyAverageResult;
}

export interface StatsWeekly {
    sensor_id: string;
    stats: Stats[];
}

export interface StatsWeeklyResult {
    results: StatsWeekly[];
}

export interface StatsWeeklyResponse {
    [key: string]: unknown;
    data: StatsWeeklyResult
}

export type AllSensorDataResponse = [SensorResponse, SensorEventsResponse, SensorLogsResponse, StatsWeeklyAverageResponse, StatsWeeklyResponse];

export interface AllDetails {
    sensor: SensorData;
    events: SensorEvent[];
    logs: Omit<SensorEvent, 'event_name'>[];
    weekly_stats: Stats[];
    weekly_average_stats: StatsWeekly[];
}


