import { LeftNav as LeftNavBase } from '../../components/LeftNav';
import { useAppSelector } from '../../store/hooks';
import {
  memoizedNavListErrorSelector,
  memoizedNavListLoadingSelector,
  memoizedNavListSelector,
} from '../../store/selectors';

export const LeftNav = () => {
  const navList = useAppSelector(memoizedNavListSelector);
  const loading = useAppSelector(memoizedNavListLoadingSelector);
  const error = useAppSelector(memoizedNavListErrorSelector);
  return <LeftNavBase navList={navList} loading={loading} error={error} />;
};
