import MainMenu from "@/app/components/Menus";

import dynamic from "next/dynamic"; // Importa la función dynamic
import { SocialMedia } from "./components/SocialMedia";
import Skills, {
  backEndSkills,
  cloudSkills,
  frontEndSkills,
} from "./components/Skills";
import { DownIcon } from "@/assets/Icons";

import HiddenElementScroll from "./components/HiddenElementScroll";

const ParticlesTriangle = dynamic(() => import("./components/Particles"), {
  ssr: false, // Deshabilita el rendimiento del lado del servidor (Server-Side Rendering)
});
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col  items-center pt-3 sm:p-24 sm:py-0 relative bg-gradient-to-r from-black via-gray-900 to-black gap-4 overflow-y-scroll scrollbar-visible">
      {/* <MousePositionComponent /> */}
      <ParticlesTriangle />

      <MainMenu routes={[{ name: "Applications", link: "/applications" }]} />

      <div
        className=" w-full flex flex-col items-center justify-between min-h-[calc(100vh-7rem)]  z-10"
        id="home"
      >
        <div className="flex flex-col items-center justify-center pt-9">
          <div className=" w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <h1 className="z-10 text-6xl text-transparent  bg-zinc-100 cursor-default text-edge-outline animate-title font-display  sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            Developer
          </h1>

          <div className=" w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <header className="flex flex-row justify-center w-full">
            <div className="my-16 text-center animate-subTitle">
              <h2 className="text-sm  text-zinc-500 sm:w-90">
                Greetings, I am{" "}
                <strong className="font-bold">Isaí Hernández</strong>, a Systems
                Engineer. With a great passion for{" "}
                <strong className="font-bold">
                  technology and programming
                </strong>
                . Eager to design{" "}
                <strong className="font-bold">innovative solutions!</strong>
              </h2>
            </div>
          </header>
          <div
            className=" opacity-0 w-screen h-px animate-glow md:block animate-fade-right-stay   bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
            style={{ animationDelay: "1600ms" }}
          />
          <SocialMedia />
        </div>

        <div id="skills-1" className="w-full">
          {/* <h3 className="text-2xl text-white text-start">Skills</h3> */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div
              id="front-end-container"
              className="flex flex-col w-full gap-4 mt-4 md:w-1/2"
            >
              <Skills skills={frontEndSkills} title="Front-end" />
            </div>
            <div
              id="back-end-container"
              className="flex flex-col w-full gap-4 mt-4 md:w-1/2"
            >
              <Skills skills={backEndSkills} title="Back-end" />
            </div>
          </div>
        </div>
        <HiddenElementScroll offset={100}>
          <DownIcon
            svgProps={{
              className: "w-10 h-10 flex-none hidden md:flex",
            }}
            pathPropsV1={{ fill: "none" }}
            pathPropsV2={{ stroke: "rgba(207, 207, 207, 0.603)" }}
          />
        </HiddenElementScroll>
      </div>
      <div id="skills-2" className="w-full">
        <div className="flex flex-col gap-4 md:flex-row">
          <div
            id="cloud-container"
            className="flex flex-col w-full gap-4 mt-4 md:w-1/2"
          >
            <Skills skills={cloudSkills} title="Cloud" />
          </div>
          <div
            id="other-container"
            className="flex flex-col w-full gap-4 mt-4 md:w-1/2"
          >
            <Skills skills={[]} title="Other" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-4">
        <h2 className="text-sm text-center text-zinc-300">
          Made with ❤️ by Isaí Hernández
        </h2>
        <h2 className="text-sm text-center text-zinc-300">
          © 2023 All rights reserved
        </h2>
      </div>
    </main>
  );
}
