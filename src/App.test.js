import { render, screen, within } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing Done Right/i);
  expect(linkElement).toBeInTheDocument();
});

test('find list elements', () => {

  render(<App />);

  const listByText = screen.getByText(/Harry POTter/i);
  expect(listByText.textContent).toBe("Harry potter");

  // const list = screen.getByRole("list");
  // const { getAllByRole } = within(list);
  // const items = getAllByRole("listitem")
  // expect(items.length).toBe(3);

  const listUsingAriaLabel = screen.getByRole("list", {name: /books/i});
  const { getAllByRole } = within(listUsingAriaLabel);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(3);

});

test('find list elements', () => {

  render(<App />);

  // const listByText = screen.getByText(/1/i);
  // expect(listByText).toBeInTheDocument();
  // expect(listByText.textContent).toBe("1");

  // const list = screen.getByRole("list");
  // const { getAllByRole } = within(list);
  // const items = getAllByRole("listitem")
  // expect(items.length).toBe(3);

  const listUsingAriaLabel = screen.getByRole("list", {name: /books/i});
  const { getAllByRole } = within(listUsingAriaLabel);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(3);

});