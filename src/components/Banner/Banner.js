import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';

const Banner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-warning">Laboratory Services</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-warning">Operation Theatre</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning">Short-Term Hospitalization</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning">Special Treatment</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            {/* <div className="banner-container">
                <div className="banner-left ms-4">
                    <h1 className="text-info me-2">Surely there is no greater garden for human-nature study than the flotsam and jetsam of the hospital.</h1>
                    <button className="btn btn-danger mt-3">Learn More</button>
                </div>
                <div className="banner-right text-center">
                    <img src="https://www.mozocare.com/insights/wp-content/uploads/2020/09/best-hospital.jpg" alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default Banner;