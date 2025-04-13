import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import book from '../../assets/logo/book.png';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // How to Make Link Item Active when Scrolling past Section
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'Home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='transparent-nav'>
            <nav className={`navbar navbar-expand-lg site-navigation position-fixed justify-content-around py-2 left-0 right-0 z-10 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
                <Container className='d-flex justify-around py-3 px-5'>
                    <div className='d-flex'>
                        <img src={book} alt="book logo" className='w-12 h-12' />
                        <h1 className='fs-1' style={{ fontFamily: 'Harrington', color: isScrolled ? '#000' : '#fff', }}>Christian</h1>
                    </div>
                    <div className='pt-3' style={{ color: isScrolled ? '#000' : '#fff' }}>
                        <ul className='d-flex font-medium'>
                            {['Home', 'About', 'Sermons', 'Events', 'Causes', 'Blog', 'Pastor', 'Contact'].map((section) => (
                                <li key={section}>
                                    <a href={`#${section}`} className={`text-uppercase px-4 text-xs tracking-widest ${activeSection === section ? 'active' : ''}`}>{section}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    );
};
export default Nav;