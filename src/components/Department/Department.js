import React from 'react';
import './Department.css';

const Department = (props) => {
    const {name, img, desc} = props.department;
    return (
        <div className="single-dept">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{desc}</p>
            <button className="btn btn-secondary">See More</button>
        </div>
    );
};

export default Department;