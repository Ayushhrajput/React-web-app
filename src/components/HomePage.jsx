import React from 'react';

function HomePage(props) {
    return (
        
        <>
            <section className='flex flex-col sm:flex-row'>
                <div className='w-auto'>
                    <img src="https://ih1.redbubble.net/image.4278851165.5105/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" className='w-full lg:min-w-2xl'  alt="" />
                </div>
                <aside className='w-full flex justify-center items-center'>
                    <div className='h-full p-4 w-full bg-gray-100 flex flex-col justify-center'>
                        <div className="text-4xl italic">Gracie Abrams</div>
                        <a href="https://music.amazon.com/artists/B07Z7CFHDP/gracie-abrams" className='border-b-2 w-max py-2'>Checkout Songs</a>
                    </div>
                </aside>
            </section>
        </>
    );
}

export default HomePage