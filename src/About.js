import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/hero-img.png';
import Common from './Common';

const About = () =>{
    return(
        <>
            <Common name="Welcome to about page" 
                    imgsrc={web}
                    visit="/contact"
                    btname="Enquiry Now" />
        </>
    );
}

export default About;