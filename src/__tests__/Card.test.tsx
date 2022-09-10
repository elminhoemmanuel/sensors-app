import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/common/Card';

const data = {
    text: "Testing Card text",
    value: "Test Value",
    icon: <p>Test Icon</p>
}

describe('Card Tests', () => {

    test('Card should show the correct text writeup', () => {
        render(<Card text={data.text} value={data.value} icon={data.icon}  />);
        const textValue = screen.getByText("Testing Card text");
        expect(textValue).toBeInTheDocument();
    });

    test('Card should show the correct value writeup', () => {
        render(<Card text={data.text} value={data.value} icon={data.icon} />);
        const value = screen.getByText("Test Value");
        expect(value).toBeInTheDocument();
    });

    test('Card should show the correct icon', () => {
        render(<Card text={data.text} value={data.value} icon={data.icon} />);
        const icon = screen.getByText("Test Icon");
        expect(icon).toBeInTheDocument();
    });
})