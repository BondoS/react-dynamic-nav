import React from 'react';
import { Aside } from '../../components/Aside';
import { Header } from '../../components/Header';
import { HeaderNav } from '../../components/HeaderNav';
import { LeftNav } from '../../components/LeftNav';
import { Main } from '../../components/Main';
import { MidContent } from '../../components/MidContent';

type Props = {};

export const HomePage = ({}: Props) => {
  return (
    <>
      <Aside>
        <LeftNav>left nav</LeftNav>
      </Aside>
      <MidContent>
        <Header>
          <HeaderNav>Header Nav</HeaderNav>
        </Header>
        <Main>Main</Main>
      </MidContent>
    </>
  );
};
