import React, { useEffect, useState } from 'react';
import Navbar from './../Navbar/Navbar';
import './book.css';
import { Link } from 'react-router-dom';

function Book() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    console.log(data);

    return (
        <div>
            <Navbar />
            <h4 className='my-4 mx-5'>Kutubxonamiz</h4>
            <div className="Books">
                {data.length >= 1 ? (
                    data.map((book) => (
                        <div key={book.id} className="Book">
                            <div className="Book-Img">
                                <img src={book.book_img} alt="" />
                            </div>
                            <div className="Book_body">
                                <h5>{book.book_name}</h5>
                                <Link target='__blank' to={book.book_url}>
                                    <button className="btn btn-outline-warning">
                                        yuklash <i className="fa fa-download" aria-hidden="true"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
    );
}

export default Book;
