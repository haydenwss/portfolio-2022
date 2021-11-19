import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imagefiller from '../data/imagefiller'
import styled from 'styled-components';

  const transition = {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
  };
  
  const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
  };

const SingleProject = ( props ) => {

    const filler = imagefiller.find(p => p._id === props.match.params.id)
    const [show, toggleShow] = useState(false);

    return (
        <SingleProjectContainer>

            <HideButton>
              <button
                className={ show ? 'back-class' : 'show-class' }
                onClick={() => toggleShow(!show)} 
              >
                {show ? 'back' : 'show more images'}
              </button>    
            </HideButton>

            { !show &&
              <TopContent>
                <motion.div initial="exit" animate="enter" exit="exit">

                    <ImageContainer>
                      <motion.img
                        data-aos="fade-right" data-aos-delay="200"
                        key={filler._id}
                        src={filler.project_image}
                        alt="project preview"
                      />
                    </ImageContainer>

                    <TextContainer>
                      <motion.div  variants={backVariants}>
                        <h1>{filler.title}</h1>
                        <ProjectDescription>{filler.project_description}</ProjectDescription>
                          <div>
                            <img className='svg-logo' data-aos="fade-in" data-aos-delay="200" src={filler.technical_tools_1} alt='logo' />
                            <img className='svg-logo' data-aos="fade-in" data-aos-delay="600" src={filler.technical_tools_2} alt='logo' />
                            <img className='svg-logo' data-aos="fade-in" data-aos-delay="800" src={filler.technical_tools_3} alt='logo' />
                          </div>  
              
                          <Source data-aos="fade-left" data-aos-delay="800">
                            <SourceLink>
                              <a href={filler.github_repo} ><i class="fab fa-github"></i> source code</a>
                            </SourceLink>
                            <SourceLink>
                              <Link to="/image">
                                <i className="fas fa-long-arrow-alt-left fa-lg grey"></i> back 
                              </Link>
                            </SourceLink>
                          </Source>
                      </motion.div>
                    </TextContainer> 

                </motion.div>
              </TopContent> 
            }
            { show && 
              <CardGroup>
                <Cards data-aos="fade-in" data-aos-delay="200"><img src={filler.image_one} alt='' /></Cards>
                <Cards data-aos="fade-in" data-aos-delay="600"><img src={filler.image_two} alt='' /></Cards>
                <Cards data-aos="fade-in" data-aos-delay="800"><img src={filler.image_three} alt='' /></Cards>
              </CardGroup>
            }
        </SingleProjectContainer>
    )
}

export default SingleProject

const SingleProjectContainer = styled.div `
  height: 100%;
`

const ImageContainer = styled.div `
  max-width: 400px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  padding: 40px;
  display: inline-block;

  img {
    height: 500px;
    border-radius: 10px;
    box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
  }
`

const ProjectDescription = styled.div `
  color: black;
`

const TopContent = styled.div `
  display: grid;
  grid-gap: 100px auto;
`

const TextContainer = styled.div `
  border-style: solid;
  border-width: 2px;
  border-color: white;
  width: 60%;
  height: 500px;
  vertical-align: top;
  display: inline-block;
  margin: 0 auto;
  padding: 150px 40px 0px;
`
const Source = styled.div `
  margin-top: 100px;
  position: absolute;
  top: 100px;
  right: 30%;
  border-bottom: 1px solid rgb(208, 215, 231);
  a {
    text-decoration: none;
    z-index: 100;
  }
`

const SourceLink = styled.div `
  display: inline-block;
  margin: 10px;
`

const Cards = styled.div `
  min-width: 400px;
  height: 225px;
  position: relative;
  overflow: hidden;
  z-index: 100;
  border-radius: 10px;
  box-shadow:  20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

    :hover {
      transform: scale(1.1, 1.1);
      box-shadow: 0 30px 60px rgba(0,0,0, 0.5);
      transform: translateY(-20px);
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
             
    img {
      position: absolute;
      top: 0;
      height: auto;  
      width: 100%;
    }
`

const CardGroup = styled.div`
    margin: 50px 40px 100px;
    position: absolute;
    top: 30%;
    left: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    justify-items: center;

@media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const HideButton = styled.div `
  z-index: 100;
  position: absolute;
  top: 150px;
  left: 50px;

  .show-class {
    background-color: transparent;
    border-color: white;
    color: white;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .back-class {
    background-color: rgb(208, 215, 231);
    border-color: white;
    color: white;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`