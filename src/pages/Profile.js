import React, { useState, useEffect } from 'react';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../sass/main.scss";
import ProfileLoader from "../components/ProfileLoader";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProfileCardSection from '../components/ProfileCardSection';

const Profile = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
        ? document.querySelector("body").classList.add("loading")
        : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
        <div>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {loading ? (
                    <motion.div key='loader'>
                        <ProfileLoader setLoading={setLoading} />
                    </motion.div>
                    ) : (
                    <ProfileContainer>
                        <ProfileCardSection />
                    </ProfileContainer>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    )
}

export default Profile

const ProfileContainer = styled.section``;