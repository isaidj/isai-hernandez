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

const key_unsplash = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";
const ImageHuntPage = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

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
    <div
      id="imagehunt"
      className={
        "flex flex-col space-y-4 bg-gradient-to-r from-black via-gray-950 to-black "
      }
    >
      <Navbar
        style={{ width: "100%", display: "flex" }}
        className={"bg-gray-800"}
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
              return <ImageCard key={index} img={img} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHuntPage;
