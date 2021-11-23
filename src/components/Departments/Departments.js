import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';
import Footer from '../Footer/Footer';
import './Departments.css';

const Departments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div>
            <h1 className="text-primary text-center mt-2 mb-4">Our Departments</h1>
            <div className="depts-container">
                {
                    departments.map(department => <Department
                        key={department.id}
                        department={department}
                    ></Department>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Departments;