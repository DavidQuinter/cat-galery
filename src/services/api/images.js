import { fetchData } from "../api";

export const getImages = async ({ limit = 10, page = 0 }) => {
  try {
    const data = await fetchData({
      url: `${
        import.meta.env.VITE_API_URL
      }images/search?size=thumb&limit=${limit}&has_breeds=true&order=RANDOM&page=${page}`,
    });
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Error fetching images");
  }
};
