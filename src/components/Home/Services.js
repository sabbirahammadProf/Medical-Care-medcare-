import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    // Services state
    const [services, setServices] = useState([]);

    // Call services and store
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbirahammadProf/data/main/medcarefakeservices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <section className="pt-12 w-11/12 mx-auto">
            <h2 className="text-3xl">Our services</h2>
            <p>Why we popular? Let's look at our services.</p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-10">
                {
                    services.map((service) => 
                        <div key={service.service_id} className="shadow-2xl rounded flex px-4 py-12 bg-primary-900 transition-all transform hover:scale-95">
                        <div className="w-8/12">
                            <h4 className="text-xl text-white">{service.service_title}</h4>
                            <p className="py-4 mb-4 text-white">{service.service_description}</p>
                            <Link to={`/service/details/${service.service_id}`} className="transition-all duration-300 bg-white px-4 py-1 text-dark rounded border-2 border-white hover:bg-primary-900 hover:text-white">Learn More</Link>
                        </div>
                        <div className="w-3/12 mx-auto">
                            <img src={service.service_image} alt="" className="mx-auto" />
                        </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Services;