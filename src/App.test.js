import { render, screen } from '@testing-library/react';
import App from './App';

test('AvailableTimes', () => {
  render(<App />);
  const linkElement = screen.getByText("AvailableTimes");
  expect(linkElement).toBeInTheDocument();

});