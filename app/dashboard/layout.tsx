"use client";
import { Breadcrumbs, MenuSecodary } from "@/components/Menus";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <section className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full min-h-screen">
      <MenuSecodary
        routes={[
          { name: "Puzzle Verse", link: "/dashboard/puzzleverse" },
          { name: "Image Hunt", link: "/dashboard/imagehunt" },
        ]}
      />
      {/* <Breadcrumbs /> */}
      {children}
    </section>
  );
};

export default DashboardLayout;
