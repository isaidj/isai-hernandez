"use client";
import React, { useEffect, useState } from "react";
import { ImageCard } from "../../../components/ImageCard";

import { Spacer } from "@nextui-org/spacer";
import { Navbar } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import styles from "../../../components/cards.module.css";
import { SearchIcon } from "../../../assets/Icons";
import Tendencias from "../../../components/Tendencias";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { redirect, useRouter } from "next/navigation";
import ModalGallery from "@/components/ModalGallery";
const key_unsplash = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";

const ImageHuntPage = () => {
  const [images, setImages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const photoId = params.get("photoId");
  console.log("idPhotoParam", photoId);
  console.log("pathname", pathname);

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
  useEffect(() => {
    if (photoId) {
      router.replace(`/dashboard/imagehunt/?photoId=${photoId}`, {
        scroll: false,
      });
    }
  }, []);

  return (
    <div
      id="imagehunt"
      className={
        "flex flex-col space-y-4 bg-gradient-to-r from-black via-gray-950 to-black "
      }
    >
      {/* {photoId && <ModalGallery onClose={() => null} />} */}
      {/* {photoId && (
        <ModalGallery
          onClose={() =>
            router.replace("/dashboard/imagehunt", { scroll: false })
          }
          image={images.find((img) => img.id === photoId)}
          images={images}
        />
      )} */}
      <Navbar
        style={{ width: "100%", display: "flex" }}
        className={"bg-gray-800 z-10"}
      >
        <h1 className="text-2xl  text-white font-extralight">Image Hunt</h1>

        <label>
          <div className={styles.containerContet}>
            <Spacer />
            <Input
              type="text"
              name="input text"
              color="default"
              startContent={<SearchIcon />}
              placeholder="Search"
              className=" text-gray-800 font-bold ml-3 "
              onChange={(e) => setInput(e.target.value)}
            />

            <Button
              className={
                "bg-gray-950 text-white font-bold ml-3 hover:bg-gray-700"
              }
              type="submit"
              onClick={() => onSearchSubmit(input, false)}
            >
              Search
            </Button>
          </div>
        </label>
      </Navbar>
      <div className={"flex"}>
        <div>
          <Tendencias onSearch={(value) => onSearchSubmit(value, true)} />
        </div>

        <div className={"flex flex-col space-y-4"}>
          <div className={styles.galleryImagesGrid}>
            {images.map((img, index) => {
              return (
                <Link
                  key={index}
                  href={`imagehunt/photo/${img.id}`}
                  // as={`/dashboard/imagehunt/${img.id}`}
                  // shallow
                  scroll={false}
                >
                  <img
                    src={img.urls.regular}
                    className="card mb-3  relative rounded-2xl cursor-pointer"
                    alt="..."
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
