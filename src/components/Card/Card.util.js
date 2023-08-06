import axios from "axios";
const formatData = (data = []) => {
  const formattedData = data.map((item) => {
    return {
      ...item,
      ...{
        "poster-image-url": `${process.env.REACT_APP_DATA_URL}images/${item["poster-image"]}`,
      },
    };
  });
  return formattedData;
};
const getPosterData = async (pageNumber = 1) => {
  try {
    if (pageNumber <= 3) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_DATA_URL}data/page${pageNumber}.json`,
        {
          // query URL without using browser cache
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
      return formatData(data?.page["content-items"]?.content);
    }
  } catch (err) {
    console.error("Following Error Occured:", err.message);
  }
};

export default getPosterData;
