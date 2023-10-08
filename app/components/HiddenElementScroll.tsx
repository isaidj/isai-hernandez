"use client";
import React, { useEffect } from "react";

//recibe hijo y parametros (offset) con typescript
const HiddenElementScroll = ({
  children,
  offset = 0,
}: {
  children: React.ReactNode;
  offset?: number;
}) => {
  const [isHidden, setIsHidden] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
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
    >
      {children}
    </div>
  );
};

export default HiddenElementScroll;
