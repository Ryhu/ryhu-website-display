import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGem, faFileAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

function About() {
  const [tab, setTab] = useState("summary");

  return (
    <div>

      <div>
        <AboutHeader> Ryan Hu</AboutHeader>
      </div>

      <IconRow>
        <Tooltip placement="bottom" tooltip='Summary'><div className={ "iconButton " + (tab === 'summary' ? 'selected' : '') } onClick={() => {setTab('summary')}}> <FontAwesomeIcon icon={faFileAlt} fixedWidth /> </div></Tooltip>
        <Tooltip placement="bottom" tooltip='Why I code'><div className={ "iconButton " + (tab === 'heart' ? 'selected' : '') } onClick={() => {setTab('heart')}}> <FontAwesomeIcon icon={faHeart} fixedWidth /> </div></Tooltip>
        <Tooltip placement="bottom" tooltip='Angular Experience'><div className={ "iconButton " + (tab === 'angular' ? 'selected' : '') } onClick={() => {setTab('angular')}}> <FontAwesomeIcon icon={faAngular} fixedWidth /> </div></Tooltip>
        <Tooltip placement="bottom" tooltip='React Experience'><div className={ "iconButton " + (tab === 'react' ? 'selected' : '') } onClick={() => {setTab('react')}}> <FontAwesomeIcon icon={faReact} fixedWidth /> </div></Tooltip>
        <Tooltip placement="bottom" tooltip='Ruby on Rails Experience'><div className={ "iconButton " + (tab === 'ruby' ? 'selected' : '') } onClick={() => {setTab('ruby')}}> <FontAwesomeIcon icon={faGem} fixedWidth /> </div></Tooltip>
      </IconRow>

      <AboutTabContentContainer>
        <StoryContainer className={ (tab === 'summary' ? '' : 'hidden') } >
          <p className="title">Summary</p>
          I'm a full stack software engineer based in New York, speciailizing in building websites with Angular/React, Ruby on Rails, and a healthy dose of googling. 
          I have particular passion in building and improving methods of automation; I started my CS career off of a mouse macro, and one of my biggest projects was to create a system to auto translate a website into many languages.
        </StoryContainer>
        <StoryContainer className={ (tab === 'heart' ? '' : 'hidden') }>
          <p className="title">Why I Code</p>
          My love of code stems from a love of automation; my first coding language was neither Java or Javascript, but Autohotkey (C++?).
          At a certain point in my life, I was working in a data entry position; my job was to take a (quite literal) room of files, and process them into our legal software. 
          After realizing that the files were available online but not processed, I made the gamble that I could probably automate the process so my next few weeks would be much less tedious.
          Writing the macro was no easy work, as there were many variables to consider: download times were inconsistant, the computer might lag, and if anything went wrong, I'd need a way to verify if a file was stored properly or not. 
          It was a similiar process to coding, I spent 20% of the time writing the actual thing, and 80% debugging, watching it, and making improvements.
          A week later, after we sent a room full of paper to a shredding service, I realized that I'd pefer this kind of work to whatever I was doing at the time, and applied for a bootcamp.
        </StoryContainer>
        <StoryContainer className={ (tab === 'angular' ? '' : 'hidden') }>
          <p className="title">Angular</p>
          The tech stack at my previous job was Angular, on Ruby on Rails. 
          My experience with Angular mainly consisted of building an administrative website for our app.
          this involved mainly building functionality for the website: various inputs for users to add new data, and various pages to display the new data. 

          Over my time at Altru, I've touched on many technologies, such as route-guards, Rxjs, and Redux to name a few. 
          I've also added testing to the angular app using Karma + Jasmine.
        </StoryContainer>
        <StoryContainer className={ (tab === 'react' ? '' : 'hidden') }>
          <p className="title">React</p>
          My experience with React stems from both my time at the bootcamp, and my personal projects. In fact, this website is built on React. 
          My experience with React should be shown, not told: just go over to the gallery and explore a couple of my projects!
        </StoryContainer> 
        <StoryContainer className={ (tab === 'ruby' ? '' : 'hidden') }>
          <p className="title">Ruby On Rails</p>
          My experience with RoR comes from both my previous job and my time at Flatiron.
          During my time at Altru Labs,  I was in charge of adding features to the application, so whatever I did on the front end, I had to support on the back end.
          This involved making new models, data migrations, writing tests with Rspec, basic backend stuff, with an emphasis on writing tests, as every feature I added into the backend was thoroughly tested.
          Apart that, I also worked on an async server, supported by RabbitMQ. Here, I worked on email processing, video processing, and translations. 
        </StoryContainer>
      </AboutTabContentContainer>

      {/* 
      */}
    </div>
  )
}

const IconRow = styled.div`
  background-color: #1cabe3;
  width: 45%;
  margin: auto;
  box-shadow: 2px 2px 5px;
  padding: 0.5rem;

  .iconButton{
    display: inline-block;
    border-radius: 5rem;
    cursor: pointer;
    background-color: #f2f2f2;
    margin: .3rem;
    
    &.selected{
      background-color: blue;
      color: white;
    }

    :hover{
      background-color: blue;
      color: white;
    }
  }

  svg{
    font-size: 3rem;
    padding: 1rem;
  }
`

const AboutTabContentContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 2px 2px 5px;
  text-align: left;

  div{
    margin: auto;

    .title{
      margin-top: -1.8rem;
      font-weight: bold;
      font-size: 1.7rem;
    }
  }
`

const StoryContainer = styled.div`
  padding: 3rem;
  font-size: 1.3rem;
  margin-top: 1rem;
  background-color: #f7ed8e;
`

const AboutHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Tooltip = ({children, tooltip, hideArrow, ...props}) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container',
        })}
      >
        {tooltip}
      </div>
    )}
  >
    {({getTriggerProps, triggerRef}) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger'
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);

export default About
