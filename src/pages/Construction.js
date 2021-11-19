import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Construction = () => {
    return (
        <ConstructionContainer>
            <ImageContainer>
                <motion.img 
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -300, opacity: 0 }}
                transition={{ type: "spring", duration: 2 }}
                src='/images/working.svg' alt='construction' />
                <Text>
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: "spring", duration: 3, delay: 1 }}
                    >
                        This page is currently under construction ..
                        <br></br>
                        <Link to='/'>
                            <button>home</button>
                        </Link>
                        
                    </motion.div>
                </Text>
            </ImageContainer>
        </ConstructionContainer>
    )
}

export default Construction

const ConstructionContainer = styled.div `
    padding: 100px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    position: relative;
`

const ImageContainer = styled.div `
    height: 400px;
    width: auto;
    text-align: center;

    img {
        height: 100%;
        width: auto;
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
`

const Text = styled.div `
    font-size: 40px;
    letter-spacing: 5px;
    margin: 20px 10px;
`