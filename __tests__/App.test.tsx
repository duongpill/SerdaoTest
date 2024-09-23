/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import {describe, expect, it, jest, test} from '@jest/globals';

import { render, waitFor } from '@testing-library/react-native';

test('renders correctly', async () => {
  const app = render(<App/>);
  await waitFor(() => {
    expect(app).toMatchSnapshot();
  });
});