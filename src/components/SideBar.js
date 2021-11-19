import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  .active {
    border-right: 4px solid white;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: #d1d7e6;
  border: none;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  margin: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "2" : "2rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: transparent;
  color: white;
  width: 1.0rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;


const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d1d7e6;
  padding: 2rem 0;
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "0rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  color: white;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const SideBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='navbar-container'>
     <Container data-aos="fade-right" >
      <Button clicked={click} onClick={() => handleClick()}>
      </Button>
      <SidebarContainer>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            activeclassname="active"
            to="/"
          >
      
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeclassname="active"
            to="/profile"
          >
  
            <Text clicked={click}>Profile</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeclassname="active"
            to="/projects"
          >
            <Text clicked={click}>Projects</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container> 
    </div>
  );
};

export default SideBar;
