"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "./routes";
import Image, { StaticImageData } from "next/image";
import { ArrowDownIcon } from "@/assets/Icons";

const urls3images = "https://tecnofacil.s3.amazonaws.com/";
const Page = () => {
  return (
    <main
      id="applications"
      className="flex min-h-screen  flex-col   items-center pt-3 sm:px-0 sm:pt-28 relative bg-gradient-to-r from-black via-gray-900 to-black gap-4"
    >
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">Projects</h1>

        <div className="flex flex-row flex-wrap justify-center md:justify-start w-auto  gap-4 gap-y-10">
          {routes.map((route) => (
            <LinkRoute route={route} key={route.name} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;

const LinkRoute = ({ route }: { route: routes }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(!isOpened);
    setTimeout(() => {
      document.getElementById(route.name)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }, 300);
  };
  return (
    <article
      className={`group flex flex-col md:flex-row   ${isOpened && "w-auto"}  `}
      id={route.name}
    >
      <div className="">
        <header>
          <Link
            href={route.link}
            className={
              "relative flex items-center aspect-square w-full h-auto overflow-hidden rounded-lg bg-black xl:aspect-h-8 xl:aspect-w-7" +
              (route.link === "#" ? " cursor-not-allowed" : "")
            }
            aria-disabled={route.link === "#" ? true : false}
          >
            {route.video ? (
              <div className="w-52 h-52 bg-black flex justify-start items-start">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full  bg-black min-h-full min-w-full object-cover"
                >
                  <source src={route.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : route.carrusel ? (
              <Carrousell
                images={
                  typeof route.image === "string"
                    ? route.image.split(",")
                    : [route.image]
                }
                key={route.name}
              />
            ) : (
              <Image
                src={route.image}
                alt={route.name}
                className="h-52 w-full object-cover aspect-square  hover:opacity-90 transition-opacity duration-75 ease-in-out "
              />
            )}
            {route.platforms && (
              <div className="absolute bottom-0 right-0 flex flex-row gap-2 bg-gray-900 bg-opacity-70 px-2 rounded-l-sm">
                {route.platforms.map((platform, index) => (
                  <div key={route.name + index}>{platform}</div>
                ))}
              </div>
            )}
            {route.tag && (
              <div
                className={`absolute  top-0 left-0 flex flex-row gap-2 bg-opacity-90 px-2 rounded-r-sm ${route.tag.color}`}
              >
                <div className="text-base font-semibold text-gray-100">
                  {route.tag.name}
                </div>
              </div>
            )}
          </Link>
        </header>
        <div className="relative" onClick={() => handleOpen()}>
          {route.tools && (
            <div className="flex flex-row gap-2 mt-2">
              {route.tools.map((tool, index) => (
                <div key={route.name + index}>{tool}</div>
              ))}
            </div>
          )}
          <div className="flex flex-row justify-between w-full cursor-pointer select-none">
            <h3 className="mt-4 ml-4 text-base text-gray-500">{route.name}</h3>
            <div className="absolute right-0 top-1/2">
              <ArrowDownIcon
                className={`w-7 h-7   md:w-6 md:h-6  text-gray-500 group-hover:text-gray-400 transition-all duration-200 ${
                  isOpened && "-rotate-90"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <section
        id={route.name}
        className={`flex w-80 m-3 flex-col gap-2  bg-transparent transition-all duration-200 max-w-xs ${
          isOpened ? "w-full" : "hidden"
        } `}
      >
        <h3 className="text-lg font-semibold text-gray-200 md:text-lg">
          {route.name}
        </h3>
        <p className="text-sm text-gray-500">{route.description}</p>
        <div className="flex justify-center mt-4">
          <Link href={route.link}>
            <button
              className={
                "bg-gray-900 hover:bg-gray-800 text-gray-100 px-4 py-2 rounded-md" +
                (route.link === "#" ? " opacity-50 cursor-not-allowed" : "")
              }
              disabled={route.link === "#" ? true : false}
            >
              Preview
            </button>
          </Link>
        </div>
      </section>
    </article>
  );
};
const Carrousell = ({ images }: { images: string[] | StaticImageData[] }) => {
  // console.log(images);
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === length - 1 ? 0 : prevCurrent + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [current, length]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <Image
      src={urls3images + images[current]}
      alt="images"
      className="h-52 w-full object-cover aspect-square hover:opacity-75"
      width={800}
      height={800}
    />
  );
};
