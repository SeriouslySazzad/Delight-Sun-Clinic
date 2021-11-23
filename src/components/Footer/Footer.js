import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import footerImg from '../../images/footer-img.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left ms-3 me-3">
                    <h1>One's family is the most important thing in life. We look at it this way: One of these days We'll be over in a hospital somewhere with four walls around us.</h1>
                    <br />
                    <button className="btn btn-danger">Learn More</button>
                    <br />
                    <br />
                    <h2>FOLLOW US :</h2>
                    <br />
                    <div className="social-icons">
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </div>
                </div>
                <div className="footer-middle">
                    <ul>
                        <Link className="nev-item" to="/home"><li>Home</li></Link>
                        <Link className="nev-item" to=""><li>Services</li></Link>
                        <Link className="nev-item" to="/about"><li>About</li></Link>
                        <Link className="nev-item" to="/departments"><li>Departments</li></Link>
                        <Link className="nev-item" to=""><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="footer-right">
                    {/* <img className="mb-4" src={footerImg} alt="" /> */}
                    <h2 className="mt-5">CALL US : <i class="fas fa-phone-volume"> +8801765-456787</i></h2>
                    <hr />
                    <h3>Location: 24/3, Pragati Sarani, North Badda, Dhaka, Bangladesh.</h3>
                    <hr />
                    <p>Copyright © 2021 Delight Sun Clinic, Dhaka.</p>
                    <p className="text-info">Thanks for visiting our site.</p>
                    <hr />
                    <img className="mb-4" src={footerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;