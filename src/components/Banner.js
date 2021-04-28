import React from "react";
import styled from "styled-components";

function Banner(props) {
  return (
    <BannerContainer>
      <HomeImage
        src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YTFhNjA1Y2It/YTFhNjA1Y2It-MTI5NjY3NzQt-w3000._CB659203896_.jpg"
        alt=""
      />
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
`;

const HomeImage = styled.img`
  width: 100%;
  object-fit: contain;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: -1;
  margin-bottom: -150px;
`;
