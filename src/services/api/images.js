import { fetchData } from "../api";

export const getImages = async ({ limit = 10, page = 0, breedId = "" }) => {
  try {
    let url = `${import.meta.env.VITE_API_URL}images/search?size=thumb&limit=${limit}&has_breeds=true&order=RANDOM&page=${page}`;

    if (breedId) {
      url += `&breed_ids=${breedId}`;
    }

    const data = await fetchData({ url });
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Error fetching images");
  }
};
