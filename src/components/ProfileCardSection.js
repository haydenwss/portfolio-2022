import React, { useState } from 'react'
import Card from './Card'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import tools from '../data/tools';
 
function ProfileCardSection() {

    const [show, toggleShow] = useState(false.toString());

  return (
    <FormWrapper>
        <HeroWrapper>
                <Card />
            <TextWrapper>
                <Title>Profile</Title> 
                <ButtonContainer>
                <button
                className='show-services'
                  onClick={() => toggleShow(!show)} 
                  show={show}
                >
                {show ? 'biography' : 'technical tools'}
                </button>    
                <Link to='/' style={{ textDecoration: 'none' }}><button className='show-services'> back to home</button></Link>
                </ButtonContainer>   
                {!show && 
                <ExpandServicesContainer>
                    <BioText>
                        <p>I am a Full Stack, UX/UI designer and creative developer based in Victoria, British Columbia. I am a self taught developer, as well as attending Coding Dojo in 2019 - one of the top coding bootcamps in the US, with campuses all over the country.</p>
                    </BioText>
                    <BioText>
                        <p>I think understanding the human experience is essential for creating useful and effective products that make life easier. I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on performance & accessibility with delightful interactions and transitional effects.</p>
                    </BioText>
                </ExpandServicesContainer>
                }
                {show && 
                    <ExpandServicesContainer>
                        <ServicesList>
                            {tools.map(tool => (
                                <p key={tool._id}>{tool.technical_tool}</p>
                            ))}    
                        </ServicesList>
                    </ExpandServicesContainer>
                }
                
            </TextWrapper>
        </HeroWrapper>
    </FormWrapper>
  );
}

export default ProfileCardSection;

const FormWrapper = styled.div `
    max-width: 500px;
    margin: auto;
`

const HeroWrapper = styled.div `
    display: grid;
    max-width: 1234px;
    grid-template-columns: 360px auto;
    gap: 60px;
    padding: 100px 20px 0px;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
`

const TextWrapper = styled.div `
    position: relative;
    display: grid;
    gap: 20px;
`

const Title = styled.h1 `
    max-width: 500px;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 72px;
    color: white;
    mix-blend-mode: normal;
    text-shadow: 0px 20px 40px rgba(0,0,0,0.3);
`

const ExpandServicesContainer = styled.div `
    min-height: 250px;
    width: 400px;
    border-radius: 15px;
    padding-top: 45px;
    margin: 0 auto;
    text-align: center;
    background-color: white;
    box-shadow:  20px 20px 60px #cccbcd,
             -20px -20px 60px #ffffff;  
    animation: show 1s 1;

@keyframes show {
  0% {
        transform: scale(1.02);
        transition: down 1s cubic-bezier(0.820, 0.085, 0.395, 0.895);
        opacity: 0;
        transform-origin: top;
  }
  50% {
        transform: scale(1.05);
        transition: down 1s cubic-bezier(0.820, 0.085, 0.395, 0.895);
        opacity: 1;
        transform-origin: top;
  }
  100% {    
        
        transform: scale(1);
        transition: down 1s cubic-bezier(0.820, 0.085, 0.395, 0.895);
        opacity: 1;
        transform-origin: top;
  }
}
`


const ButtonContainer = styled.div `
    .show-services {
        border-style: none;
        background-color: transparent;
        color: rgb(44, 232, 206);
        border: 1px solid rgb(44, 232, 206);
        border-radius: 6px;
        padding: 10px;
        margin: 10px 10px 10px 0px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        :hover {
            background-color: rgb(44, 232, 206);
            color: white;
            transform: scale(1.1);
        }
    }    
`
const BioText = styled.div `
    margin: 20px;
    text-align: left;

    p {
        font-size: 13px;
    }
`

const ServicesList = styled.div `
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;

    p {
        margin: 10px;
        color: rgb(208, 215, 231);

        :hover {
            transform: scale(1.1);
            transition: down 1s cubic-bezier(0.820, 0.085, 0.395, 0.895);
        }
    }
`


