import { LeftNav as LeftNavBase } from '../../components/LeftNav';
import { useAppSelector } from '../../store/hooks';
import { memoizedNavListSelector } from '../../store/selectors';

export const LeftNav = () => {
  const navList = useAppSelector(memoizedNavListSelector);
  return <LeftNavBase navList={navList}>LeftNav</LeftNavBase>;
};
