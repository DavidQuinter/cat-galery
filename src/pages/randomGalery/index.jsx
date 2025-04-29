import { useGetImages } from "../../hooks/galery/useGetImages";
import "./index.css";
import "../index.css";
import { Figure } from "../../components/ui/figure/figure";
import { Button } from "../../components/ui/button/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
const RandomGallery = () => {
  const [page, setPage] = useState(0);
  const [allImages, setAllImages] = useState([]);

  const { data, isLoading, isError, isFetching } = useGetImages({
    limit: 10,
    page,
  });
  useEffect(() => {
    if (data?.length) {
      setAllImages((prev) => [...prev, ...data]);
    }
  }, [data]);

  if(isError){
    toast.error("Error al cargar las imagenes")
  }

  const handleGetMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="gallery-container">
        {allImages?.map((image) => (
          <Figure key={image.id} url={image.url} />
        ))}
      </div>
      <div className="gallery-button-more">
        <Button onClick={handleGetMore} disabled={isLoading || isFetching}>
          Get More
        </Button>
      </div>
    </>
  );
};
export default RandomGallery;
