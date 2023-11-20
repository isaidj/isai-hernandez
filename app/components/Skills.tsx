"use client";
import {
  AwsIcon,
  DesktopIcon,
  ElectronIcon,
  ExpoIcon,
  ExpoV2Icon,
  ExpressJsIcon,
  HerokuIcon,
  JavascriptIcon,
  MobileIcon,
  MySqlIcon,
  NetlifyIcon,
  NextJsIcon,
  NodeIcon,
  ReactIcon,
  ReactIconV2,
  StyledComponentsIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
} from "@/assets/Icons";
import Link from "next/link";

import { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
  link: string;
}
const iconClassName = "w-9 h-9 md:w-16 md:h-16";
export const frontEndSkills: Skill[] = [
  {
    name: "ReactJS",
    icon: <ReactIcon className={"fill-sky-500 " + iconClassName} id="react" />,
    link: "https://react.dev/",
  },
  {
    name: "React Native",
    icon: (
      <div className="relative w-9 h-9 md:w-16 md:h-16">
        <ReactIcon
          className={"absolute  fill-sky-700  " + iconClassName}
          id="react-native"
        />
        {/* <ReactIcon
          className="absolute w-9 h-9 fill-sky-500 md:w-16 md:h-16 rotate-6"
          id="react-native"
        /> */}
      </div>
    ),
    link: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: (
      <NextJsIcon
        className={"w-9 h-9 text-white " + iconClassName}
        id="nextjs"
      />
    ),
    link: "https://nextjs.org/",
  },

  {
    name: "Expo",
    icon: (
      <ExpoV2Icon className={"w-9 h-9 fill-white " + iconClassName} id="expo" />
    ),
    link: "https://expo.dev/",
  },
  // {
  //   name: "ElectronJS",
  //   icon: (
  //     <ElectronIcon
  //       className={"fill-teal-300 " + iconClassName}
  //       id="electron"
  //     />
  //   ),
  //   link: "https://www.electronjs.org/",
  // },
  {
    name: "TailwindCSS",
    icon: (
      <TailwindIcon
        className={"fill-cyan-500  " + iconClassName}
        id="tailwind"
      />
    ),
    link: "https://tailwindcss.com/",
  },
  {
    name: "Styled Components",
    icon: (
      <StyledComponentsIcon className={iconClassName} id="styled-components" />
    ),
    link: "https://styled-components.com/",
  },
];
export const backEndSkills: Skill[] = [
  {
    name: "NodeJS",
    icon: <NodeIcon className={" fill-lime-600 " + iconClassName} id="node" />,
    link: "https://nodejs.org/",
  },
  {
    name: "ExpressJS",
    icon: (
      <ExpressJsIcon
        className={" fill-zinc-300 " + iconClassName}
        id="express"
      />
    ),
    link: "https://expressjs.com/",
  },
  {
    name: "MySQL",
    icon: (
      <MySqlIcon className="w-10 h-10 fill-white md:w-16 md:h-16" id="mysql" />
    ),
    link: "https://www.mysql.com/",
  },
];
export const experience: Skill[] = [
  {
    name: "Mobile ✅",
    icon: (
      <div className="relative w-9 h-9 md:w-16 md:h-16">
        <MobileIcon
          className={"absolute  stroke-slate-200 " + iconClassName}
          id="react-native"
        />
        {/* <ReactIcon
          className="absolute w-9 h-9 fill-sky-500 md:w-16 md:h-16 rotate-6"
          id="react-native"
        /> */}
      </div>
    ),
    link: "#",
  },
  {
    name: "Web ✅",
    icon: (
      <DesktopIcon className={"stroke-slate-200  " + iconClassName} id="web" />
    ),
    link: "#",
  },
  {
    name: "Typescript",
    icon: (
      <TypescriptIcon
        className={"fill-white  " + iconClassName}
        id="typescript"
      />
    ),
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <JavascriptIcon className={iconClassName} id="javascript" />,
    link: "https://nodejs.org/",
  },
];
export const cloudSkills: Skill[] = [
  {
    name: "AWS",
    icon: <AwsIcon className={iconClassName} id="aws" />,
    link: "https://aws.amazon.com/",
  },
  {
    name: "Vercel",
    icon: (
      <div className="bg-neutral-950 py-0 px-4 rounded-md">
        <VercelIcon className={"fill-zinc-300 " + iconClassName} id="vercel" />
      </div>
    ),
    link: "https://vercel.com/",
  },
  {
    name: "Heroku",
    icon: <HerokuIcon className={" fill-white " + iconClassName} id="heroku" />,
    link: "https://www.heroku.com/",
  },
  {
    name: "Netlify",
    icon: (
      <NetlifyIcon className={" fill-white " + iconClassName} id="netlify" />
    ),
    link: "https://www.netlify.com/",
  },
];

const Skills = ({ title, skills }: { title: string; skills: Skill[] }) => {
  const animationDelay = 200;
  const initialDelay = 600;
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsHovered(true), initialDelay);
  }, []);

  if (!isHovered) return null;

  return (
    <>
      <h3 className="w-fit text-xl text-zinc-300 text-start animate-appearance-in">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        {skills.map((skill, index) => (
          <Link
            //en una nueva ventana
            href={skill.link}
            target="_blank"
            className="flex flex-col gap-2 items-center animate-appearance-in delay-500 "
            key={skill.name}
            style={{ animationDelay: `${animationDelay * index}ms` }}
          >
            {skill.icon}
            <span className="text-sm text-white">{skill.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Skills;
