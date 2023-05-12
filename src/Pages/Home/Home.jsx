import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='section-home'>
            <div className="banner">
                <div className="left-side">
                    <h1 className="banner-title">Best Online Resume/CV Generator</h1>
                    <button className="btn btn-primary"><Link to='/'>Explore Now</Link></button>
                    <button className="btn btn-outline"><Link to='/contact'>Contact Us</Link></button>
                </div>
                <div className="right-side">
                    <h2 className="heading-primary">You can create -</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} className='icon'/><span>Beautiful</span> Resume/CV within a minute.</li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon'/><span>A4</span> size and PDF formate available.</li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon'/><span>100%</span> Online editable.</li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon'/><span>Easy</span> to Download.</li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon'/><span>Free</span> to cost.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;