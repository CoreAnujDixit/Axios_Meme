import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './Random.css'

// const API_KEY = process.env.API_KEYS;
const Tags = () => {
    const [gif, setgif] = useState('')
    async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=og9oJi6Fsj4boENsrU3gp7Lz0Lx0CN41&tag=&rating=g

`;
        const { data } = await axios.get(url)
        const ImageSource = data.data.images.downsized_large.url;
        setgif(ImageSource);
    }

    useEffect(() => {
        fetchData();
    }, [])

    function ClickHandler() {
        fetchData();
    }
    return (
        <div className=' mt-20 font-bold w-1/2 h-64 rounded-md border border-black bg-green-300 ml-80'>
            <h1>Random Gif</h1>
            <img src={gif} alt="" className='
            w-72 relative items-center flex
            left-48 h-40' />
            <button onClick={ClickHandler} className="mt-3 bg-white py-2 px-6 rounded-full cursor-pointer">feferferrrr</button>
        </div>
    )
}

export default Tags;