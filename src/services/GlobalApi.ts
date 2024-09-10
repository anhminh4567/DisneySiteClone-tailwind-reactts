import { AxiosResponse } from "axios";
import HttpClient from "./HttpClient";
import { TrendingVideos } from "../types/TrendingMovie";
const TMDB_KEY = "bd956bd1f699c700fd6841e114b6c174";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
const trendingVideosPath = "/trending/all/day?language=en-US";

const getTrendingVideos: AxiosResponse<TrendingVideos> = await HttpClient.get(TMDB_BASE_URL + trendingVideosPath + "&api_key=" + TMDB_KEY);

export default {
  getTrendingVideos,
};
export { TMDB_BASE_URL, TMDB_BASE_IMAGE_URL };
