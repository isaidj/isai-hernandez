"use client";
import { Breadcrumbs, MenuSecodary } from "@/app/components/Menus";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <section className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full min-h-screen">
      <MenuSecodary
        routes={[
          { name: "Applications", link: "/applications" },
          { name: "Image Hunt", link: "/applications/imagehunt" },
          { name: "Puzzle Verse", link: "/applications/puzzleverse" },
        ]}
      />
      {/* <Breadcrumbs /> */}
      {children}
    </section>
  );
};

export default DashboardLayout;
