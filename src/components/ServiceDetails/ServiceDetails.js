import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../SingleService/SingleService';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const { services } = useServices();
    console.log(services);

    const serviceDetail = services.find(service => service.id === serviceId);
    console.log(serviceDetail);


    return (
        <div className="App service-details">
            <div className="ms-5 mt-3 me-5">
                <h1 className="text-primary text-center mt-2 mb-4">This service details down below :</h1>
                <img className="w-25" src={serviceDetail?.img} alt="" />
                <h2 className="text-dark">Service Name : {serviceDetail?.name}</h2>
                <h2 className="text-danger">Description : {serviceDetail?.desc}</h2>
                <button className="btn btn-success me-3">Book this Service</button>
                <Link to="/home">
                    <button className="btn btn-primary">Click Here to go Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;