"use client";
import { Breadcrumbs, MenuSecodary } from "@/components/Menus";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <section>
      <MenuSecodary
        routes={[
          { name: "Dashboard", link: "/dashboard" },
          { name: "Puzzle Verse", link: "/dashboard/puzzleverse" },
          { name: "Game 2", link: "/dashboard/game2" },
        ]}
      />
      {/* <Breadcrumbs /> */}
      {children}
    </section>
  );
};

export default DashboardLayout;
