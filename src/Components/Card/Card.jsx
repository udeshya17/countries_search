import React, { useState, useEffect } from "react";
import styles from './Card.module.css';
import {FetchApi} from '../Api/Api';



function Card(){
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(()=>{
        let getData = async()=>{
            let response = await FetchApi();
            setData(response);
        }
        getData();
    },[]);

    const handleChange = (e)=>{
        setSearchQuery(e.target.value);
    }

    const searchedData = data.filter(item=>
        item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!data.length) {
        return <div>Loading...</div>;
    }

    return (
        
        <div>
            <div className={styles.search}>
                <input 
                    style={{width:'600px', height:'30px', textAlign:'left'}} 
                    type="text" 
                    placeholder="Search Country"
                    value={searchQuery}
                    onChange={handleChange}
                    /> 
            </div>
            <div className={styles.container}>
            {searchedData.map((item, index) => (
                <div key={index} className={styles.countryCard}>
                    <img src={item.flags.png} alt={item.abbr} className={styles.image}/>
                    <p className={styles.title}>{item.name.common}</p>
                </div>
            ))}
        </div>
        </div>

    )
}

export default Card;