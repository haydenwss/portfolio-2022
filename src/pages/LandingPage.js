import React, { useState, useEffect } from 'react';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../sass/main.scss";
import { motion } from 'framer-motion';

// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";

const LandingPage = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

    return (
        <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
                {loading ? (
                <motion.div key='loader'>
                    <Loader setLoading={setLoading} />
                </motion.div>
                ) : (
                <>
                    <Header />
                    <Banner />
                    {!loading && (
                    <div className='transition-image final'>
                        <motion.img
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                        src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                        layoutId='main-image-1'
                        />
                    </div>
                    )}
                </>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default LandingPage
