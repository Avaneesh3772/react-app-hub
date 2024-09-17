import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Mock router context
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Header from './Header'; // Adjust the import path if necessary

describe('Header Component', () => {
  test('renders the header text', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerText = screen.getByText('This is Header Component');
    expect(headerText).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check for each NavLink by text
    const links = [
      'Home',
      'Account Information',
      'Term Deposit',
      'About',
      'Contact',
      'Job Lists',
      'Mobile Toggle',
    ];

    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });
});