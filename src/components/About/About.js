import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="App">
            <h1 className="text-primary text-center mt-2 mb-4">Our Doctors</h1>
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;