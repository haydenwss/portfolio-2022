import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DotsLoader from './DotsLoader';
import { motion } from 'framer-motion';
import profileImage from '../img/profile.jpg'

const Card = () => {


    const rightPageVariants = {
        initial: {
          opacity: 0,
          x: "-100vh",
          y: "0vh",
          scale: 0.5,
          duration: 0.25,
        },
        in: {
          opacity: 1,
          x: 0,
          y: "0px",
          scale: 1,
          duration: 0.25,
        },
        out: {
            opacity: 0,
            x: "-100vh",
            y: "0px",
            scale: 1
        }
      };
      

      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 3
      };
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }, []); // here

    return (

        <motion.div
        initial="initial"
        animate="in"
        exit='out'
        variants={rightPageVariants}
        transition={pageTransition}
        >
            <Wrapper>
                <ImageWrapper>
                    <ProfileImage>
                        {
                            isLoaded ?
                            (
                                <img src={profileImage} alt='profile' />
                            ) : (
                                <DotsLoader />
                            )  
                        }
                    </ProfileImage>
                    
                    <TextWrapper>
                        <ProfileName>Hayden MacDonald</ProfileName>
                        <ProfileTitle>Frontend Developer</ProfileTitle>
                        <ProfileTitle>UX | UI Specialist</ProfileTitle>
                    </TextWrapper>
                </ImageWrapper>

                <SocialsContainer>
                    <a href='https://github.com/haydenwss'><h1>github</h1></a>
                    <a href='https://www.linkedin.com/in/hayden-macdonald-315720190/'><h1>linkedin</h1></a>
                    <a href='https://www.behance.net/haydenmacdonald'><h1>behance</h1></a>
                </SocialsContainer>

                <ToolsContainer>
                    <img src='/images/figma-logo.svg' alt='figma' />
                    <img src='/images/xd-logo.svg' alt='figma' />
                    <img src='/images/webflow-logo.svg' alt='figma' />
                    <img src='/images/react-logo.svg' alt='figma' />
                    <a href="mailto:haydenpmacdonald@gmail.com"><button>hire me</button></a>
                </ToolsContainer>

                <ServicesSection>   
                    <Link style={{ textDecoration: 'none' }} to='/projects'>
                        <ViewProjectLink>view projects</ViewProjectLink>
                    </Link>
                    <Link to='/projects'>
                        <ImageGridWrapper>
                            { isLoaded ? (
                                    <Image className='left' ><img src='/images/blog-1.png' placeholder='/images/blog-1.png' alt='' /></Image>  
                                ) : (
                                    <h1>loading..</h1>
                                ) 
                            }
                            { isLoaded ? (
                                <Image><img  className='right' src='/images/divergence-1.png' placeholder='/images/divergence-1.png' alt='' /></Image>
                                ) : (
                                    <h1>loading..</h1>
                                )
                            }
                        </ImageGridWrapper>
                    </Link> 
                </ServicesSection>

            </Wrapper>
        </motion.div>
    )
}

export default Card

const Wrapper = styled.div `
    width: 380px;
    height: 580px;
    border-radius: 15px;
    position: relative;
    background: white;
    box-shadow:  20px 20px 60px #cccbcd,
             -20px -20px 60px #ffffff;
`

const ImageWrapper = styled.div `
    width: 100%;
    height: auto;
    padding: 40px;
    border-bottom: 1px solid #d0d7e7;
    position: relative;
    display: grid;
    grid-template-columns: 100px auto;
    gap: 20px;

    img {
        width: 100px;
        height: auto;
        border-radius: 50%;
        border-color: rgb(208, 215, 231);
        border-style: solid;
        border-width: 1px;
    }
`

const TextWrapper = styled.div `
    display: grid;
    gap: 5px;
    padding: 5px;
`

const ProfileImage = styled.div `
    display: grid; 
    background-blend-mode: overlay;
    mix-blend-mode: normal;
`

const ProfileName = styled.div `
    font-size: 20px;
    font-weight: 500;
`
const ProfileTitle = styled.div `
    font-size: 12px;
    font-weight: 100;
`

const ToolsContainer = styled.div `
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
    padding: 10px 0px;
    

    h1 {
        margin: 10px 0px;
    }

    img {
        height: 35px;
    }

    button {
        padding: 10px;
        border-radius: 5px;
        background-color: #29e8ce;
        color: white;
        border-style: none;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        :hover {
            background-color: transparent;
            color: rgb(44, 232, 206);
            border: 1px solid rgb(44, 232, 206);
            transform: scale(1.1);
        }
    }

    border-bottom: 1px solid #d0d7e7;
`

const SocialsContainer = styled.div `
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
    padding: 10px 0px;
    border-bottom: 1px solid #d0d7e7;
      
    h1 {
        margin: 10px 0px;
    }
    a{
        text-decoration: none;
        color: black;
    }
`

const ServicesSection = styled.div `
        margin: 0 auto;
        text-align: center;
        padding-top: 20px;
`



const ImageGridWrapper = styled.div `
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-items: bottom;
    grid-gap: 8px;
    padding: 70px 10px 10px 10px;
`

const Image = styled.div `
    height: 130px;
    width: auto;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    img, .left {
        border-radius: 0px 0px 0px 15px;
        height: 100%;
    }

    .right {
        border-radius: 0px 0px 15px 0px;
        height: 100%;
    }
`

const ViewProjectLink = styled.div `
    font-size: 20px;
    letter-spacing: 6px;
    padding-top: 40px;
    font-weight: 100;
    text-transform: uppercase;
    color: #d0d7e7;

    :hover {
        transition: .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
        transform: scale(1.1);
    }
`

