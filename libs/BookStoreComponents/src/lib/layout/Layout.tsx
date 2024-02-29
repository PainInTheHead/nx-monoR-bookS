import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
