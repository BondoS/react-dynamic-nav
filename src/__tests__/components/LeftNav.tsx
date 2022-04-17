import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { render } from '../../../test-utils';
import { LeftNav } from '../../components/LeftNav';
import { navListFull } from '../../mockData/navigation';

test('Nav list rendered with multiple items', () => {
  render(<LeftNav navList={navListFull} loading={false} />);
  expect(screen.getAllByTestId('itemHead').length).toBeGreaterThan(1);
});

test('Accessibility', async () => {
  const { container } = render(
    <LeftNav navList={navListFull} loading={false} />
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Nav list rendered in loading state', () => {
  render(<LeftNav navList={navListFull} loading={true} />);
  expect(screen.getByTestId('navListLoading')).toBeVisible();
});

test('Nav list rendered with error visible to the user', () => {
  const errorText = 'Error';
  render(<LeftNav navList={navListFull} loading={false} error={errorText} />);
  const errorElement = screen.getByTestId('navListError');
  expect(errorElement).toBeVisible();
  expect(errorElement).toHaveTextContent(errorText);
});
