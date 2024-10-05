"use client";
import React, { ReactNode } from "react";
import Header from "./Header/Header";
interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: React.FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default LayoutSite;
