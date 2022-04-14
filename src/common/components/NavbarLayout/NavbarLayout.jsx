import React from "react";
import Navbar from "../Navbar/Navbar";

// eslint-disable-next-line react/prop-types
function NavbarLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default NavbarLayout;
