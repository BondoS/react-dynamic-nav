import { waitFor, screen } from '@testing-library/react';
import { render } from '../../../test-utils';
import { HomePage } from '../../pages/HomePage';

jest.mock('../../services/getNavListService', () => {
  return {
    getNavListService: jest.fn().mockImplementation(() =>
      Promise.resolve([
        {
          title: 'Mocked Reporting',
          url: null,
          id: 'menu-reporting',
          icon: 'reporting',
          hasAlert: false,
          children: [],
        },
      ])
    ),
  };
});

test('Calls endpoint and render nav item', async () => {
  const view = render(<HomePage />);
  expect(view).toMatchSnapshot();
  await waitFor(() => {
    expect(screen.getAllByTestId('itemHead').length).toBeGreaterThanOrEqual(1);
  });
});
