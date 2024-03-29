import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ReactNode } from 'react';
import { Cart } from '../UI/Card/Cards';
import { CenteredContainer } from './Layout.styled';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
  user: string | null;
  hangleExit: () => void;
  hangleSetCearch?: (SearchQuery: string) => void;
  totalQuantity: number;
  likedCount: number
}

export function Layout({
  children,
  user,
  hangleExit,
  hangleSetCearch,
  totalQuantity,
  likedCount
}: LayoutProps) {
  return (
    <CenteredContainer>
      <Header
        user={user}
        hangleSetCearch={hangleSetCearch}
        totalQuantity={totalQuantity}
        likedCount={likedCount}
      />
      <main className="main">{children}</main>
      <Footer hangleExit={hangleExit} />
    </CenteredContainer>
  );
}

export default Layout;
