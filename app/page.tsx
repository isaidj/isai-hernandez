import MainMenu from "@/app/components/Menus";
import Link from "next/link";
import { ParticlesTriangle } from "./components/Particles";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col  items-center pt-3 sm:p-24 sm:pt-9 relative bg-gradient-to-r from-black via-gray-900 to-black gap-4">
      <ParticlesTriangle />

      <MainMenu
        routes={[
          { name: "Home", link: "/" },
          { name: "Applications", link: "/applications" },
        ]}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Developer
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <header className="flex flex-row justify-center w-full">
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-sm  text-zinc-500 sm:w-90">
              Greetings, I am{" "}
              <strong className="font-bold">Isaí Hernández</strong>, a Systems
              Engineer. With a great passion for{" "}
              <strong className="font-bold">technology and programming</strong>.
              Eager to design{" "}
              <strong className="font-bold">innovative solutions!</strong>
            </h2>
          </div>
        </header>
      </div>
    </main>
  );
}
