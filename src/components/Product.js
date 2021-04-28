import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <ProductContainer>
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <p>
            <small>£</small>
            <strong>{price}</strong>
          </p>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </ProductRating>
      </ProductInfo>
      <ProductImage src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-height: 400px;
  min-width: 100px;
  margin: 10px;
  z-index: 1;
  padding: 20px;
  width: 100%;

  background-color: white;

  > button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-bottom: 15px;
`;

const ProductPrice = styled.div`
  margin-top: 5px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  object-fit: contain;
  max-height: 200px;
  margin-bottom: 15px;
`;
