import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedin,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGem,
  faHome,
  faPhoneAlt,
  faPortrait,
  faEnvelope,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sendEmail, setSendEmail] = useState("");

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1kkJnJU-95UgH6Di-0WpkLkPxO2WOYfvr/view?usp=sharing",
      "_blank"
    );
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch("http://localhost:3000/self", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };

  const sendResume = () => {
    fetch("http://localhost:3000/other", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target_email: sendEmail,
      }),
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };

  return (
    <ContactContainer>
      <PostitsContainer>
        <BusinessCard>
          <BusinessCardHeader>
            <span className="bracket">{"{"}</span>
            <div className="nameAndTitle">
              <span id="name">Ryan Hu</span>
              <br />
              <span id="title">Fullstack Web Developer</span>
            </div>
            <span className="bracket">{"}"}</span>
          </BusinessCardHeader>
          <BusinessCardBody>
            <hr></hr>
            <p id="languages">
              <FontAwesomeIcon icon={faReact} />
              React
              <FontAwesomeIcon icon={faAngular} />
              Angular
              <FontAwesomeIcon icon={faGem} />
              Ruby on Rails
            </p>

            {/* faHome, faPhoneAlt, faPortrait, faEnvelope */}
            <div className="contacts">
              <div className="contact">
                <div className="row">
                  {" "}
                  <FontAwesomeIcon icon={faPhoneAlt} /> (646) 251 1209{" "}
                </div>
                <div className="row">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} /> ryanhuuu@gmail.com{" "}
                </div>
              </div>
              <div className="contact">
                <div className="rowReverse">
                  {" "}
                  New York, NY <FontAwesomeIcon icon={faHome} />{" "}
                </div>
                <div className="rowReverse tinyPush">
                  {" "}
                  www.ryhu.info <FontAwesomeIcon icon={faPortrait} />
                </div>
              </div>
            </div>
          </BusinessCardBody>
        </BusinessCard>
        {/* <Row>
            <EmailResumeBox>
              If you would like my resume emailed to you, just type in your email below:
              <SendEmailLineInput
                type='text'
                onChange={e => setSendEmail(e.target.value)}
                placeholder="Your Email"
              />
              <SendButtonBlue onClick={sendResume}>Send</SendButtonBlue>
            </EmailResumeBox>
            <MyResumeBox>
              <div className="resumeBorder" onClick={openResume}>
                <FontAwesomeIcon icon={faFilePdf} />
                <p>Resume</p>
              </div>
            </MyResumeBox>
          </Row> */}

        <ContactMePostit>
          <form onSubmit={handleSubmit} autocomplete="on">
            <span className="contactMeFlavorText">
              Want someone to get some computer stuff done? Email me at
              Ryanhuuu@gmail.com, or shoot me a message below.
            </span>
            <div className="contactMeSubtext">
              (Which also goes to my email. All roads lead to my email.)
            </div>
            <input
              className="textInput"
              type="text"
              name="first"
              onChange={(e) => setName(e.target.value)}
              autocomplete="name"
              placeholder="Name"
            />
            <input
              className="textInput"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="email"
              placeholder="Email"
            />
            <input
              className="textInput"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              autocomplete="phone"
              placeholder="Phone"
            />
            <textarea
              className="messageInput"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <SendButton>Send</SendButton>
          </form>
        </ContactMePostit>
      </PostitsContainer>

      <Footer>
        <div className="authorText">page created by Ryan Hu</div>
        <IconsContainer>
          <p>You can also find me on:</p>
          <Icons href="https://github.com/Ryhu/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Icons>
          <Icons href="https://www.linkedin.com/in/ryhu/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Icons>
          <Icons href="https://codepen.io/ryhu" target="_blank">
            <FontAwesomeIcon icon={faCodepen} />
          </Icons>
        </IconsContainer>
      </Footer>
    </ContactContainer>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const BusinessCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    width: 80%;
  }

  #line {
    margin-top: -1.3rem;
  }

  #languages {
    margin: 0.3rem 0 0 0;
  }

  svg {
    margin: 0 0.6rem 0 0.6rem;
  }

  .contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    align-items: normal;
    width: 80%;

    .contact {
      display: flex;
      flex-direction: column;

      .row {
        display: flex;
        flex-direction: row;
        text-align: right;
        padding: 1.2rem 0 0 0.9rem;
      }

      .rowReverse {
        display: flex;
        flex-direction: row;
        text-align: right;
        justify-content: flex-end;
        padding: 1.2rem 0.9rem 0 0;
      }

      .tinyPush {
        margin-right: 0.18rem;
      }
    }

    svg {
      margin: 0 0.4rem 0 0.4rem;
    }
  }

  @media screen and (max-width: 950px) {
    .contacts {
      width: 100%
  }
`;

const BusinessCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .bracket {
    font-size: 7rem;
    margin: -1.5rem 1rem 0 1rem;
  }

  .nameAndTitle {
    padding-bottom: 0.5rem;
    #name {
      font-size: 3rem;
    }

    #title {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 950px) {
    .bracket {
      font-size: 4rem;
      margin: -1rem 1rem 0 1rem;
    }

    .nameAndTitle {
      padding-bottom: 0.5rem;
      #name {
        font-size: 2rem;
      }

      #title {
        font-size: 1rem;
      }
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const BusinessCard = styled.div`
  width: 28rem;
  height: 16rem;
  background-color: #f8f2e4;
  box-shadow: 1px 1px 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 950px) {
    width: 20rem;
    height: 12rem;
    padding: 0.25rem;
  }
`;

const MyResumeBox = styled.div`
  box-shadow: 2px 2px 5px;
  background-color: #fea444;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  :hover{
    cursor: pointer;
  }

  .resumeBorder{
    border: 5px solid #feb144;
    border-style: outset;

    :hover{
      cursor: pointer;
      border-style: inset;
      background-color:  #fe9c34;
    }

    svg{
      margin-top: 1rem;
      font-size 4rem;
    }
  
    p{
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: .7rem;
    }
  }

`;

const EmailResumeBox = styled.div`
  box-shadow: 2px 2px 5px;
  background-color: #1cabe3;
  padding: 1rem;
  width: 23rem;
  height: 10rem;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SendButton = styled.button`
  background-color: transparent;
  border: 1px solid #e6e600;
  float: right;
  font-size: 1.1rem;
  margin: 0.3rem 0.3rem 0 0;
  padding: 0 0.3rem 0 0.3rem;
  :hover {
    background-color: blue;
    color: white;
  }
`;

const SendButtonBlue = styled.button`
  background-color: transparent;
  border: 1px solid #1aa0d4;
  float: right;
  font-size: 1.1rem;
  margin: 0.3rem 0.3rem 0 0;
  padding: 0 0.3rem 0 0.3rem;
  :hover {
    background-color: black;
    color: white;
  }
`;

const contactMeFlavorText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const SendEmailLineInput = styled.input`
  background-color: transparent;
  border: 1px solid #199acc;
  font-size: 1.3rem;
  margin-top: 20px;
  width: 100%;
  width: 95%;
  padding: 0.2rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const PostitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: green;

  .authorText {
    display: flex;
    align-items: flex-end;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
  }
`;

const Author = styled.span`
  padding-left: 1rem;
  font-style: italic;
  text-align: bottom;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 0.5rem;
`;

const Icons = styled.a`
  font-size: 3rem;
  margin: 0.5rem;
  :hover {
    color: green;
  }
`;

const ContactMePostit = styled.div`
  box-shadow: 2px 2px 5px;
  font-size: 1rem;
  background-color: yellow;
  width: 23rem;
  height: 24rem;
  border-right: 5px solid #cccc00;
  border-bottom: 5px solid #cccc00;
  display: block;
  padding: 1rem;
  margin-left: 1rem;

  .contactMeFlavorText {
    font-size: 1rem;
    font-weight: bold;
  }

  .contactMeSubtext {
    font-size: 0.75rem;
    font-style: italic;
  }

  .textInput {
    background-color: transparent;
    border: 1px solid #e6e600;
    font-size: 1.1rem;
    width: 95%;
    margin-top: 0.5rem;
    padding: 0.2rem;
  }

  .messageInput {
    background-color: transparent;
    border: 1px solid #e6e600;
    font-size: 1.1rem;
    width: 95%;
    margin-top: 0.5rem;
    padding: 0.2rem;
  }

  @media screen and (max-width: 950px) {
    margin-top: 1rem;
    width: 20rem;
    height: 15rem;
    padding: 0.25rem;
    overflow: none;
    font-size: 10px;

    .contactMeFlavorText {
      font-size: 12px;
      font-weight: bold;
    }

    .contactMeSubtext {
      font-size: 10px;
      font-style: italic;
      margin-bottom: 5px;
    }

    .textInput {
      background-color: transparent;
      border: 1px solid #e6e600;
      font-size: 12px;
      width: 95%;
      padding: 0.1rem;
      margin-bottom: 0 0 5px 0;
    }

    .messageInput {
      background-color: transparent;
      border: 1px solid #e6e600;
      font-size: 12px;
      width: 95%;
      padding: 0.2rem;
    }
  }
`;

export default Contact;
