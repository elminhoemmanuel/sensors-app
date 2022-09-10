import { render, screen } from '@testing-library/react';
import React from 'react';
import ActivityCard from '../components/ActivityCard';
import { formatDistance } from 'date-fns';

const activity = {
    event_name: "DEVICE_ONLINE",
    description: "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
    time: "1629948641000",
}

const formatDate = (val: string) => {
    const presentDay = new Date();
    return `${formatDistance(new Date(Number(val)), presentDay)} ago`
}

describe('Activity Card Tests', () => {

    test('Activity Card should show the correct event name', () => {
        render(<ActivityCard data={activity} />);
        const eventName = screen.getByText("DEVICE_ONLINE");
        expect(eventName).toBeInTheDocument();
    });

    test('Activity Card should show the correct event description', () => {
        render(<ActivityCard data={activity} />);
        const description = screen.getByText("est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis");
        expect(description).toBeInTheDocument();
    });

    test('Activity Card should show the correct event time', () => {
        render(<ActivityCard data={activity} />);
        const time = screen.getByText(formatDate(activity.time));
        expect(time).toBeInTheDocument();
    });
})