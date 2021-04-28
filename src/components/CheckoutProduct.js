import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <CheckoutProductContainer>
      <CheckoutProductContent>
        <CheckoutProductImage src={image} alt="" />
        <CheckoutProductInfo>
          <CheckoutProductTitle>
            <p>{title}</p>
          </CheckoutProductTitle>
          <CheckoutProductPrice>
            <small>£</small>
            <strong>{price}</strong>
          </CheckoutProductPrice>
          <CheckoutProductRating>
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))}
          </CheckoutProductRating>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </CheckoutProductInfo>
      </CheckoutProductContent>
    </CheckoutProductContainer>
  );
}

export default CheckoutProduct;

const CheckoutProductContainer = styled.div`
  display: flex;
  padding: 20px;
  height: max-content;
  background-color: white;
  flex-direction: column;

  > h2 {
    margin-bottom: 20px;
    margin-left: 30px;
  }
`;

const CheckoutProductContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 100%;
`;

const CheckoutProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
  margin-bottom: 15px;
`;

const CheckoutProductInfo = styled.div`
  padding-left: 20px;

  > button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    margin-top: 10px;
  }
`;

const CheckoutProductTitle = styled.div`
  font-size: 17px;
  font-weight: 800;
`;

const CheckoutProductPrice = styled.div`
  margin-top: 5px;
`;

const CheckoutProductRating = styled.div`
  display: flex;
  align-items: center;
`;
