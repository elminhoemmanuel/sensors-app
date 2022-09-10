import { render, screen } from '@testing-library/react';
import React from 'react';
import LogCard from '../components/LogCard';
import { formatDistance } from 'date-fns';

const activity = {
    description: "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci",
    time: "1638292323000",
}

const formatDate = (val: string) => {
    const presentDay = new Date();
    return `${formatDistance(new Date(Number(val)), presentDay)} ago`
}

describe('Log Card Tests', () => {

    test('Log Card should show the correct log description', () => {
        render(<LogCard data={activity} />);
        const description = screen.getByText("mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci");
        expect(description).toBeInTheDocument();
    });

    test('Log Card should show the correct log time', () => {
        render(<LogCard data={activity} />);
        const time = screen.getByText(formatDate(activity.time));
        expect(time).toBeInTheDocument();
    });
})