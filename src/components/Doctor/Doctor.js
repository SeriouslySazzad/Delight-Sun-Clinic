import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const {name, img, degree, speciality, institute} = props.doctor;
    return (
        <div className="doctor">
            <img className="mt-4 mb-3" src={img} alt="" />
            <h4 className="text-primary">{name}</h4>
            <p>{degree}</p>
            <p className="text-danger">{speciality}</p>
            <p>{institute}</p>
            <button className="btn btn-info">See Details</button>
        </div>
    );
};

export default Doctor;