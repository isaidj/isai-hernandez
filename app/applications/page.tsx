"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Puzzle from "../../public/img/puzzle.png";
import ImageHunt from "../../public/img/imagehunt.png";
import Landing from "../../public/img/landing.png";
import logoAuditoria from "../../public/img/logoAuditoria.webp";
import logogscanner from "../../public/img/logogscanner.webp";
import Image, { StaticImageData } from "next/image";
import {
  ElectronIcon,
  ExpoIcon,
  ExpoV2Icon,
  MantineIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  ReactIconV2,
  StyledComponentsIcon,
  TailwindIcon,
} from "@/assets/Icons";
interface routes {
  name: string;
  link: string;
  image: StaticImageData | string;
  carrusel?: boolean;
  tools?: React.ReactNode[];
}
const classNameIcons = "w-5 h-5 md:w-7 md:h-7";
const routes: routes[] = [
  {
    name: "Nike Cyberpunk",
    link: "/applications/product",
    image:
      "screenNikeBLue.webp,screenNikeGreen.webp,screenNikeRed.webp,screenNikeWhite.webp",
    carrusel: true,
    tools: [
      <ReactIcon className={" fill-sky-500 " + classNameIcons} id="react" />,
      <StyledComponentsIcon className={classNameIcons} />,
    ],
  },
  {
    name: "Image Hunt",
    link: "/applications/imagehunt",
    image: ImageHunt,
    carrusel: false,
    tools: [
      <NextJsIcon className={classNameIcons} />,
      <ReactIcon className={" fill-sky-500 " + classNameIcons} id="react" />,
      <TailwindIcon className={classNameIcons} />,
    ],
  },
  {
    name: "Puzzle Verse",
    link: "/applications/puzzleverse",
    image: Puzzle,
    carrusel: false,
    tools: [
      <ReactIcon className={" fill-sky-500 " + classNameIcons} id="react" />,
      <TailwindIcon className={classNameIcons} />,
    ],
  },
  {
    name: "Social Quick",
    link: "/applications/socialquick",
    image: Landing,
    carrusel: false,
    tools: [
      <ReactIcon className={" fill-sky-500 " + classNameIcons} id="react" />,
      <TailwindIcon className={classNameIcons} />,
    ],
  },
  {
    name: "Auditoria - Mobile",
    link: "https://play.google.com/store/apps/details?id=com.audimovilv2",
    image: logoAuditoria,
    carrusel: false,
    tools: [<ReactIconV2 className={classNameIcons} />],
  },
  {
    name: "G-Scanner - Mobile",
    link: "https://play.google.com/store/apps/details?id=com.isaidj.automatescanapp",
    image: logogscanner,
    carrusel: false,
    tools: [
      <div className="flex flex-row ">
        <ExpoV2Icon className={" fill-white " + classNameIcons} />
        <ExpoIcon className={" fill-white " + classNameIcons} />
      </div>,
      <ElectronIcon className={" fill-teal-300 " + classNameIcons} />,
      <PythonIcon className={classNameIcons} />,
    ],
  },
  {
    name: "Auditoria - Web",
    link: "https://play.google.com/store/apps/details?id=com.audimovilv2",
    image: logoAuditoria,
    carrusel: false,
    tools: [
      <ReactIcon className={classNameIcons} />,
      <MantineIcon className={classNameIcons} />,
      <StyledComponentsIcon className={classNameIcons} />,
    ],
  },
];
const urls3images = "https://tecnofacil.s3.amazonaws.com/";
const Page = () => {
  return (
    <div
      id="applications"
      className="flex min-h-screen  flex-col  items-center pt-3 sm:p-24 sm:pt-9 relative bg-gradient-to-r from-black via-gray-900 to-black gap-4"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className=" grid grid-cols-1 flex-col items-end gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8  ">
          {routes.map((route) => (
            <Link href={route.link} key={route.name} className="group">
              <div className="flex items-center aspect-square   w-full h-auto overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {route.carrusel ? (
                  <Carrousell
                    images={
                      typeof route.image === "string"
                        ? route.image.split(",")
                        : [route.image]
                    }
                  />
                ) : (
                  <Image
                    src={route.image}
                    alt={route.name}
                    className="h-80 w-full object-cover aspect-square  group-hover:opacity-75  "
                  />
                )}
              </div>
              {route.tools && (
                <div className="flex flex-row gap-2 mt-2">
                  {route.tools.map((tool) => tool)}
                </div>
              )}
              <h3 className="mt-4 ml-4 text-sm text-gray-500">{route.name}</h3>
              {/* <p className="mt-1 text-lg font-medium text-gray-900">New tab</p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const Carrousell = ({ images }: { images: string[] }) => {
  console.log(images);
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <Image
      src={urls3images + images[current]}
      alt="images"
      className="h-80 w-full object-cover aspect-square  group-hover:opacity-75  "
      width={800}
      height={800}
    />
  );
};
