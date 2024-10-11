import React from "react";
import { Header } from "../tiles/header";
import Footer from "../tiles/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="top-40"></div>
      <main>{children}</main>
      <div className="top-40"></div>
      <Footer />
    </div>
  );
}
export default Layout;
