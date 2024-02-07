import { useEffect, useState } from "react";
import models from "../models";

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImg === models.length - 1) {
        setCurrentImg(0);
      } else {
        setCurrentImg(currentImg + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImg]);

  return (
    <div className="lg:px-2 px-1 my-10 py-10">
      <img
        src={models[currentImg].imgUrl}
        alt={`Model ${models[currentImg].id}`}
        className="carousel-img object-cover w-full h-full shadow-lg"
      />
    </div>
  );
};

export default Carousel;
