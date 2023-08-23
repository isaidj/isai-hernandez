import Link from "next/link";
import React from "react";
import Puzzle from "../../public/img/puzzle.png";
import ImageHunt from "../../public/img/imagehunt.png";
import Landing from "../../public/img/landing.png";
import Image, { StaticImageData } from "next/image";
interface routes {
  name: string;
  link: string;
  image: StaticImageData;
}
const routes: routes[] = [
  { name: "Image Hunt", link: "/applications/imagehunt", image: ImageHunt },
  { name: "Puzzle Verse", link: "/applications/puzzleverse", image: Puzzle },
  { name: "Social Quick", link: "/applications/socialquick", image: Landing },
];
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
              <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={route.image}
                  alt={route.name}
                  className="h-80 w-80 object-cover object-center group-hover:opacity-75 grid "
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-600">{route.name}</h3>
              {/* <p className="mt-1 text-lg font-medium text-gray-900">New tab</p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
