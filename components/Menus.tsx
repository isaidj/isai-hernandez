"use client";
import Image from "next/image";
import Logodev from "../public/logodev.png";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

//create inteface of routes
interface routes {
  name: string;
  link: string;
}

export const MainMenu = ({ routes }: { routes: routes[] }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menu = routes.map((item, index) => (
    <Link
      href={item.link}
      key={index}
      className={
        item.link !== "/"
          ? pathname.includes(item.link)
            ? "text-blue-500"
            : ""
          : ""
      }
    >
      {item.name}
    </Link>
  ));
  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className=" bg-indigo-600 m-0 p-0"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavbarItem className="flex flex-row items-center">
            <Image alt="logo" src={Logodev} width={50} />
            <div className="ml-2 text-white font-mono flex flex-col">
              ISAIDEV343<span className="text-xs">v1.0.0</span>
            </div>
          </NavbarItem>
        </NavbarBrand>
        <NavbarItem
          className="hidden sm:flex flex-row items-center  gap-2 font-bold 
        "
        >
          {menu}
        </NavbarItem>

        <NavbarMenu>
          <NavbarMenuItem>{menu}</NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};
export default MainMenu;

export const MenuSecodary = ({ routes }: { routes: routes[] }) => {
  const pathname = usePathname();
  const menu = routes.map((item, index) => (
    <Link
      href={item.link}
      key={index}
      className={pathname === item.link ? "text-blue-500" : ""}
    >
      {item.name}
    </Link>
  ));
  return (
    <Navbar isBordered maxWidth="full" className=" bg-gray-800 m-0 p-0">
      <NavbarContent className=" text-white font-bold w-full p-0 m-0 ">
        <NavbarItem
          className="hidden sm:flex flex-row items-center justify-center gap-2 w-full 
        "
        >
          {menu}
        </NavbarItem>
        {/* <NavbarMenuToggle /> */}
        <NavbarMenu>
          <NavbarMenuItem>{menu}</NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};

export const Bradcrumb = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row items-center">
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
interface Breadcrumb {
  breadcrumb: string;
  href: string;
}
const convertBreadcrumb = (string: string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | null>(null);

  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [pathname]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="flex flex-row items-center">
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <div className="flex flex-row items-center" key={i}>
              <li key={breadcrumb.href}>
                <Link href={breadcrumb.href}>
                  {convertBreadcrumb(breadcrumb.breadcrumb)}
                </Link>
              </li>
              {i < breadcrumbs.length - 1 && " > "}
            </div>
          );
        })}
      </ol>
    </nav>
  );
};
