"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import QuantitySelector from "../../components/components-assets/QuantitySelector.jsx";
import ColorsSelector from "../../components/components-assets/ColorsSelector.jsx";
import { FastAverageColor } from "fast-average-color";

import nikeRed from "@/public/img/nikeRed.jpg";
import nikeBlue from "@/public/img/nikeBlue.jpg";
import nikeGreen from "@/public/img/nikeGreen.jpg";
import nikeWhite from "@/public/img/nikeWhite.jpg";

import {
  ExtractStringByComma,
  HtmlToText,
  MaxWords,
  NumberSeparatorDot,
} from "@/utils/FunctionsProducts.tsx";
import { ShareIcon } from "@/assets/Icons.tsx";
const productMockup = {
  id: 1,
  name_prod: "Cityscape Style: Nike's Ultrawide Cyberpunk Boots Unleashed",
  desc_short:
    "Discover the future of fashion with Nike Ultrawide Modern Cyberpunk Boots. Cutting-edge style meets technology in these stunning booties. Join the fashion revolution!",
  desc_long: `<p>Immerse yourself in the world of future fashion with Nike Ultrawide Modern Cyberpunk Boots. These booties are more than just footwear; they are a style statement and an ode to innovation. Crafted with precision, they feature a blend of cutting-edge materials, including durable synthetic microfibers and lightweight, breathable mesh.

The upper of each pair of Nike Ultrawide Modern Cyberpunk Boots boasts a textured microfiber construction that not only enhances their aesthetic appeal but also ensures long-lasting durability. This, coupled with a reinforced sole made from high-quality rubber, provides an exceptional grip on various terrains.

With a design that merges the cyberpunk aesthetic with cutting-edge technology, these boots will transport you to a world where fashion and functionality harmoniously coexist. Metallic accents, thoughtfully integrated into the design, catch and reflect light, creating a captivating visual effect.

Join the fashion revolution and step into a future where your every stride sets the trend. Discover the perfect fusion of urban, tech, and elegance, all wrapped up in a pair of Nike Ultrawide Modern Cyberpunk Boots. Nike invites you to take the step into the future with Ultrawide Modern Cyberpunk Boots.</p>`,
  img: "nikeRed.jpg,nikeWhite.jpg,nikeGreen.jpg,nikeBlue.jpg,nikeRed.jpg,nikeWhite.jpg,nikeGreen.jpg,nikeBlue.jpg,nikeRed.jpg,nikeWhite.jpg,nikeGreen.jpg,nikeBlue.jpg",
  price: 1000,
  colors: "#f89083,#ffffff,#87f8a3,#8ee3f8",
};
const urls3images = "https://tecnofacil.s3.amazonaws.com/";
const Product = () => {
  const [product, setProduct] = useState(productMockup);
  const mainImageRef = useRef(null);
  const [mainImage, setMainImage] = useState("");
  const colors = ExtractStringByComma(product.colors);
  const [colorActive, setColorActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const [averageColorGradient, setAverageColorGradient] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  // console.log(location);

  const getAverageColor = (imgurl) => {
    const image = new Image();
    // console.log(image);
    //replace https with http
    image.src = imgurl.replace("https", "http");
    //from all origins

    image.crossOrigin = "Anonymous";

    const fac = new FastAverageColor();
    //wait for the image to load and then get the average color
    image.onload = () => {
      fac
        .getColorAsync(image)
        .then((color) => {
          // console.log(color);
          setAverageColorGradient(color.rgba);
          CalFontColor(color.rgba, 90);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };
  const CalFontColor = (rgba, luminanceValue = 100) => {
    //convert rgba to object
    const rgb = {
      r: rgba.split("(")[1].split(",")[0],
      g: rgba.split("(")[1].split(",")[1],
      b: rgba.split("(")[1].split(",")[2].split(")")[0],
    };
    //calculate luminance
    const luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    // console.log({
    //   rgb,
    //   luminance,
    // });

    if (luminance < luminanceValue) {
      setFontColor("#ffffff");
    } else {
      setFontColor(null);
    }
  };

  const imageViewsHandler = (e) => {
    if (mainImage === e) {
      setMainImage(urls3images + ExtractStringByComma(product.img)[0]);
    } else {
      setMainImage(e);
    }
  };

  useEffect(() => {
    getAverageColor(mainImage);
  }, [mainImage]);
  //if product is not empty
  useEffect(() => {
    if (product) {
      // console.log(product);
      setProduct(product);
      setMainImage(urls3images + ExtractStringByComma(product.img)[0]);
    }
  }, [product]);
  useEffect(() => {
    const handleWheel = (e) => {
      const container = document.getElementById("images");
      // where "container" is the id of the container
      container.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
          container.scrollLeft += 100;
          e.preventDefault();
          // prevenDefault() will help avoid worrisome
          // inclusion of vertical scroll
        } else {
          container.scrollLeft -= 100;
          e.preventDefault();
        }
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <ProductContainer style={{ background: averageColorGradient }}>
      <div className="content">
        <div className="title-background-container">
          <span className="title-background">{product.name_prod}</span>
        </div>
        <div className="principal-container">
          <div className="images-container">
            <ShareIcon className="w-8 h-8 share-icon" />
            <div className="principal-image-container">
              <motion.img
                src={mainImage}
                alt={ExtractStringByComma(product.img)[0]}
                className="principal-img"
                id="principalImage"
                ref={mainImageRef}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                // onLoad={() => {
                //   setMainImage(mainImageRef.current.src);
                // }}
              />
              <span className="wattermark">{product.name_prod}</span>
            </div>
            <div id="images" className="images">
              {ExtractStringByComma(product.img).map((e, i) => {
                return (
                  <motion.img
                    src={urls3images + e}
                    alt="drone"
                    key={i}
                    onClick={(e) => imageViewsHandler(e.target.src)}
                  />
                );
              })}
              {/* <img
                  src={urls3images + ExtractStringByComma(product.img)[1]}
                  alt={ExtractStringByComma(product.img)[1]}
                  onClick={(e) => imageViewsHandler(e.target.src)}
                />
                <img
                  src={urls3images + ExtractStringByComma(product.img)[3]}
                  alt="vr"
                  onClick={(e) => imageViewsHandler(e.target.src)}
                /> */}
            </div>
          </div>
          <div className="description-container">
            <span className="price">$ {NumberSeparatorDot(product.price)}</span>
            <h1
              className="title"
              style={{ color: fontColor !== null ? fontColor : null }}
            >
              {product.name_prod}
            </h1>
            <p className="desc_short">{product.desc_short}</p>
            <br />

            <div
              className="desc_long"
              dangerouslySetInnerHTML={{
                __html: HtmlToText(
                  MaxWords(product.desc_long, showMore ? 10000 : 300)
                ),
              }}
            ></div>
            <span className="show-more" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </span>
            <span className="colors-title">Colors</span>
            <ColorsSelector
              colors={colors}
              colorActive={colorActive}
              setColorActive={setColorActive}
            />
            <div className="quantity-container">
              <span className="quantity-title">Quantity</span>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>

            <div className="buttons">
              <button className="add-to-cart" appearance="primary">
                Add to cart
              </button>
              <button className="buy-now" appearance="primary">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */

  transition: all 0.5s ease-in-out;

  .title-background-container {
    display: flex;

    position: absolute;
    width: 100%;
  }
  .title-background {
    position: absolute;
    font-size: 10rem;
    color: rgba(255, 255, 255, 0.034);
    font-weight: 700;
    top: 50%;
    left: 0;
    font-family: "Oswald", sans-serif;
    line-height: 1;
    writing-mode: vertical-rl;

    transform: rotate(-180deg);
    user-select: none;
  }

  .principal-container {
    display: flex;
    width: 800px;
    height: 100%;
    /* min-height: 600px; */
    margin: 0 auto;
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
  }
  .images-container {
    position: relative;
    width: 50%;
    height: 90%;

    z-index: 1;
    box-shadow: 0 0 20px 20px #00000023;
    border-radius: 10px;
  }
  .share-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 2rem;
    color: #2121216e;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    padding: 5px;

    z-index: 1;
  }
  .principal-image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 0 0 0;
    position: relative;

    //transition for image
  }
  .wattermark {
    position: absolute;
    font-family: "Oswald", sans-serif;
    font-size: 8rem;
    font-weight: 700;
    color: #ffffff11;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    line-height: 1;
    z-index: 1;
    user-select: none;
  }
  .principal-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .images {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
    /* position: relative; */
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    width: 100%;
    height: auto;
    z-index: 0;
    border-radius: 0 0 10px 10px;
    & > img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
      transition: all 0.25s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  /* .images::after {
    position: absolute;
    content: "";
    color: transparent;
    right: 0;
    top: 0;
    width: 3rem;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #000000 100%);
    z-index: 1;
  } */
  .description-container {
    width: 50%;
    height: fit-content;
    min-height: 600px;
    /* max-height: auto; */
    background: rgba(255, 255, 255, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: -10px -10px 20px 20px #00000023;
    //blur
    /* backdrop-filter: blur(10px) saturate(100%); */
    /* -webkit-backdrop-filter: blur(10px) saturate(100%); */
    border-radius: 10px;

    border: 1px solid rgba(255, 255, 255, 0.18);
    border-top: 1px solid rgba(255, 255, 255, 0.298);
    border-right: 1px solid rgba(255, 255, 255, 0.18);
    border-bottom: none;
    border-left: none;

    z-index: 1;
    padding: 20px;
  }
  .price {
    font-size: 2rem;
    font-weight: 700;
    color: #212121;
    align-self: flex-end;
    margin-right: 20px;
    padding: 0px;
    margin-bottom: 0px;
  }
  .title {
    font-family: "Oswald", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0a0a0a;
  }
  .desc_short {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #212121;
  }
  .desc_long {
    font-size: 1rem;
    font-weight: 400;
    color: #212121;
  }
  .show-more {
    text-align: end;
    font-size: 1rem;
    font-weight: 700;
    color: #212121;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .colors {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 50px;
  }

  .colors-title {
    font-size: 1rem;
    font-weight: 700;
    color: #212121;
  }

  .quantity-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .quantity-title {
    font-size: 1rem;
    font-weight: 700;
    color: #212121;
  }
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;

    /* gap: 10px; */
  }
  .quantity-btn {
    color: #212121;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* border: 1px solid #212121; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    //prevent selection
    user-select: none;

    transition: all 0.3s ease;
    &:hover {
      background: #ffffff;
      color: #00aeff;
      transform: scale(1.1);
    }
  }
  .quantity-input {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #212121;
    text-align: center;
    border: none;
    outline: none;
    background: transparent;
    width: 2.4rem;
  }
  .quantity-input::-webkit-outer-spin-button,
  .quantity-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .add-to-cart {
    width: 80%;
    height: 50px;
    font-size: 1rem;
    font-weight: 700;
    background: #212121;
    transition: all 0.3s ease;
  }
  .buy-now {
    width: 50%;
    height: 50px;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    background: #ffffffdf;
    padding: 0px;
    height: auto;
    .content {
      padding-top: 0px;
    }
    .principal-container {
      flex-direction: column;
      width: 100%;
      height: auto;
    }
    .images-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .principal-image-container {
      border-radius: 0;
    }
    .principal-img {
      width: 100%;
      height: 100%;
    }
    .images {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
    .description-container {
      width: 100%;
      height: 100%;
      /* background: white; */
      border-radius: 0;
    }
    .title-background-container {
      display: none;
    }
  }
`;
