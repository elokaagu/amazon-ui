import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal(props) {
  const [{ basket }] = useStateValue();

  return (
    <SubtotalContainer>
      <strong>Subtotal ({basket.length} items)</strong>

      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"Text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>Proceed to checkout</button>
    </SubtotalContainer>
  );
}

export default Subtotal;

const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 0px;
  margin-left: 20px;

  justify-content: space-between;

  > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;

const SubtotalGift = styled.div`
  display: flex;

  align-items: center;

  > input {
    margin-right: 5px;
  }
`;
