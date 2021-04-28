import { SearchRounded, ShoppingBasketRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import Link from "../styles/Link";

function Header(props) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <AmazonLogo
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo"
          />
        </Link>
      </HeaderLeft>
      <HeaderCenter>
        <SearchBox>
          <input type="text" />
        </SearchBox>
        <SearchRounded />
      </HeaderCenter>
      <HeaderRight>
        <Link to="/login">
          <HeaderOptionLineOne>
            <span>Hello Eloka</span>
          </HeaderOptionLineOne>
          <HeaderOptionLineTwo>
            <span>Sign in</span>
          </HeaderOptionLineTwo>
        </Link>
        <Link to="/home">
          <HeaderOptionLineOne>
            <span>Returns</span>
          </HeaderOptionLineOne>
          <HeaderOptionLineTwo>
            <span>& Orders</span>
          </HeaderOptionLineTwo>
        </Link>
        <Link to="/home">
          <HeaderOptionLineOne>
            <span>Your</span>
          </HeaderOptionLineOne>
          <HeaderOptionLineTwo>
            <span>Prime</span>
          </HeaderOptionLineTwo>
        </Link>
        <Link to="/checkout">
          <HeaderOptionBasket>
            <ShoppingBasketRounded />
            <HeaderOptionLineTwo>
              <BasketCount>
                <span>{basket?.length}</span>
              </BasketCount>
            </HeaderOptionLineTwo>
          </HeaderOptionBasket>
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const AmazonLogo = styled.img`
  object-fit: contain;
  width: 100px;
  padding: 15px;
  margin-top: 18px;
  cursor: pointer;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 12px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;

  .MuiSvgIcon-root {
    background: #cd9042;
    background-size: cover;
    padding: 5px;
    margin-right: -10px;
    height: 22px;
    cursor: pointer;
    border-radius: 0px 10px 10px 0px;
    transition: transform 100ms;

    &:hover {
      background: orange;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  > input {
    outline: 0;
    border: 0;
    width: 97%;
    font-size: 16px;
    font-weight: 500;
  }
`;

const HeaderOptionLineOne = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
`;

const HeaderOptionLineTwo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 13px;
  font-weight: 800;
  margin-left: 10px;
  margin-right: 10px;
`;

const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
`;

const BasketCount = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;
