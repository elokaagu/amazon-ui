import React from "react";
import styled from "styled-components";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";

function Checkout(props) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <CheckoutAd
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout_ad"
        />
        {basket?.length === 0 ? (
          <>
            <CheckoutContent>
              <CheckoutImage
                src="https://m.media-amazon.com/images/G/02/cart/empty/kettle-desaturated._CB424695504_.svg"
                alt="checkout_image"
              />
              <CheckoutInfo>
                <CheckoutTitle>
                  <h2>Your Amazon Basket is empty</h2>
                </CheckoutTitle>
                <CheckoutSubTitle>
                  <p>
                    Check your Saved for later items below or continue shopping.
                  </p>
                </CheckoutSubTitle>
              </CheckoutInfo>
            </CheckoutContent>
          </>
        ) : (
          <>
            <CheckoutProductTitle>
              <h2>Shopping Basket</h2>
            </CheckoutProductTitle>

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </>
        )}
      </CheckoutLeft>
      {basket.length > 0 && (
        <CheckoutRight>
          <Subtotal />
        </CheckoutRight>
      )}
    </CheckoutContainer>
  );
}

export default Checkout;

const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px;
  height: max-content;
`;

const CheckoutTitle = styled.div`
  margin-right: 10px;
  margin-left: 20px;
  padding: 10px;
  font-size: 20px;
`;

const CheckoutProductTitle = styled.div`
  background-color: white;
  padding: 20px;
  font-size: 20px;

  > h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
  }
`;

const CheckoutSubTitle = styled.div`
  margin-right: 10px;
  margin-left: 20px;
  padding: 10px;
  font-size: 16px;
`;

const CheckoutAd = styled.img`
  width: 100%;
  margin-bottom: 0px;
`;

const CheckoutImage = styled.img`
  height: 400px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const CheckoutContent = styled.div`
  background-color: white;
  margin-top: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const CheckoutInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const CheckoutLeft = styled.div``;

const CheckoutRight = styled.div``;
