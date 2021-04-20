import { render, screen, within, waitFor } from '@testing-library/react';
import mockedAxios from 'axios';

import AppWithAxios from './AppWithAxios';

test('find list elements', async () => {

    mockedAxios.get.mockResolvedValueOnce({ data: [ {source:'Future', quote:'Life is good'} ] });
  render(<AppWithAxios />);

  await waitFor(() => {
    const listUsingAriaLabel = screen.getByRole("list", {name: /books/i});
    const { getAllByRole } = within(listUsingAriaLabel);
    const items = getAllByRole("listitem");
      expect(items.length).toBe(1);
  });
});

