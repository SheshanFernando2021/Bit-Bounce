import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './featured.css';
import axios from 'axios';

const Featured = () => {
    const [data, setData] = useState(null);
    const apiKey = 'CG-URYyHTqzhz9pEBriyvxGALBq';
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&apiKey=${apiKey}`;

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!data) return null;

    return (
        <div className='featured' id='section2'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2 className="this">Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <br />
                    <button className='btn'>See More Coins</button>
                </div>

                {/* Right */}
                <div className='right'>
                    {data.slice(0, 6).map((crypto, index) => (
                        <div className='card' key={index}>
                            <div className='top'>
                                <img src={crypto.image} alt='' />
                            </div>
                            <div>
                                <h5>{crypto.name}</h5>
                                <p>${crypto.current_price.toLocaleString()}</p>
                            </div>
                            {crypto.price_change_percentage_24h < 0 ? (
                                <span className='red'>
                                    <FiArrowDown className='icon' />
                                    {crypto.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {crypto.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;