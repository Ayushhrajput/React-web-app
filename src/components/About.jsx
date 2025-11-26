import React from 'react';

function About(props) {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center bg-gray-100'>
                <div>
                    <img src="https://wallpaperaccess.com/full/9424843.jpg" className='w-full lg:max-w-2xl' alt="" />
                </div>
                <div className='flex flex-col px-4 lg:max-w-lg'>
                    <h1 className='text-2xl italic'>Gracie Abrams</h1>
                    <div className='py-2'>Gracie Abrams is known for her introspective, vulnerable, and deeply honest songwriting.</div>
                </div>
            </div>
        </>
    );
}

export default About;