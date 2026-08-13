import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
