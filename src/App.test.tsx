import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './Redux/store';

import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
