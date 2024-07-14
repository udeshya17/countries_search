import React, { useState, useEffect } from "react";
import styles from './Card.module.css';
import { FetchApi } from '../Api/Api';

function Card() {
    const [data, setData] = useState([]); // Store country data
    const [searchQuery, setSearchQuery] = useState(''); // Track user input for searching

    useEffect(() => {
        const getData = async () => {
            let response = await FetchApi(); // Fetch country data from API
            setData(response); // Store fetched data
        };
        getData();
    }, []);

    const handleChange = (e) => {
        setSearchQuery(e.target.value); // Update search query on input change
    };

    const searchedData = data.filter(item =>
        item.name.common.toLowerCase().includes(searchQuery.toLowerCase()) // Filter countries based on search query
    );

    // if (!data.length) {
    //     return <div>Loading...</div>; // Show loading while data is being fetched
    // }

    return (
        <div>
            <div className={styles.search}>
                <input 
                    style={{ width: '600px', height: '30px', textAlign: 'left' }} 
                    type="text" 
                    placeholder="Search Country"
                    value={searchQuery} 
                    onChange={handleChange} // Update search query on input change
                />
            </div>
            <div className={styles.container}>
                {searchedData.map((item, index) => (
                    <div key={index} className={styles.countryCard}> 
                        <img src={item.flags.png} alt={item.abbr} className={styles.image} />
                        <p className={styles.title}>{item.name.common}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
