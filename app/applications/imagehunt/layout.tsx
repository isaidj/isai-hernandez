"use client";
import { Button, Input, Navbar, Spacer } from "@nextui-org/react";
// import React, { useState } from "react";
import styles from "../../../components/cards.module.css";
import { SearchIcon } from "@/assets/Icons";
const ImageHuntLayout = ({ children, modal }: any) => {
  //   const [input, setInput] = useState("");
  const handleSearch = (value: any) => {
    console.log("search");
    console.log(value);
  };
  return (
    <div className="bg-gradient-to-r from-black via-gray-950 to-black min-h-screen">
      <Navbar style={{ width: "100%", display: "flex" }} className={" z-10 "}>
        <h1 className="text-2xl  text-white font-extralight whitespace-nowrap">
          Image Hunt
        </h1>

        <label>
          <Spacer />
          <form
          // onSubmit={(e) => handleSearch(e)}
          >
            <div className="flex items-center">
              <Input
                type="text"
                name="input text"
                color="default"
                startContent={<SearchIcon color="white" />}
                placeholder="Search"
                className=" text-zinc-300 font-bold ml-3 "

                //   onChange={(e) => setInput(e.target.value)}
              />

              <Button
                className={
                  "bg-gray-950 text-white font-bold ml-3 hover:bg-gray-700 "
                }
                type="submit"
                //   onClick={() => onSearchSubmit(input, false)}
              >
                Search
              </Button>
            </div>
          </form>
        </label>
      </Navbar>
      {children}
      {modal}
    </div>
  );
};

export default ImageHuntLayout;
