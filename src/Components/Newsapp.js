import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "34dd3159f73f423caa6c76334ed1b09c";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleCategory = (event) => {
        setSearch(event.target.value);
        getData();
    };
    
    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a href="#all">All News</a>
                    <a href="#trending">Trending</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div>
                <p className='head'>Stay Updated with Trendy News</p>
            </div>

            <div className='categoryBtn'>
                <button onClick={handleCategory} value="Sports">Sports</button>
                <button onClick={handleCategory} value="Politics">Politics</button>
                <button onClick={handleCategory} value="Entertainment">Entertainment</button>
                <button onClick={handleCategory} value="Health">Health</button>
                <button onClick={handleCategory} value="Fitness">Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}
            </div>
        </div>
    );
};

export default Newsapp;
