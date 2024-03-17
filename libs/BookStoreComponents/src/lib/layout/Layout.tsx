import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ReactNode } from 'react';
import { Cart } from '../UI/Card/Cards';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
  user: string | null;
  hangleExit: () => void;
  hangleSetCearch?: (SearchQuery: string) => void;
  totalQuantity: number;
}

export function Layout({
  children,
  user,
  hangleExit,
  hangleSetCearch,
  totalQuantity,
}: LayoutProps) {
  return (
    <>
      <Header
        user={user}
        hangleSetCearch={hangleSetCearch}
        totalQuantity={totalQuantity}
      />
      <main className="main">{children}</main>
      <Footer hangleExit={hangleExit} />
    </>
  );
}

export default Layout;
