"use client";
import { Breadcrumbs, MenuSecodary } from "@/app/components/Menus";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <section className=" flex flex-col   w-full min-h-screen">
      <MenuSecodary
        routes={[
          { name: "Applications", link: "/applications" },
          { name: "Nike Cyberpunk", link: "/applications/product" },
          { name: "Image Hunt", link: "/applications/imagehunt" },
          { name: "Puzzle Verse", link: "/applications/puzzleverse" },
          { name: "Social Quick", link: "/applications/socialquick" },
        ]}
      />
      {/* <Breadcrumbs /> */}
      {children}
    </section>
  );
};

export default DashboardLayout;
