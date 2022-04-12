import { Aside } from '../../containers/Aside/Aside';
import { Header } from '../../components/Header';
import { LeftNav } from '../../containers/LeftNav';
import { Main } from '../../components/Main';
import { MidContent } from '../../components/MidContent';

export const HomePage = () => {
  return (
    <>
      <Aside>
        <LeftNav />
      </Aside>
      <MidContent>
        <Header />
        <Main />
      </MidContent>
    </>
  );
};
