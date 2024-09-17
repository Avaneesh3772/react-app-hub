import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccountBalance from './AccountBalance';

// Mock the global fetch function
global.fetch = jest.fn();

describe('AccountBalance Component', () => {
  const mockData = [
    { id: 1, name: 'John Doe', username: 'johnd', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', username: 'janes', email: 'jane@example.com' },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the component title', () => {
    render(<AccountBalance />);
    expect(screen.getByText('This is AccountBalance Component')).toBeInTheDocument();
  });

  it('renders loading state initially', () => {
    render(<AccountBalance />);
    expect(screen.getByText('This is AccountBalance Component')).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('fetches and displays data correctly', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<AccountBalance />);

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('johnd')).toBeInTheDocument();
    expect(screen.getByText('janes')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('handles error when fetching data', async () => {
    console.error = jest.fn(); // Mock console.error
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<AccountBalance />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching data:', expect.any(Error));
    });

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});