import React from "react";

export interface NavItem {
    id: number;
    name: string;
    icon: React.ReactNode;
}

export interface DashboardCardItem {
    id: number;
    text: string;
    value: string;
    icon: React.ReactNode;
}