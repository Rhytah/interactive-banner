import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BannerForm from '../index';

describe('BannerForm Component', () => {
  const mockConfig = {
    backgroundColor: '#07263c',
    textColor: '#ffffff',
    title: 'Test Title',
    description: 'Test Description',
    imageUrl: 'https://example.com/test-image.jpg'
  };

  const mockOnConfigChange = jest.fn();

  beforeEach(() => {
    mockOnConfigChange.mockClear();
  });

  test('renders form with all inputs', () => {
    render(<BannerForm config={mockConfig} onConfigChange={mockOnConfigChange} />);
    
    // Check if all form inputs are rendered
    expect(screen.getByLabelText(/background color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/text color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/image url/i)).toBeInTheDocument();
  });

  test('displays current config values in inputs', () => {
    render(<BannerForm config={mockConfig} onConfigChange={mockOnConfigChange} />);
    
    expect(screen.getByLabelText(/background color/i)).toHaveValue(mockConfig.backgroundColor);
    expect(screen.getByLabelText(/text color/i)).toHaveValue(mockConfig.textColor);
    expect(screen.getByLabelText(/title/i)).toHaveValue(mockConfig.title);
    expect(screen.getByLabelText(/description/i)).toHaveValue(mockConfig.description);
    expect(screen.getByLabelText(/image url/i)).toHaveValue(mockConfig.imageUrl);
  });

  test('calls onConfigChange when inputs change', () => {
    render(<BannerForm config={mockConfig} onConfigChange={mockOnConfigChange} />);
    
    // Change title
    const titleInput = screen.getByLabelText(/title/i);
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    expect(mockOnConfigChange).toHaveBeenCalledWith({ title: 'New Title' });

    // Change background color
    const bgColorInput = screen.getByLabelText(/background color/i);
    fireEvent.change(bgColorInput, { target: { value: '#ff0000' } });
    expect(mockOnConfigChange).toHaveBeenCalledWith({ backgroundColor: '#ff0000' });

    // Change text color
    const textColorInput = screen.getByLabelText(/text color/i);
    fireEvent.change(textColorInput, { target: { value: '#000000' } });
    expect(mockOnConfigChange).toHaveBeenCalledWith({ textColor: '#000000' });
  });

  test('handles empty image URL', () => {
    render(<BannerForm config={mockConfig} onConfigChange={mockOnConfigChange} />);
    
    const imageUrlInput = screen.getByLabelText(/image url/i);
    fireEvent.change(imageUrlInput, { target: { value: '' } });
    expect(mockOnConfigChange).toHaveBeenCalledWith({ imageUrl: '' });
  });

  test('handles color input changes', () => {
    render(<BannerForm config={mockConfig} onConfigChange={mockOnConfigChange} />);
    
    const bgColorInput = screen.getByLabelText(/background color/i);
    fireEvent.change(bgColorInput, { target: { value: '#000000' } });
    expect(mockOnConfigChange).toHaveBeenCalledWith({ backgroundColor: '#000000' });
  });
}); 