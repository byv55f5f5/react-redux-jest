import React from 'react';

import { fireEvent, getByRole, render, screen } from '../test-utils';

import App from '../App';

test('dispatch testing', async () => {
  render(<App />);

  const button = screen.getByRole('button', 'Get User');
  fireEvent.click(button);

  const usernameDiv = await screen.findByText('John Smith');

  expect(usernameDiv).toBeInTheDocument();
});
