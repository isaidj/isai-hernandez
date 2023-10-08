"use client";
import React, { useEffect, useState } from "react";
import { ImageCard } from "../../components/ImageCard";

import { Spacer } from "@nextui-org/spacer";
import { Navbar } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import styles from "../../components/cards.module.css";
import { SearchIcon } from "../../../assets/Icons";
import Tendencias, { TendenciasHorizontal } from "../../components/Tendencias";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { redirect, useRouter } from "next/navigation";
import ModalGallery from "@/app/components/Modal/ModalGallery";
const key_unsplash = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";

const ImageHuntPage = () => {
  const [images, setImages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [photoIdParam, setPhotoIdParam] = useState("");
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const photoId = params.get("photoId");
  console.log("idPhotoParam", photoId);
  console.log("pathname", pathname);

  //si tiene el parametro photoId, entonces redirecciona a la ruta con el id, solo en la primera carga
  // if (params.get("photoId")) {
  //   //redireccionado
  //   router.replace(`/applications/imagehunt/photo/${photoId}`, {
  //     scroll: false,
  //   });
  // }

  const onSearchSubmit = async (value: string, fromTendencias?: boolean) => {
    let route = `https://api.unsplash.com/photos/?${key_unsplash}`;
    console.log(value);
    if (value !== "" && fromTendencias) {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        value
      )}&${key_unsplash}`;
    }

    if (input !== "" && !fromTendencias) {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key_unsplash}`;
    }

    const rest = await fetch(route);
    const data = await rest.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  };

  useEffect(() => {
    onSearchSubmit(input);
  }, []);

  return (
    <div id="imagehunt" className={"flex flex-col space-y-4"}>
      {/* {photoId && <ModalGallery onClose={() => null} />} */}

      {/* <ModalGallery
        isOpen={!!photoId}
        onClose={() =>
          router.replace(`/applications/imagehunt`, { scroll: false })
        }
        image={images.find((img) => img.id === photoId)}
        images={images}
      /> */}

      <div>
        <TendenciasHorizontal
          onSearch={(value) => onSearchSubmit(value, true)}
        />
      </div>

      <div className={"flex justify-start"}>
        <div className={"hidden sm:flex flex-col space-y-4 sm:max-w-xs "}>
          <Tendencias onSearch={(value) => onSearchSubmit(value, true)} />
        </div>

        <div id="gallery" className={"flex flex-col space-y-4"}>
          <div className={styles.galleryImagesGrid}>
            {/* <ImagesSkeleton /> */}
            {images.map((img, index) => {
              return (
                <Link
                  key={index}
                  href={`/applications/imagehunt/photo/${img.id}`}
                  //decora los parametros de la url
                  // as={`/photo/${img.id}`}
                  // replace
                  scroll={false}
                >
                  <img
                    src={img.urls.regular}
                    className="card mb-3  relative rounded-2xl cursor-pointer"
                    alt="..."
                    // onClick={
                    //   () =>
                    //     router.replace(`?photoId=${img.id}`, { scroll: false })
                    //   // router.replace(`/applications/imagehunt/photo/${img.id}`, {
                    //   //   scroll: false,

                    //   // })
                    // }
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHuntPage;

const imagesSizes = [
  {
    width: "300px",
    height: "300px",
  },
  {
    width: "900px",
    height: "800px",
  },
  {
    width: "800px",
    height: "1000px",
  },
  {
    width: "600px",
    height: "600px",
  },
  {
    width: "500px",
    height: "500px",
  },
];
const randomImageSize = () => {
  const size = imagesSizes[Math.floor(Math.random() * imagesSizes.length)];
  return {
    width: size.width,
    height: size.height,
  };
};

const ImagesSkeleton = () => {
  return Array(10)
    .fill(0)
    .map((_, index) => {
      return (
        <div
          key={index}
          className=" card mb-3  relative rounded-2xl cursor-pointer bg-slate-600"
          style={randomImageSize()}
        ></div>
      );
    });
};
