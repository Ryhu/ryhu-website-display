import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import portfolioTabsAbout from "./images/portfolioTabsAbout.png";
import portfolioTabsContact from "./images/portfolioTabsContact.png";
import portfolioTabsGallery from "./images/portfolioTabsGallery.png";
import portfolioTabsHome from "./images/portfolioTabsHome.png";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [home, setHome] = useState("active");
  const [about, setAbout] = useState("hidden");
  const [gallery, setGallery] = useState("hidden");
  const [contact, setContact] = useState("hidden");

  const setDict = {
    Home: setHome,
    About: setAbout,
    Gallery: setGallery,
    Contact: setContact,
  };

  const forward = (difference, currentPage, clickedPage) => {
    setHome("hidden");
    setAbout("hidden");
    setGallery("hidden");
    setContact("hidden");
    setDict[clickedPage]("");
    setDict[currentPage]("active flip");

    setCurrentPage(clickedPage);
    setDict[clickedPage]("active");

    if (difference > 1) {
      setTimeout(() => {
        forward(
          difference - 1,
          clickedPage,
          Pages[Pages.indexOf(clickedPage) + 1]
        );
      }, 500);
    }
  };

  const back = (difference, currentPage, clickedPage) => {
    setHome("hidden");
    setAbout("hidden");
    setGallery("hidden");
    setContact("hidden");

    setDict[clickedPage]("active flip");
    setDict[currentPage]("");

    setTimeout(() => {
      setDict[clickedPage]("active");
      setCurrentPage(clickedPage);
    }, 20);

    if (difference > 1) {
      setTimeout(() => {
        back(
          difference - 1,
          clickedPage,
          Pages[Pages.indexOf(clickedPage) - 1]
        );
      }, 520);
    }
  };

  const flipHandler = (clickedPage) => {
    if (!disabled && clickedPage != currentPage) {
      let difference = Pages.indexOf(currentPage) - Pages.indexOf(clickedPage);

      if (difference < 0) {
        forward(
          Math.abs(difference),
          currentPage,
          Pages[Pages.indexOf(currentPage) + 1]
        );
      } else {
        back(difference, currentPage, Pages[Pages.indexOf(currentPage) - 1]);
      }

      setDisabled(true);

      setTimeout(() => {
        setDisabled(false);
      }, Math.abs(difference) * 520);
    }
  };

  const wheelHandler = (evt) => {
    if (evt.deltaY >= 0) {
      let newPage = Pages[Pages.indexOf(currentPage) - 1];
      if (newPage) {
        flipHandler(newPage);
      }
    } else if (evt.deltaY < 0) {
      let newPage = Pages[Pages.indexOf(currentPage) + 1];
      if (newPage) {
        flipHandler(newPage);
      }
    }
  };

  return (
    <AppContainer>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <PortfolioContainer onWheel={(e) => wheelHandler(e)}>
        <ButtonsContainer>
          <HomeButtonImage
            onClick={() => {
              flipHandler("Home");
            }}
            src={portfolioTabsHome}></HomeButtonImage>
          <div>
            <NavButtonImage
              onClick={() => {
                flipHandler("About");
              }}
              src={portfolioTabsAbout}></NavButtonImage>
            <NavButtonImage
              onClick={() => {
                flipHandler("Gallery");
              }}
              src={portfolioTabsGallery}></NavButtonImage>
            <NavButtonImage
              onClick={() => {
                flipHandler("Contact");
              }}
              src={portfolioTabsContact}></NavButtonImage>
          </div>
        </ButtonsContainer>
        <PortfolioOuterShell>
          <PageContainer>
            <Page className={home}>
              <Home></Home>
            </Page>
            <Page className={about}>
              <About></About>
            </Page>
            <Page className={gallery}>
              <Gallery></Gallery>
            </Page>
            <Page className={contact}>
              <Contact></Contact>
            </Page>
          </PageContainer>
        </PortfolioOuterShell>
      </PortfolioContainer>
    </AppContainer>
  );
}

const Pages = ["Home", "About", "Gallery", "Contact"];

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (min-width: 600px) {
    height: 100%;
  }
`;

const NavButtonImage = styled.img`
  // TODO: HARD CODED

  width: 70px;
  @media (min-width: 600px) {
    width: 120px;
  }
  @media (min-width: 961px) {
    width: 150px;
  }

  vertical-align: bottom;
`;

const HomeButtonImage = styled.img`
  // TODO: HARD CODED
  width: 145px;

  @media (min-width: 600px) {
    width: 250px;
  }
  @media (min-width: 961px) {
    width: 300px;
  }
  vertical-align: bottom;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 0.5rem 0 0.5rem;
  width: 100%;

  // :nth-child(n) {
  //   margin: 0;
  //   padding: 0;
  // }

  @media (min-width: 961px) {
    width: 75rem;
  }
`;
const PortfolioOuterShell = styled.div`
  // TODO: FREAKY PADDING, CAUSING THE PUSHES
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  background-color: #f0d38f;
  border-radius: 0.7rem;
  overflow: hidden;

  height: 90%;
  // height: calc(100% - 40px);
  width: 100%;

  @media (min-width: 600px) {
    height: 100%;
  }

  @media (min-width: 961px) {
    width: 75rem;
    height: 43rem;
  }
`;
const PageContainer = styled.div`
  background-color: #f0d38f;
  margin: auto;
  height: 100%;
  width: 100%;

  perspective: 3000px;
  perspective-origin: center;
  backface-visibility: hidden;
`;
const Page = styled.div`
  background-color: white;
  // height: -webkit-fill-available;
  // height: calc(100% - 40px) !important;
  height: 100% !important;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.5s, opacity 0.5s;
  transform-origin: bottom;
  overflow: hidden;

  // @media (min-width:600px) {
  //   height: calc(100% - 44px);
  // }
`;
const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
  background-image: url("./wood_table_background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: black;
`;

export default App;
