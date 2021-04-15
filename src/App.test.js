import React from 'react';
import { render, screen, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axiosMock from 'axios';
import App from './App';

test('should display a loading text', () => {
  render(<App />);
  const loadingText = screen.getByText('Loading...');
  expect(loadingText).toBeInTheDocument();
});

test('should display the data', async () => {
  act(() => { 
    render(<App />);
  });
  await waitFor(() => expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument());
});
