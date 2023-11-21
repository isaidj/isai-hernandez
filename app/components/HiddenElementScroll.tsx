"use client";
import React, { useEffect } from "react";

//recibe hijo y parametros (offset) con typescript
const HiddenElementScroll = ({
  children,
  offset = 0,
  idToScroll = "",
}: {
  children: React.ReactNode;
  offset?: number;
  idToScroll?: string;
}) => {
  const [isHidden, setIsHidden] = React.useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        //New window
        window.open("https://www.google.com", "_blank");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div
      className={`flex justify-center items-center ${
        isHidden ? "opacity-0" : "opacity-100"
      } transition-opacity duration-500 ease-in-out`}
      onScroll={() => scrollTo(idToScroll)}
    >
      {children}
    </div>
  );
};

export default HiddenElementScroll;
