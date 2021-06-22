import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/hero-img.png';
import Common from './Common';

const Home = () =>{
    return(
        <>
            <Common name="Welcome to home page" 
                    imgsrc={web}
                    visit="/about"
                    btname="Get Started" />
        </>
    );
}

export default Home;