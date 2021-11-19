import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'>Hayden MacDonald</div>
        <div className='contact'>
          <a href='/'>reload</a>
        </div>
      
      </div>
    </motion.div>
  );
};

export default Header;
