import React from "react";
import NavBar from "../../components/common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;
