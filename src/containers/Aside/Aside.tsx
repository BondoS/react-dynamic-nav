import { ReactNode, useState } from 'react';
import { Aside as AsideBase } from '../../components/Aside';

type Props = {
  children: ReactNode;
};

export const Aside = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(
    window.innerWidth >= 480
  );
  return (
    <AsideBase isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
      {children}
    </AsideBase>
  );
};
