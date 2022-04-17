import { ReactNode, useState } from 'react';
import { Aside as AsideBase } from '../../components/Aside';
import { isExtraSmall } from '../../utils/breakpoints';

type Props = {
  children: ReactNode;
};

export const Aside = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(!isExtraSmall);
  return (
    <AsideBase isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
      {children}
    </AsideBase>
  );
};
