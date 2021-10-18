import React from 'react';
import doctorPhoto from '../../images/doctors/doctor1.jpg';

const About = () => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 w-11/12 mx-auto my-16 gap-8 items-center">
            <div>
                <img src={doctorPhoto} alt="" className="w-full rounded" />
            </div>
            <div>
                <h4 className="text-primary-500 font-bold">Welcome to MedCare!!</h4>
                <h2 className="text-3xl py-4">40+ expert doctors</h2>
                <p className="pb-3">MedCare is a popular hospital in Bangladesh. It is known as the first bangladeshi online medical support hospital. It is mostly popular for online medical support.</p>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4">
                    <div className="bg-primary-700 text-white py-2 px-3 rounded">Online support</div>
                    <div className="bg-primary-700 text-white py-2 px-3 rounded">Advance technology</div>
                    <div className="bg-primary-700 text-white py-2 px-3 rounded">Providing best treatment</div>
                    <div className="bg-primary-700 text-white py-2 px-3 rounded">Childrens care</div>
                    <div className="bg-primary-700 text-white py-2 px-3 rounded">Advance medical team</div>
                    <div className="bg-primary-700 text-white py-2 px-3 rounded">Special unit for COVID</div>
                </div>
            </div>
        </section>
    );
};

export default About;