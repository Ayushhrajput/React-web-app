import React from 'react';
import { Link } from 'react-router-dom';

function FooterBox(props) {
    return (
        <footer>
            <div className='w-full h-40 lg:h-60 bg-white flex justify-around'>
                <div className="p-4 flex items-center">
                    <Link className='flex items-center'>
                        <img src="https://i.etsystatic.com/38919662/r/il/7f220c/4341594072/il_75x75.4341594072_pmsz.jpg" className='h-20' alt="" />
                    </Link>
                </div>
                <div className='p-4 flex flex-col gap-4 justify-center'>
                    <div className="">Content</div>
                    <ul>
                        <li>
                            <Link to="/" className='text-gray-600 hover:border-b-1'>Home</Link>
                        </li>
                        <li>
                            <Link to="about" className='text-gray-600 hover:border-b-1'>About</Link>
                        </li>
                    </ul>
                </div>
                <div className='p-4 flex flex-col gap-4 justify-center'>
                    <div>Follow Gracie</div>
                    <ul>
                        <li className='text-gray-600'>
                            <a href="www.youtube.com/c/GracieAbrams">Youtube</a>
                        </li>
                        <li className=' text-gray-600'>
                            <a href="www.instagram.com/gracieabrams/">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div className="p-4 flex flex-col gap-4 justify-center">
                    <div>Streams on</div>
                    <ul>
                        <li className='text-gray-600'>Amazon music</li>
                        <li className='text-gray-600'>VEVO</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default FooterBox;