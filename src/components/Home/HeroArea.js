import React from 'react';
import banner1 from '../../images/banner/banner1.jpg';


const HeroArea = () => {
    return (
        <section className="pt-10">
            <div style={{backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '95vh'}}>
                <div className="bg-secondarydark h-full">
                <div className="w-11/12 h-full flex flex-col justify-center mx-auto">
                    <h2 className="text-white pb-4 xl:text-6xl text-3xl font-bold">MedCare, care in Online</h2>
                    <p className="text-white xl:w-5/12 w-10/12 pt-2 pb-6">MedCare is best for online medical support. If you book a appointment, we will care you online in every moment and we also care you offline</p>
                    <button className="transition-all font-bold bg-primary-900 xl:w-2/12 w-6/12 text-white opacity-1 py-3 hover:bg-primary-700 hover:text-white">Learn More</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;