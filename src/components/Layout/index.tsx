import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
