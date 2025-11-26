import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Gracie(props) {
    

    const streamData = useLoaderData()

    
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:items-center bg-gray-100'>
                <div>
                    <img src="https://tse2.mm.bing.net/th/id/OIP.Jq3EW1JpTZydyMa1B8gIPAHaFG?pid=ImgDet&w=474&h=326&rs=1&o=7&rm=3" className='w-full lg:max-w-2xl' alt="" />
                </div>
                <div className='flex flex-col px-4 lg:max-w-lg'>
                    <h1 className='text-2xl italic'>Gracie Abrams</h1>
                    <div className='py-2'>Streams on youtube - {streamData?.items[0].statistics.viewCount} </div>
                </div>
            </div>
        </>
    );
}

export default Gracie;

export const viewCountLoader = async () => {
    const id = 'UCwXDwwxNVRXPcPk7ABkakdA'
    const api = 'AIzaSyAbkeHGCUE99bbM2FiL_l6R7i16pPkd_nQ'
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${api}`)
    return res.json();
}