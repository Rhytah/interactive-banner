import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('renders banner and form', () => {
    render(<App />);
    const bannerElement = screen.getByTestId('banner');
    const formElement = screen.getByTestId('banner-form');
    
    expect(bannerElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  });

  test('changes banner title when form input changes', () => {
    render(<App />);
    
    // Find the title input and change its value
    const titleInput = screen.getByTestId('title-input');
    userEvent.clear(titleInput);
    userEvent.type(titleInput, 'New Banner Title');
    
    // Check if the banner title has updated
    const bannerTitle = screen.getByRole('heading', { level: 1 });
    expect(bannerTitle).toHaveTextContent('New Banner Title');
  });

  test('changes banner background color when color input changes', async () => {
    render(<App />);
    
    // Find the background color input and change its value
    const colorInput = screen.getByTestId('background-color-input');
    userEvent.clear(colorInput);
    userEvent.type(colorInput, '#ff0000');
    
    // Check if the banner background color has updated
    const banner = screen.getByTestId('banner');
    expect(banner).toHaveStyle('background-color: #ff0000');
  });
});