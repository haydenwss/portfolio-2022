import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DotsLoader = () => {

    const loaderVariants = {
        animationOne : {
            x: [-20, 20],
            y: [0, -30],
            transition: {
                x: {
                    yoyo: Infinity,
                    duration: 0.5
                },
                y: {
                    yoyo: Infinity,
                    duration: 0.25,
                    ease: 'easeOut'
                }
            }
        }
    }
    return (
        <motion.div
        variants={loaderVariants}
        animate='animationOne'
        >
            <Loader></Loader>
        </motion.div>
    )
}

export default DotsLoader

const Loader = styled.div `
    width: 10px;
    height: 10px;
    margin: 40px auto;
    border-radius: 50%;
    background-color: rgb(44, 232, 206);
    display: inline-block;
    margin: 5px;
    text-align: center;
`
