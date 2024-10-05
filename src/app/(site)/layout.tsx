import LayoutSite from "@/components/Layout/LayoutSite";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <LayoutSite>{children}</LayoutSite>
    </div>
  );
};

export default Layout;
