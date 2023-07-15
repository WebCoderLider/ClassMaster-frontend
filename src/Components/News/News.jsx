import React, { useEffect, useState } from 'react';
import './news.css';
import img from './../../images/card.jpg';
import Spinner from '../Spinner/Spinner';

function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    // Tushunarli sana formatini olish uchun funktsiya
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div>
            {
                data ? (
                    <div>
                        <h2 className="text-center m-5 text-warning">Yangiliklar</h2>
                        <div className="news">
                            {data.length >= 1 ? (
                                data.map(el => (
                                    <figure className="snip1493" key={el.id} style={{ cursor: 'pointer' }}>
                                        <div className="image bg-light">
                                            <img src={`http://localhost:5000/news/image/${el.id}`} alt="ls-sample1" />
                                        </div>
                                        <figcaption>
                                            <div className="date">
                                                <span className="day">{new Date().getDate()}</span>
                                                <span className="month">{new Date().toLocaleString('default', { month: 'short' })}</span>
                                            </div>
                                            <h3>{el.news_title}</h3>
                                            <p>{el.news_about}</p>
                                            <footer>
                                                <div className="comments">
                                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    {formatDate(el.news_date)}
                                                </div>
                                            </footer>
                                        </figcaption>
                                    </figure>
                                ))
                            ) : <div><Spinner /></div>}
                        </div>
                    </div>
                ):''
           }
        </div>
    );
}

export default News;
