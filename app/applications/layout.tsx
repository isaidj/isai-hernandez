"use client";
import { Breadcrumbs, MenuSecodary } from "@/app/components/Menus";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <section className=" flex flex-col    w-full min-h-screen">
      <MenuSecodary
        routes={[
          { name: "Applications", link: "/applications" },
          {
            name: "Nike Cyberpunk",
            link: "https://example-product-page.vercel.app/",
          },
          { name: "Image Hunt", link: "https://imagehunt.vercel.app/" },
          { name: "Puzzle Verse", link: "https://puzzleverse.vercel.app/" },
          { name: "Social Quick", link: "/applications/socialquick" },
        ]}
      />
      {/* <Breadcrumbs /> */}
      {children}
    </section>
  );
};

export default DashboardLayout;
