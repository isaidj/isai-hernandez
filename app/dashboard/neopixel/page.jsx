"use client";
import React, { useEffect, useState } from "react";
import { Cardcontainer } from "../../../components/Cardcontainer";
import NavB from "../../../components/NavB";

import { Button, Navbar, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import styles from "../../../components/cards.module.css";
import { SearchIcon } from "../../../assets/Icons";

const NeopixelPage = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const { descripcion, setDescripcion } = useState();

  const peticion = async (e) => {
    const key = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    const rest = await fetch(route);
    const data = await rest.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  };

  const peticionN = async (e) => {
    const key = "client_id=vwL9AtGcvwfhrI96O7kq6sK49n6DqxgwGrviH5TAhQw";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (e !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        e
      )}&${key}`;
    }

    const rest = await fetch(route);
    const data = await rest.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    if (data.results.description) {
      setDescripcion(data.results.description);
    }
    console.log(descripcion);
  };

  useEffect(() => {
    //el use effect se utiliza para ejecutar codigo despues de renderizar el componente, en este caso el codigo es una peticio a un api.
    peticion();
  }, []);

  const handleSubmit = (e) => {
    peticion();
  };

  return (
    <div className={"flex flex-col space-y-4"}>
      <Navbar
        variant="floating "
        style={{ width: "100%", display: "flex" }}
        className={"bg-gray-800"}
      >
        <h1 className="text-2xl  text-white font-extralight">Neo Pixel</h1>

        <label>
          <div className={styles.containerContet}>
            <Spacer />
            <Input
              type="text"
              name="input text"
              labelPlaceholder="Buscador"
              bordered
              color="default"
              startContent={<SearchIcon />}
              placeholder="Buscador"
              className=" text-gray-800 font-bold ml-3 "
              onChange={(e) => setInput(e.target.value)}
            />

            <Button
              icon={<i className="fa fa-search"></i>}
              className={
                "bg-gray-950 text-white font-bold ml-3 hover:bg-gray-700"
              }
              type="submit"
              onClick={handleSubmit}
            >
              Buscar
            </Button>
          </div>
        </label>
      </Navbar>
      <div className={"flex"}>
        <div>
          <NavB peticionN={(e) => peticionN(e)} />
        </div>

        <div className={"flex flex-col space-y-4"}>
          <div className={styles.galleryImagesGrid}>
            {images.map((img) => {
              return <Cardcontainer key={img.id} img={img} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeopixelPage;
