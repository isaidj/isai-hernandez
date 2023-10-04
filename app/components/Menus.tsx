"use client";
import Image from "next/image";
import Logodev from "../../public/logodev.png";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MousePositionComponent } from "./MousePotionElement";
import { BackIcon, DevIcon } from "@/assets/Icons";

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
      key={index}
      href={item.link}
      className={
        " ml-3 hover:text-blue-500" +
        (item.link !== "/"
          ? pathname.includes(item.link)
            ? " text-blue-500"
            : ""
          : "")
      }
      onClick={() => setIsMenuOpen(false)}
    >
      {item.name}
    </Link>
  ));

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      // isBlurred={true}
      className=" mt-9 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-700 h-12 w-full sm:w-9/12 z-10"

      // isBordered
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        /> */}
        <NavbarBrand>
          <NavbarItem className="absolute flex flex-row items-center">
            <DevIcon className="w-10 h-10 text-white" fill="white" />
            <div className="ml-2 text-zinc-300  flex flex-col ">Isaí H </div>
          </NavbarItem>
        </NavbarBrand>
        <NavbarItem className=" flex flex-row items-center justify-end gap-2 font-light text-zinc-200 w-full z-10  sm:justify-center">
          {menu}
        </NavbarItem>

        {/* <NavbarMenu>{menu}</NavbarMenu> */}
      </NavbarContent>
    </Navbar>
  );
};
export default MainMenu;

export const MenuSecodary = ({ routes }: { routes: routes[] }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const lastPath = usePathname().split("/").pop();
  console.log(lastPath);

  const menu = routes.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      className={
        lastPath === item.link.split("/").pop()
          ? "text-amber-400 text-sm"
          : "text-zinc-300 text-sm hover:text-white"
      }
      // style={
      //   lastPath === item.link.split("/").pop() ? { color: "#fbbf24" } : {}
      // }
    >
      {item.name}
    </Link>
  ));
  return (
    <Navbar
      isBordered
      className="relative flex rounded-lg w-5/6 p-0 z-10 h-8 self-center"
    >
      <Link href="/" className="h-full">
        <BackIcon className=" absolute fill-zinc-300 w-6 h-full ml-2 hover:fill-amber-400 cursor-pointer" />
      </Link>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-white h-14 self-center"
      />
      <NavbarContent className="hidden text-white  w-full p-0 m-0  sm:flex ">
        <NavbarItem
          className="hidden sm:flex flex-row items-center justify-center gap-4 w-full 
        "
        >
          {menu}
        </NavbarItem>

        <NavbarMenu>{menu}</NavbarMenu>
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
        <Link href="/applications">applications</Link>
      </div>
    </div>
  );
};

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
