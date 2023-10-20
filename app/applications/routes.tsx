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
import Puzzle from "../../public/img/puzzle.webp";
import ImageHunt from "../../public/img/imagehunt.webp";
import Landing from "../../public/img/landing.webp";
import logoAuditoria from "../../public/img/logoAuditoria.webp";
import logogscanner from "../../public/img/logogscanner.webp";
import dresons from "../../public/img/dreasons.webp";

export interface routes {
  name: string;
  link: string;
  description?: string;
  tag?: {
    name: "New" | "In development" | "Developed" | "Deprecated";
    color: "bg-green-400" | "bg-red-400" | "bg-yellow-500" | "bg-blue-500";
  };

  video?: string;
  carrusel?: boolean;
  image: StaticImageData | string;
  tools?: React.ReactNode[];
  platforms?: React.ReactNode[];
}
const classNameIcons = "w-7 h-7 md:w-7 md:h-7";
export const routes: routes[] = [
  {
    name: "Nike Punk",
    link: "https://example-product-page.vercel.app/",
    description:
      "In this project, I showcase the use of React, Styled Components, and NextJS to create a product page. I aimed to design it with an aesthetically pleasing and modern style.",

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
    link: "https://imagehunt.vercel.app/",
    description:
      "Image Hunt is a project I created to practice using NextJS, TailwindCSS, and the Unsplash API. In this project, you can search for images and download them, as well as view information about the image and the author.",
    tag: {
      name: "New",
      color: "bg-blue-500",
    },
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
    description:
      "The idea of developing this puzzle game was to practice using matrices and JavaScript functions. It was built using React and TailwindCSS.",

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
    name: "Dreasons",
    link: "#",
    video: "https://tecnofacil.s3.amazonaws.com/dreasonsvideo.mp4",
    description:
      "This application was developed for the fashion company Silvia Tcherassi, allows managing employee absences in a company. It allows employees to request their absences, and administrators can approve or reject them. This application is built with NextJS, Mantine, and Styled Components for the frontend, and NodeJS, Express, and MySQL for the backend.",

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
  {
    name: "Social Quick",
    link: "/applications/socialquick",
    description:
      "It's a landing page that provides quick access to the user's or company's social networks. It's made with React, TailwindCSS, and Styled Components.",
    tag: {
      name: "In development",
      color: "bg-yellow-500",
    },
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
    name: "Auditoria - Web App",
    link: "#",
    description:
      "This application was developed for the fashion company Silvia Tcherassi. It's the new control center for garments, with modules for inventory, auditing, user management, reports, and more. It centralizes garment information and systematizes auditing processes.",
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
    name: "Auditoria - Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.audimovilv2",
    description:
      "This app functions as a complement to the web application, allowing users to conduct garment audits.",

    image: logoAuditoria,
    tools: [<ReactIconV2 key="react-v2" className={classNameIcons} />],
    platforms: [<AndroidIcon key="android" className={classNameIcons} />],
  },
  {
    name: "G-Scanner - Mobile App",
    link: "https://g-scanner-aca2i6mp6-isaidj.vercel.app/",
    image: logogscanner,
    description:
      "This app sends scanned codes to the desktop application (G-Scanner), which inserts the code into the open program. It helps streamline the inventory process but can also be used for any other process that requires scanning barcodes.",

    tools: [
      <div key="expo-icons" className="flex flex-row ">
        <ExpoV2Icon className={" fill-white " + classNameIcons} />
        <ExpoIcon className={" fill-white " + classNameIcons} />
      </div>,
    ],
    platforms: [
      <AndroidIcon key="android" className={classNameIcons} />,
      <AppleIcon key="apple" className={classNameIcons} />,
    ],
  },
  {
    name: "G-Scanner - Desktop App",
    link: "https://g-scanner-aca2i6mp6-isaidj.vercel.app/",
    image: logogscanner,
    description:
      "This application receives scanned codes from the mobile application (G-Scanner) and inserts them into the open program. This application is built with Electron and Python.",
    tag: {
      name: "In development",
      color: "bg-yellow-500",
    },
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
  },
];
