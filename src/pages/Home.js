import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Product from "../components/Product";

function Home(props) {
  return (
    <HomeContainer>
      <Banner />
      <HomeRow>
        <Product
          id="123123123"
          title="Blood and Oil"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/4192P3JHVyL._AC_SL520_.jpg"
        />
        <Product
          id="123123124"
          title="No Rules Rules: Netflix and the Culture of Reinvention"
          price={9.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/41Ai79Gk5US._SY346_.jpg"
        />
      </HomeRow>
      <HomeRow>
        <Product
          id="123123125"
          title="Hatching Twitter"
          price={12.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41UHpSvDp3L.jpg"
        />
        <Product
          id="123123163"
          title="Controversial Essays"
          price={7.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51U+aJjbDsL.jpg"
        />
        <Product
          id="123128123"
          title="Samsung S20 Ultra"
          price={699.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/414bDgDW9LL._AC_SY460_.jpg"
        />
      </HomeRow>
      <HomeRow>
        <Product
          id="123194523"
          title="Pro Breeze"
          price={63.87}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Usr8F7TfL._AC_SY460_.jpg"
        />
      </HomeRow>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div``;

const HomeRow = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  margin: 0 5px;
  max-width: 1450px;
  margin: 0 auto;
`;
