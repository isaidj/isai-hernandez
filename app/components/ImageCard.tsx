import Image from "next/image";
import React from "react";

export const ImageCard = ({ img }: { img: any }) => {
  return (
    <div className="card mb-3  relative">
      <Image
        src={img.urls.regular}
        className="rounded-2xl cursor-pointer"
        alt="..."
      />
    </div>
  );
};

export default ImageCard;
