import { NavItem } from '../../store/slices';
import { MemoizedNavItem } from '../NavItem';
import { LeftNavStyled } from './LeftNavStyled';

type Props = {
  navList: NavItem[];
  loading: boolean;
  error?: string | null;
};

export const LeftNav = ({ navList, loading, error = null }: Props) => {
  const recursiveRender = (navItem: NavItem, depth = 1) => {
    const childDepth = depth + 1;
    return (
      <MemoizedNavItem
        id={navItem.id}
        key={navItem.id}
        title={navItem.title}
        depth={depth}
        parent={navItem.children.length > 0}
      >
        {navItem.children.length > 0 ? (
          <ul role='group'>
            {navItem.children.map((navItem) =>
              recursiveRender(navItem, childDepth)
            )}
          </ul>
        ) : null}
      </MemoizedNavItem>
    );
  };
  if (error) return <div data-testid='navListError'>{error}</div>;
  // For better UX, create skeleton dom or shadow effect instead of "Loading..." later
  if (loading) return <div data-testid='navListLoading'>Loading...</div>;
  if (navList.length <= 0) return <div>The Nav list is empty</div>;
  return (
    <LeftNavStyled>
      <ul role='tree' aria-labelledby='Nav-list-tree'>
        {navList.map((item, index) => recursiveRender(item))}
      </ul>
    </LeftNavStyled>
  );
};
