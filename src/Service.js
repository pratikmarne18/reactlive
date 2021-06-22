import { validate } from '@babel/types';
import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return(
        <>
            <div className="service_title my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="row d-flex gy-5">
                        
                        {Sdata.map((val,ind)=>{
                            return<Card key={ind} imgsrc={val.imgsrc} title={val.title}/> 
                        })}
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;