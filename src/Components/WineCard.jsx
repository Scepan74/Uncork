import React from "react";
import { useGlobalContext } from "./Context";

//wine card component takes wine array prop and showModal function from context to render an article with wine details and click event for modal display
const WineCard = ({ wine }) => {
  const { showModal } = useGlobalContext();
  const { image, name, region, vintage, price } = wine;
  return (
    <article className="wine-card" onClick={(e) => showModal(e, wine)}>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{region}</p>
      <p>{vintage}</p>
      <p>${price}</p>
    </article>
  );
};

export default WineCard;
