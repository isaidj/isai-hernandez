import { StaticImageData } from "next/image";
import {
  AndroidIcon,
  AppleIcon,
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
import Puzzle from "../../public/img/puzzle.png";
import ImageHunt from "../../public/img/imagehunt.png";
import Landing from "../../public/img/landing.png";
import logoAuditoria from "../../public/img/logoAuditoria.webp";
import logogscanner from "../../public/img/logogscanner.webp";
import dresons from "../../public/img/dreasons.webp";

export interface routes {
  name: string;
  link: string;
  description?: string;
  video?: string;
  carrusel?: boolean;
  image: StaticImageData | string;
  tools?: React.ReactNode[];
  platforms?: React.ReactNode[];
}
const classNameIcons = "w-7 h-7 md:w-7 md:h-7";
export const routes: routes[] = [
  {
    name: "Nike Cyberpunk",
    link: "/applications/product",
    description:
      "This project was made with React, Styled Components, and Tailwind CSS. It is a landing page for a Nike Cyberpunk shoe.",
    image:
      "screenNikeBLue.webp,screenNikeGreen.webp,screenNikeRed.webp,screenNikeWhite.webp",
    carrusel: true,
    tools: [
      <ReactIcon
        key="react"
        className={" fill-sky-500 " + classNameIcons}
        id="react"
      />,
      <StyledComponentsIcon
        key="styled-components"
        className={classNameIcons}
      />,
    ],
  },
  {
    name: "Image Hunt",
    link: "/applications/imagehunt",
    description:
      "This project is a platform to search images, it was made with NextJS, Tailwind CSS, and React.",
    image: ImageHunt,
    tools: [
      <NextJsIcon key="next-js" className={classNameIcons} />,
      <ReactIcon
        key="react"
        className={" fill-sky-500 " + classNameIcons}
        id="react"
      />,
      <TailwindIcon key="tailwind" className={classNameIcons} />,
    ],
  },
  {
    name: "Puzzle Verse",
    link: "/applications/puzzleverse",
    image: Puzzle,
    tools: [
      <ReactIcon
        key="react"
        className={" fill-sky-500 " + classNameIcons}
        id="react"
      />,
      <TailwindIcon key="tailwind" className={classNameIcons} />,
    ],
  },
  {
    name: "Social Quick",
    link: "/applications/socialquick",
    image: Landing,
    tools: [
      <ReactIcon
        key="react"
        className={" fill-sky-500 " + classNameIcons}
        id="react"
      />,
      <TailwindIcon key="tailwind" className={classNameIcons} />,
    ],
  },
  {
    name: "Auditoria - Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.audimovilv2",
    image: logoAuditoria,
    tools: [<ReactIconV2 key="react-v2" className={classNameIcons} />],
    platforms: [<AndroidIcon key="android" className={classNameIcons} />],
  },
  {
    name: "Auditoria - Web",
    link: "https://play.google.com/store/apps/details?id=com.audimovilv2",
    image: logoAuditoria,
    tools: [
      <ReactIcon key="react" className={classNameIcons} />,
      <MantineIcon key="mantine" className={classNameIcons} />,
      <StyledComponentsIcon
        key="styled-components"
        className={classNameIcons}
      />,
    ],
  },
  {
    name: "G-Scanner - Mobile App",
    link: "https://g-scanner-aca2i6mp6-isaidj.vercel.app/",
    image: logogscanner,
    tools: [
      <div key="expo-icons" className="flex flex-row ">
        <ExpoV2Icon className={" fill-white " + classNameIcons} />
        <ExpoIcon className={" fill-white " + classNameIcons} />
      </div>,
      <ElectronIcon
        key="electron"
        className={" fill-teal-300 " + classNameIcons}
      />,
      <PythonIcon key="python" className={classNameIcons} />,
    ],
    platforms: [
      <AndroidIcon key="android" className={classNameIcons} />,
      <AppleIcon key="apple" className={classNameIcons} />,
    ],
  },
  {
    name: "Dreasons",
    link: "https://dreasons.com/",
    video: "https://tecnofacil.s3.amazonaws.com/dreasonsvideo.mp4",
    image: dresons,
    tools: [
      <NextJsIcon key="next-js" className={classNameIcons} />,
      <StyledComponentsIcon
        key="styled-components"
        className={classNameIcons}
      />,
      <MantineIcon key="mantine" className={classNameIcons} />,
    ],
  },
];
