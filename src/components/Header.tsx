import logo from "../assets/Images/logo.png";

import { HiMagnifyingGlass, HiHome, HiStar, HiPlayCircle, HiMiniPlus, HiTv, HiBars3BottomLeft } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
export const Header = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <>
      <div className="flex justify-between p-6 ps-7 pe-7">
        <div className="flex gap-8">
          <img src={logo} className="w-20 md:w-40 object-cover" />
          <div className="whenfullscreen hidden lg:flex gap-8">
            {menu.map((item, index) => (
              <HeaderItem name={item.name} icon={item.icon} key={index} />
            ))}
          </div>
          <div className="whensmallscreen lg:hidden flex gap-8">
            {menu.map((item, index) => {
              if (index < 3) {
                return <HeaderItem name={""} icon={item.icon} key={index} />;
              }
            })}
            <div className="hiddenmenuwhenscreensmall lg:hidden flex relative " onClick={() => setToggle(!toogle)}>
              <HeaderItem name={""} icon={HiBars3BottomLeft} key={"none"} />
              {toogle && (
                <div className="absolute -bottom-40 -left-4 bg-gray-800 border-2 border-gray-600 p-3 w-max h-max ">
                  {menu.map((item, index) => {
                    if (index >= 3) {
                      return <HeaderItem name={item.name} icon={item.icon} key={index} />;
                    }
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" className="w-[50px] object-contain rounded-full " />
      </div>
    </>
  );
};
const menu = [
  {
    name: "Home",
    icon: HiHome,
  },
  {
    name: "Search",
    icon: HiMagnifyingGlass,
  },
  {
    name: "Watch List",
    icon: HiMiniPlus,
  },
  {
    name: "Originals",
    icon: HiStar,
  },
  {
    name: "Movies",
    icon: HiPlayCircle,
  },
  {
    name: "Series",
    icon: HiTv,
  },
];
