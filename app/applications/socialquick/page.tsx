import React from "react";
import album from "@/public/img/album.webp";
import Image from "next/image";
import Link from "next/link";
import { TiktokIcon } from "@/assets/Icons";
//un landing page de acceso con links a las redes sociales, tiene una foto principal

const SocialQuickPage = () => {
  return (
    <div className="flex flex-col items-center  h-screen bg-gradient-to-tr from-emerald-400  to-red-600">
      <div className="flex flex-col items-center justify-center">
        <div
          id="album"
          className="w-64 h-64 shadow-2xl drop-shadow-2xl mt-20 radius-2xl overflow-hidden rounded-lg"
        >
          <Image src={album} alt="album" className="object-cover " />
        </div>
        <div id="social" className="flex flex-row gap-4 mt-4">
          <Link id="Tiktok" href="#">
            <button
              id="tiktok_btn"
              className="bg-zinc-900 rounded-2xl p-2 flex w-full"
            >
              <h2 className="text-white">
                <TiktokIcon className="w-8 h-8 text-white" />
                Tiktok
              </h2>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialQuickPage;
