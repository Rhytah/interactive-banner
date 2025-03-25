import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../index';

describe('Banner Component', () => {
  const mockConfig = {
    backgroundColor: '#07263c',
    textColor: '#ffffff',
    title: 'Test Title',
    description: 'Test Description',
    imageUrl: 'https://example.com/test-image.jpg',
    alt:'Banner illustration'
  };

  test('renders banner with all props', () => {
    render(<Banner config={mockConfig} />);
    
    // Check if banner exists
    const banner = screen.getByTestId('banner');
    expect(banner).toBeInTheDocument();
    
    // Check if title is rendered
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(mockConfig.title);
    
    // Check if description is rendered
    const description = screen.getByText(mockConfig.description);
    expect(description).toBeInTheDocument();
    
    // Check if image is rendered
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockConfig.imageUrl);
    expect(image).toHaveAttribute('alt', mockConfig.alt);
  });

  test('applies correct background color', () => {
    render(<Banner config={mockConfig} />);
    const banner = screen.getByTestId('banner');
    expect(banner).toHaveStyle(`background-color: ${mockConfig.backgroundColor}`);
  });

  test('applies correct text color', () => {
    render(<Banner config={mockConfig} />);
    const textContainer = screen.getByText(mockConfig.title).parentElement;
    expect(textContainer).toHaveStyle(`color: ${mockConfig.textColor}`);
  });

  test('renders without image when imageUrl is not provided', () => {
    const configWithoutImage = { ...mockConfig, imageUrl: undefined };
    render(<Banner config={configWithoutImage} />);
    
    // Check that image is not rendered
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
    
    // Check that other content is still rendered
    const title = screen.getByRole('heading', { level: 1 });
    const description = screen.getByText(mockConfig.description);
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
}); 