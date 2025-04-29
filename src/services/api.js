export async function fetchData({ url, method = "GET", data = null }) {
  const options = {
    method,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Data fetched successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
