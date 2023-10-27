import { StaticImageData } from "next/image";
import {
  AndroidIcon,
  AppleIcon,
  ElectronIcon,
  ExpoIcon,
  ExpoV2Icon,
  JavascriptIcon,
  MantineIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  ReactIconV2,
  StyledComponentsIcon,
  TailwindIcon,
  TypescriptIcon,
  ViteIcon,
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
// Common tools to be reused in  diferent projects
type CommonToolsKey =
  | "react"
  | "reactNative"
  | "vite"
  | "styledComponents"
  | "nextJs"
  | "tailwind"
  | "expo"
  | "mantine"
  | "electron"
  | "python"
  | "typescript"
  | "javascript";

interface CommonTool {
  key: string;
  href: string;
  icon: React.ReactNode;
}

type CommonTools = Record<CommonToolsKey, CommonTool>;

const commonTools: CommonTools = {
  react: {
    key: "react",
    href: "https://reactjs.org/",
    icon: <ReactIcon className={"fill-sky-500 " + classNameIcons} id="react" />,
  },
  reactNative: {
    key: "react-native",
    href: "https://reactnative.dev/",
    icon: <ReactIconV2 className={classNameIcons} id="react" />,
  },
  vite: {
    key: "vite",
    href: "https://vitejs.dev/",
    icon: <ViteIcon className={classNameIcons} />,
  },
  styledComponents: {
    key: "styled-components",
    href: "https://styled-components.com/",
    icon: <StyledComponentsIcon className={classNameIcons} />,
  },
  nextJs: {
    key: "next-js",
    href: "https://nextjs.org/",
    icon: <NextJsIcon className={classNameIcons} />,
  },
  tailwind: {
    key: "tailwind",
    href: "https://tailwindcss.com/",
    icon: <TailwindIcon className={classNameIcons} />,
  },
  expo: {
    key: "expo",
    href: "https://expo.dev/",
    icon: (
      <div key="expo-icons" className="flex flex-row ">
        <ExpoV2Icon className={" fill-white " + classNameIcons} />
        <ExpoIcon className={" fill-white " + classNameIcons} />
      </div>
    ),
  },
  mantine: {
    key: "mantine",
    href: "https://mantine.dev/",
    icon: <MantineIcon className={classNameIcons} />,
  },
  electron: {
    key: "electron",
    href: "https://www.electronjs.org/",
    icon: <ElectronIcon className={classNameIcons} />,
  },
  python: {
    key: "python",
    href: "https://www.python.org/",
    icon: <PythonIcon className={classNameIcons} />,
  },
  typescript: {
    key: "typescript",
    href: "https://www.typescriptlang.org/",
    icon: <TypescriptIcon className={classNameIcons} />,
  },
  javascript: {
    key: "javascript",
    href: "https://www.javascript.com/",
    icon: <JavascriptIcon className={classNameIcons} />,
  },
};
const link = (commonTool: CommonTool) => (
  <a key={commonTool.key} href={commonTool.href} target="_blank">
    {commonTool.icon}
  </a>
);

export const routes: routes[] = [
  {
    name: "Nike Punk",
    link: "https://example-product-page.vercel.app/",
    description:
      "In this project, I showcase the use of React, Styled Components to create a product page. I aimed to design it with an aesthetically pleasing and modern style.",

    image:
      "screenNikeBLue.webp,screenNikeGreen.webp,screenNikeRed.webp,screenNikeWhite.webp",
    carrusel: true,
    tools: [
      link(commonTools.typescript),
      link(commonTools.react),
      link(commonTools.vite),
      link(commonTools.styledComponents),
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
      link(commonTools.typescript),
      link(commonTools.nextJs),
      link(commonTools.react),
      link(commonTools.tailwind),
    ],
  },
  {
    name: "Puzzle Verse",
    link: "https://puzzleverse.vercel.app/",
    description:
      "The idea of developing this puzzle game was to practice using matrices and JavaScript functions. It was built using React and TailwindCSS.",

    image: Puzzle,
    tools: [link(commonTools.react), link(commonTools.tailwind)],
  },
  {
    name: "Dreasons",
    link: "#",
    video: "https://tecnofacil.s3.amazonaws.com/dreasonsvideo.mp4",
    description:
      "This application was developed for the fashion company Silvia Tcherassi, allows managing employee absences in a company. It allows employees to request their absences, and administrators can approve or reject them. This application is built with NextJS, Mantine, and Styled Components for the frontend, and NodeJS, Express, and MySQL for the backend.",

    image: dresons,
    tools: [
      link(commonTools.nextJs),
      link(commonTools.styledComponents),
      link(commonTools.mantine),
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
    tools: [link(commonTools.react), link(commonTools.tailwind)],
  },
  {
    name: "Auditoria - Web App",
    link: "#",
    description:
      "This application was developed for the fashion company Silvia Tcherassi. It's the new control center for garments, with modules for inventory, auditing, user management, reports, and more. It centralizes garment information and systematizes auditing processes.",
    image: logoAuditoria,
    tools: [
      link(commonTools.react),
      link(commonTools.mantine),
      link(commonTools.styledComponents),
    ],
  },
  {
    name: "Auditoria - Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.audimovilv2",
    description:
      "This app functions as a complement to the web application, allowing users to conduct garment audits.",

    image: logoAuditoria,
    tools: [link(commonTools.reactNative)],
    platforms: [<AndroidIcon key="android" className={classNameIcons} />],
  },
  {
    name: "G-Scanner - Mobile App",
    link: "https://g-scanner-aca2i6mp6-isaidj.vercel.app/",
    image: logogscanner,
    description:
      "This app sends scanned codes to the desktop application (G-Scanner), which inserts the code into the open program. It helps streamline the inventory process but can also be used for any other process that requires scanning barcodes.",

    tools: [link(commonTools.expo)],
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
      link(commonTools.expo),
      link(commonTools.electron),
      link(commonTools.python),
    ],
  },
];
