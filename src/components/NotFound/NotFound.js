import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="App mt-3">
            <h1 className="text-danger">404</h1>
            <h1 className="text-info">!!!!!!! OPPPPPSSSS !!!!!!!</h1>
            <h1 className="text-danger">Not Found !!</h1>
            <h1>The page you entered in not available.</h1>
            <h1 className="text-success">THANK YOU!</h1>
            <br />
            <Link to="/home">
                <button className="btn btn-primary">Click Here to go Homepage</button>
            </Link>
        </div>
    );
};

export default NotFound;