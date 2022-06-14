import React, { FC, ReactNode } from "react";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="container">
    <Header />
    {/*<header className="App-header"></header>*/}
    <main>{children}</main>
  </div>
);

export default Layout;
