import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
