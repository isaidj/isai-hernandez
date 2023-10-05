"use client";
import {
  AwsIcon,
  ElectronIcon,
  HerokuIcon,
  MySqlIcon,
  NetlifyIcon,
  NextJsIcon,
  NodeIcon,
  ReactIcon,
  ReactIconV2,
  StyledComponentsIcon,
  TailwindIcon,
  VercelIcon,
} from "@/assets/Icons";

import { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
}
export const frontEndSkills: Skill[] = [
  {
    name: "ReactJS",
    icon: (
      <ReactIcon className="w-9 h-9 fill-sky-500 md:w-16 md:h-16" id="react" />
    ),
  },
  {
    name: "NextJS",
    icon: (
      <NextJsIcon className="w-9 h-9 text-white md:w-16 md:h-16" id="nextjs" />
    ),
  },
  {
    name: "ElectronJS",
    icon: (
      <ElectronIcon
        className="w-9 h-9 fill-teal-300 md:w-16 md:h-16"
        id="electron"
      />
    ),
  },
  {
    name: "React Native",
    icon: (
      <div className="relative w-9 h-9 md:w-16 md:h-16">
        <ReactIcon
          className="absolute w-9 h-9 fill-sky-900 md:w-16 md:h-16"
          id="react-native"
        />
        <ReactIcon
          className="absolute w-9 h-9 fill-sky-500 md:w-16 md:h-16 rotate-6"
          id="react-native"
        />
      </div>
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <TailwindIcon
        className="w-9 h-9 text-white md:w-16 md:h-16"
        id="tailwind"
      />
    ),
  },
  {
    name: "Styled Components",
    icon: (
      <StyledComponentsIcon
        className="w-9 h-9 text-white md:w-16 md:h-16"
        id="styled-components"
      />
    ),
  },
];
export const backEndSkills: Skill[] = [
  {
    name: "NodeJS",
    icon: (
      <NodeIcon className="w-9 h-9 fill-lime-600 md:w-16 md:h-16" id="node" />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <MySqlIcon className="w-10 h-10 fill-white md:w-16 md:h-16" id="mysql" />
    ),
  },
];
export const cloudSkills: Skill[] = [
  {
    name: "AWS",
    icon: (
      <AwsIcon className="w-9 h-9 fill-yellow-400 md:w-16 md:h-16" id="aws" />
    ),
  },
  {
    name: "Vercel",
    icon: (
      <div className="bg-neutral-950 py-0 px-4 rounded-md">
        <VercelIcon
          className="w-9 h-9 fill-zinc-300 md:w-16 md:h-16"
          id="vercel"
        />
      </div>
    ),
  },
  {
    name: "Heroku",
    icon: (
      <HerokuIcon className="w-9 h-9 fill-white md:w-16 md:h-16" id="heroku" />
    ),
  },
  {
    name: "Netlify",
    icon: (
      <NetlifyIcon
        className="w-9 h-9 fill-white md:w-16 md:h-16"
        id="netlify"
      />
    ),
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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:hover:animate-pulse">
        {skills.map((skill, index) => (
          <div
            className="flex flex-col gap-2 items-center animate-appearance-in delay-500 "
            key={skill.name}
            style={{ animationDelay: `${animationDelay * index}ms` }}
          >
            {skill.icon}
            <span className="text-sm text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
