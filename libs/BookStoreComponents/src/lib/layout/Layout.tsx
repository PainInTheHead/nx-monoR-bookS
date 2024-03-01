import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
  user: string | null
  hangleExit: () => void
}

export function Layout({ children, user, hangleExit }: LayoutProps) {
  return (
    <>
      <Header user={user} />
      <main className="main">{children}</main>
      <Footer hangleExit={hangleExit}/>
    </>
  );
}

export default Layout;