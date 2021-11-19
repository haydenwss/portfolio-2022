import * as React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import imagefiller from '../data/imagefiller'
import styled from "styled-components";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.1 }
};

const ProjGallery = ( props ) => {
  
    return (
        <>
            <Header>Projects</Header>
            <Gallery>
                <motion.div
                    className="thumbnails"
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                >
                    {imagefiller.map(filler => (
                        <motion.div className="thumbnail" variants={thumbnailVariants}>
                            <motion.div
                                className="frame"
                                whileHover="hover"
                                variants={frameVariants}
                                transition={transition}
                            >
                                {/* <Link to={`/projects/${filler._id}`}> */}
                                <Link to='/construction'>
                                    <motion.img
                                        key={filler._id}
                                        src={filler.project_image} alt=''
                                        variants={imageVariants}
                                        transition={transition}
                                    />
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </Gallery>
        </>
    )
}

export default ProjGallery;


const Header = styled.div`
    font-size: 200px;
    text-align: center;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    color: #ffffff79;
    font-weight: 600;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;

        @media screen and (min-width: 600px) {
            font-size: 140px;
            bottom: -130px;
        }
        
        @media screen and (min-width: 800px) {
            font-size: 180px;
            bottom: -170px;
        }
            
        @media screen and (min-width: 1000px) {
            font-size: 220px;
            bottom: -200px;
        }
        @media screen and (min-width: 1200px) {
            font-size: 280px;
            bottom: -260px;
        }
`;

const Gallery = styled.div`
    padding: 100px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    position: relative;

    
  .thumbnails {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .thumbnail {
    flex: 1 0 33%;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
  }

`;