import { useEffect, useRef, useState } from "react";
import globalApi, { TMDB_BASE_IMAGE_URL, TMDB_BASE_URL } from "../services/GlobalApi";
import { TrendingVideos, TrendingVideosResult } from "../types/TrendingMovie";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
export const Slider = () => {
  const [movieList, setMovieList] = useState<TrendingVideosResult[]>([]);
  const carosal = useRef<HTMLDivElement>();
  const getTrendingVideos = async () => {
    const result = globalApi.getTrendingVideos;
    console.log(result.data.page);
    setMovieList(result.data.results);
  };
  useEffect(() => {
    getTrendingVideos();
  }, []);
  function sliderLeftClick() {
    carosal.current.scrollLeft -= window.innerWidth;
  }
  function sliderRightClick() {
    carosal.current.scrollLeft += window.innerWidth;

    console.log("click " + window.innerWidth);
  }
  return (
    <>
      <div className="wrapper_for_carousal relative ">
        <HiChevronLeft
          className="hidden lg:block text-white text-5xl absolute left-0 left-5 top-[50%] -translate-y-1/2 "
          onClick={() => {
            sliderLeftClick();
          }}
        />
        <HiChevronRight
          className="hidden lg:block text-white text-5xl absolute right-0 right-5 top-[50%] -translate-y-1/2"
          onClick={() => {
            sliderRightClick();
          }}
        />

        <div className="flex overflow-x-scroll w-full p-2 scrollbar-hide scroll-smooth " ref={carosal}>
          {movieList.map((item, index) => {
            return (
              <>
                <div className="min-w-full px-16 py-4 ">
                  <img src={TMDB_BASE_IMAGE_URL + item.backdrop_path} className="min-w-full h-[460px]  object-cover rounded-xl mr-5  hover:border-[4px] border-gray-400 ease-in-out duration-150" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
