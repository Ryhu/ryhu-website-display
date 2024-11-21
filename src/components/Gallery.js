import React from "react";
import styled from "styled-components";
import TooltipTrigger from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

import ticTacToeMini from "../images/TicTacToeMini.png";
import calculatorMini from "../images/CalculatorMini.png";
import simonMini from "../images/SimonMini.png";
import pomodoroMini from "../images/PomodoroMini.png";

function Gallery() {
  const tooltipHelper = (projectName) => {
    return (
      <DescriptionPopper>
        <DescriptionPopperTitle>
          {popperContent[projectName].title}
        </DescriptionPopperTitle>
        {popperContent[projectName].content}
      </DescriptionPopper>
    );
  };

  const popperContent = {
    simon: {
      title: "Simon",
      content: (
        <>
          <p>A digital version of popular game "Simon". </p>
          <p>
            The game lights up colors in a sequence, and the player repeats the
            sequence to the machine, winning after 20 rounds of progressively
            harder sequences.
          </p>
          <p>
            Game can be turned on or off at will, and includes an option to turn
            on "strict mode", where one error will return the player back to the
            first step, instead of restarting the current step.
          </p>
          <p>Also makes beep-boop noises if you're into that kind of thing.</p>
        </>
      ),
    },
    pomodoro: {
      title: "Pomodoro Clock",
      content: (
        <>
          <p>
            A Pomodoro(Italian for tomato) timer for productivity, switching
            between periods of work and rest, based on the Pomodoro method.
          </p>
          <p>
            By default, switches between 25 minutes of work, and 5 minutes of
            rest, but that can be customized using the easy-to-use interface.{" "}
          </p>
          <p>Does not resemble a tomato in any way.</p>
        </>
      ),
    },
    calculator: {
      title: "Calculator",
      content: (
        <>
          <p>
            A fully functional calculator modeled after one of those old-timey
            desktop calculators(Do people still use those?)
          </p>
          <p>
            All the classic functions are there, addition, subtraction,
            multiplication, division, it's even got that new-fangled back
            button!
          </p>
        </>
      ),
    },
    ticTacToe: {
      title: "Tic-Tac-Toe",
      content: (
        <>
          <p> A typical Tic-Tac-Toe game, done in JS and JQuery. </p>
          <p>
            {" "}
            Playable in either single or two player modes, against either an AI
            or another human player.
          </p>
          <p>
            {" "}
            The AI isnt perfect, is programmed to make mistakes from time to
            time to allow player to win.{" "}
          </p>
          <p>
            {" "}
            Will definitely stick to an animation library the next time I make
            something like this.{" "}
          </p>
        </>
      ),
    },
  };

  const Tooltip = ({ children, tooltip, hideArrow, ...props }) => (
    <TooltipTrigger
      {...props}
      tooltip={({
        arrowRef,
        tooltipRef,
        getArrowProps,
        getTooltipProps,
        placement,
      }) => (
        <div
          {...getTooltipProps({
            ref: tooltipRef,
            className: "tooltip-container",
          })}>
          {!hideArrow && (
            <div
              {...getArrowProps({
                ref: arrowRef,
                className: "tooltip-arrow",
                "data-placement": placement,
              })}
            />
          )}
          {tooltip}
        </div>
      )}>
      {({ getTriggerProps, triggerRef }) => (
        <span
          {...getTriggerProps({
            ref: triggerRef,
            className: "trigger",
          })}>
          {children}
        </span>
      )}
    </TooltipTrigger>
  );

  return (
    <>
      <GalleryHeader>
        <p>Gallery</p>
        <p>
          Mouse over the images to get more details, click to see a live demo
        </p>
      </GalleryHeader>
      <GalleryContent>
        <a href="https://codepen.io/Ryhu/full/eGeXbv/" target="_blank">
          <Tooltip
            placement="bottom"
            tooltip={tooltipHelper("simon")}
            delayShow="150">
            <ThumbnailImage src={simonMini}></ThumbnailImage>
          </Tooltip>
        </a>
        <a href="https://codepen.io/Ryhu/full/ZJgvMv/" target="_blank">
          <Tooltip
            placement="bottom"
            tooltip={tooltipHelper("pomodoro")}
            delayShow="150">
            <ThumbnailImage src={pomodoroMini}></ThumbnailImage>
          </Tooltip>
        </a>
        <a href="https://codepen.io/Ryhu/full/zwmbgp/" target="_blank">
          <Tooltip
            placement="top"
            tooltip={tooltipHelper("calculator")}
            delayShow="150">
            <ThumbnailImage src={calculatorMini}></ThumbnailImage>
          </Tooltip>
        </a>
        <a href="https://codepen.io/Ryhu/full/yXdNwE/" target="_blank">
          <Tooltip
            placement="top"
            tooltip={tooltipHelper("ticTacToe")}
            delayShow="150">
            <ThumbnailImage src={ticTacToeMini}></ThumbnailImage>
          </Tooltip>
        </a>
      </GalleryContent>
    </>
  );
}

const GalleryHeader = styled.div`
  p {
    margin-left: 10vw;
    margin-right: 10vw;
  }

  p:first-child {
    margin-top: 0.7rem;
    margin-bottom: 0rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const ThumbnailImage = styled.img`
  //portrait
  @media screen and (max-width: 640px) and (max-height: 950px) {
    height: 15vh;
    margin-left: 20vw;
    margin-right: 20vw;
    margin-bottom: 0.5rem;
  }

  //landscape
  @media screen and (max-height: 640px) and (max-width: 950px) {
    width: 20vw;
  }

  //desktop
  @media screen and (min-width: 950px) {
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 2rem;
    width: 19rem;
  }

  box-shadow: grey 5px 5px 3px;
`;

const DescriptionPopperTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
`;

const DescriptionPopper = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  max-width: 26rem;
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  // < landscape >
  @media screen and (max-height: 640px) {
    margin-top: 10vh;
  }
`;

export default Gallery;
