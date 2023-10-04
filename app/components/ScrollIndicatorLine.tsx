"use client";
import React, { useEffect, useState } from "react";

const ScrollIndicatorLine = ({ sectionId, title }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const section = document.getElementById(sectionId);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffset = section.offsetTop;

      if (scrollPosition >= sectionOffset) {
        setWidth(100);
      } else {
        setWidth(0);
      }
      console.log(scrollPosition, sectionOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionId]);

  return <div>{title}</div>;
};

export default ScrollIndicatorLine;
