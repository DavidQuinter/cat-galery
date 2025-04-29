import { useState } from "react";
import { useGetBreeds } from "../../hooks/breed/useGetBreed";
import { useGetImages } from "../../hooks/galery/useGetImages";
import "./index.css";
import { Figure } from "../../components/ui/figure/figure";
import { toast } from "sonner";

const FilterGallery = () => {
  const { data: breeds, isLoading: breedsLoading } = useGetBreeds();
  const [selectedBreedId, setSelectedBreedId] = useState("");

  const {
    data: images,
    isLoading: imagesLoading,
    isFetching: imagesFetching,
    isError: imagesError,
  } = useGetImages({ limit: 12, breedId: selectedBreedId });

  if (breedsLoading || imagesLoading) return <p>Loading...</p>;
  if(imagesError){
    toast.error("Error al cargar las imagenes")
  }

  return (
    <div className="gallery-container">
      <div className="filter-buttons">
        <button onClick={() => setSelectedBreedId("")}>All</button>
        {breeds.map((breed) => (
          <button key={breed.id} onClick={() => setSelectedBreedId(breed.id)}>
            {breed.name}
          </button>
        ))}
      </div>

      <div className="gallery-container">
        {imagesFetching ? (
          <p>Loading images...</p>
        ) : (
          images.map((image) => (
            <Figure key={image.id} url={image.url} />
          ))
        )}
      </div>
    </div>
  );
};

export default FilterGallery;
