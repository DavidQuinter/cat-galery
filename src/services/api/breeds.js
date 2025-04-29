import { fetchData } from "../api";

export const getBreeds = async ({ limit = 10, page = 0 }) => {
  try {
    const data = await fetchData({
      url: `${import.meta.env.VITE_API_URL}breeds?${limit}&page=${page}`,
    });
    return data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    throw new Error("Error fetching breeds");
  }
};
