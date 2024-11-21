import React from "react";
import styled from "styled-components";
import tabGap from "../images/tabGapSeeThrough.png";

function Home() {
  return (
    <>
      <HomeHeaderGap src={tabGap}></HomeHeaderGap>
      <HomeBackground>
        <TitleText>Hu, Ryan</TitleText>
        <p>website currently under construction, please excuse the mess!</p>
      </HomeBackground>
    </>
  );
}

const HomeHeaderGap = styled.img`
  max-width: 80%;
  vertical-align: bottom;
`;

const HomeBackground = styled.div`
  background-color: #ffdead;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleText = styled.div`
  background-color: #ffdead;
  font-size: 6rem;
`;

export default Home;
