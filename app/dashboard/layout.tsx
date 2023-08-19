"use client";
import { Breadcrumbs, MenuSecodary } from "@/components/Menus";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <section className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <MenuSecodary
        routes={[
          { name: "Dashboard", link: "/dashboard" },
          { name: "Puzzle Verse", link: "/dashboard/puzzleverse" },
          { name: "Neo Pixel", link: "/dashboard/neopixel" },
        ]}
      />
      {/* <Breadcrumbs /> */}
      {children}
    </section>
  );
};

export default DashboardLayout;
