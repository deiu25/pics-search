import "./App.css";
import React, { useEffect, useState, useMemo } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const randomEl = useMemo(
    () => [
      "car",
      "cars",
      "cat",
      "dog",
      "home",
      "flower",
      "nature",
      "bmw",
      "ocean",
      "forests",
      "nature",
      "japan",
      "china",
      "luxury",
    ],
    []
  );

  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomEl.length);
    handleSubmit(randomEl[randomIndex]);
  }, [randomEl]);

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
