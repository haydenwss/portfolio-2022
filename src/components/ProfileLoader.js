import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};


const itemMain = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
    },
  },
  
};

const ProfileLoader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
       
        <motion.div variants={itemMain} className="transition-image">
          <Spinner>
            <motion.img
                layoutId="main-image-1"
                src='https://cdn-icons-png.flaticon.com/512/690/690471.png'
            />
          </Spinner>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
   
    </motion.div>
  );
};
export default ProfileLoader;

const Spinner = styled.section`
    width: 100px;
    opacity: 0.5;
    height: 100px;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

@keyframes spin {
    from {
        transform:rotate(0deg);  
    }
    to {
        transform:rotate(360deg);
    }
}
    img {
        height: 100%;
        width: auto;
    }
`