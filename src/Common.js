import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/hero-img.png';

const Common = (props) =>{
    return(
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container">
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="row">
                        <div className="col-6 mx-auto pt-5 d-flex flex-column justify-content-center">
                            <h1>{props.name} <strong className="brand-name">Thapa Technical</strong></h1>
                            <h2 className="my-3">We are the team of talented developers making websites</h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-warning">
                                    {props.btname}
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-6">
                           <img src={props.imgsrc} className="img-fluid animated" alt="hero-img" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </>
    );
}

export default Common;