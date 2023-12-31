"use client";
import { GithubIcon, GithubIconV2, LinkedinIcon } from "@/assets/Icons";
import Link from "next/link";
import React, { useState } from "react";

interface SocialLinkProps {
  id: string;
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ id, href, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      id={id}
      href={href}
      className="w-9 h-9 text-white relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setTimeout(() => setIsHovered(false))}
      target="_blank"
    >
      {icon}
      <div
        className={`w-${
          isHovered ? "full" : "1"
        } h-1 bg-white rounded-full transition-all duration-200 `}
      />
    </Link>
  );
};

export const SocialMedia: React.FC = () => {
  return (
    <div
      id="social"
      className="flex flex-row gap-4 mt-4 animate-fade-in rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-700 p-2"
    >
      <SocialLink
        id="Linkedin"
        href="https://www.linkedin.com/in/isa%C3%AD-hernandez-garcia-17b1b3211/"
        icon={
          <LinkedinIcon className="w-9 h-9 text-white hover:fill-white transition-all duration-200 shadow " />
        }
      />
      <SocialLink
        id="Github"
        href="https://github.com/isaidj"
        icon={
          <GithubIconV2
            className="w-9 h-9 text-white hover:fill-white transition-all duration-200"
            //title
          />
        }
      />
    </div>
  );
};
