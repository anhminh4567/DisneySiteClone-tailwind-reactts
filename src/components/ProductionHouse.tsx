import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
import { ProductionHouseType } from "../types/ProductionHouse";
export const ProductionHouse = () => {
  return (
    <>
      <div className="flex gap-5  p-16">
        {productionHouses.map((item, index) => (
          <div key={index} className="border border-white rounded-xl hover:scale-110 transition-all relative shadow-black shadow-2xl">
            <img src={item.image} className="w-full rounded-xl z-[1]" />
            <video src={item.video} className="absolute top-0 rounded-xl opacity-0 hover:opacity-50 z-0 " autoPlay loop playsInline />
          </div>
        ))}
      </div>
    </>
  );
};
const productionHouses: ProductionHouseType[] = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    image: starwar,
    video: starwarV,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGeographicV,
  },
];
