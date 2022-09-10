
export interface SensorsResult {
    device_id: string;
    last_online: string;
    last_temp: number;
    customer: string;
    location: string
}

export interface SensorsPageData {
    count: number | null;
    currentPage: number | null;
    nextPage: number | null;
    pageSize: number | null;
    pages: number[];
    previousPage: number;
}

export interface SensorsResponse {
    results: SensorsResult[];
    paging: SensorsPageData;
}

export interface Stats {
    time: string;
    temp: number;
}

export interface SingleStatsResponse {
    stats: Stats[];
    device_id: string;
}

export interface StatsResponse {
    results: SingleStatsResponse[];
}

export interface Fetch {
    loading: boolean;
    error: string;
}
export interface FetchForm {
    loading: boolean;
    success: boolean;
    error: string;
}

export interface PageData {
    page: number;
    pages: number[];
}