import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Footer from './Footer'; // Adjust the import path if necessary

describe('Footer Component', () => {
  test('renders the footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText('This is Footer Component');
    expect(footerText).toBeInTheDocument();
  });

  test('renders the copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText('Copyright © 2024 React Bootstrap.');
    expect(copyrightText).toBeInTheDocument();
  });
});