import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, desc } = props.service;
    return (
        <div className="single-service container">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h5>{name}</h5>
                <p>{desc}</p>
                <Link to={`/service/${id}`}>
                    <button className="btn btn-success">Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;