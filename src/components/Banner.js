import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import profileImage from '../img/profile.jpg'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(+false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(+true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"ux | ui"} />
      <BannerRowCenter id={1} title={"design portfolio"} playMarquee={playMarquee} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled, id }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span
        key={id}
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title, id }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters key={id} title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 2,
        }}
        className='row-col'>
        <span className='row-message'>
          <ProfileContainer>
            <Link to='/profile'>
              <img src={profileImage} alt='profile' />  
            </Link> 
          </ProfileContainer>
         </span>
      </motion.div>
    </div>
  );
};


const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;


const ProfileContainer = styled.div`
    height: 200px;
    width: auto;
    
    img {
      height: 100%;
      width: auto;
      border-radius: 50%;
      :hover {
        box-shadow:  10px 10px 50px #bebebe,
             -10px -10px 30px #ffffff,
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: translateY(-6px) translateX(-3px);
      }
    }
`;