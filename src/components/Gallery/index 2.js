import React from "react";
import PhotoList from '../Gallery/PhotoList';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <PhotoList  />
      </section>
    );
  }
  
  export default Gallery;