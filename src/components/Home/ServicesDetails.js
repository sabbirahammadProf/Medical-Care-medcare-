import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const {serviceID} = useParams();
    // Services state
    const [services, setServices] = useState([]);

    // Call services and store
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbirahammadProf/data/main/medcarefakeservices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    const serviceItem = services.find((item) => item.service_id == serviceID );
    return (
        <div className="w-11/12 mx-auto my-4">
            <img src={serviceItem?.service_image} alt="" className="w-full"/>
            <h1 className="text-4xl pt-8">{serviceItem?.service_title}</h1>
            <p className="py-1">{serviceItem?.service_description}</p>
        </div>
    );
};

export default ServicesDetails;