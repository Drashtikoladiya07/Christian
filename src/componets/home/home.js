import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import about from '../../assets/img/about.webp';
import book from '../../assets/logo/book.png';
import prey from '../../assets/logo/prey.png';
import rings from '../../assets/logo/rings.png';
import socialcare from '../../assets/logo/socialcare.png';
import church from '../../assets/logo/church.png';
import event1 from '../../assets/img/event-1.webp';
import event2 from '../../assets/img/event-2.webp';
import event3 from '../../assets/img/event-3.webp';
import event4 from '../../assets/img/event-4.webp';
import event5 from '../../assets/img/event-5.webp';
import event6 from '../../assets/img/event-6.webp';
import cause1 from '../../assets/img/cause-1.webp';
import cause2 from '../../assets/img/cause-2.webp';
import cause3 from '../../assets/img/cause-3.webp';
import cause4 from '../../assets/img/cause-4.webp';
import blog1 from '../../assets/img/image_1.webp';
import blog2 from '../../assets/img/image_2.webp';
import blog3 from '../../assets/img/image_3.webp';
import staff1 from '../../assets/img/staff-1.webp';
import staff2 from '../../assets/img/staff-2.webp';
import staff3 from '../../assets/img/staff-3.webp';
import staff4 from '../../assets/img/staff-4.webp';
import error from '../../assets/logo/icon_error.png';
import gallery1 from '../../assets/img/gallery-1.webp';
import gallery2 from '../../assets/img/gallery-2.webp';
import gallery3 from '../../assets/img/gallery-3.webp';
import gallery4 from '../../assets/img/gallery-4.webp';

function Home() {
    const data = {
        users: [
            {
                icon: 'fa fa-users',
                num: '98,087',
                title: 'Members',
            },
            {
                icon: 'fa fa-user',
                num: '309',
                title: 'Pastors',
            },
            {
                icon: 'fa fa-money-bill-1',
                num: '9,350,500',
                title: 'Donation',
            },
            {
                icon: 'fa fa-home',
                num: '206',
                title: 'Churches',
            },
        ],
        services: [
            {
                img: prey,
                head: 'Daily Prayers',
                title: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: book,
                head: 'Continous Teaching',
                title: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: church,
                head: 'Set of Sermons',
                title: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            // {
            //     img: rings,
            //     head: 'Wedding',
            //     title: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            // },
            {
                img: socialcare,
                head: 'Community Helpers',
                title: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
        ],
        events: [
            {
                img: event1,
                time: '8:30am - 11:30am',
                head: 'Sharing Our Faith & Gospel',
                icon: 'fa fa-user',
                title1: 'by pastor:',
                title2: 'Jerry Simon',
                p: '203 Fake St. Mountain View, San Francisco, California, USA',
                btn: 'Join Us',
            },
            {
                img: event2,
                time: '8:30am - 11:30am',
                head: 'Sharing Our Faith & Gospel',
                icon: 'fa fa-user',
                title1: 'by pastor:',
                title2: 'Jerry Simon',
                p: '203 Fake St. Mountain View, San Francisco, California, USA',
                btn: 'Join Us',
            },
            {
                img: event3,
                time: '8:30am - 11:30am',
                head: 'Sharing Our Faith & Gospel',
                icon: 'fa fa-user',
                title1: 'by pastor:',
                title2: 'Jerry Simon',
                p: '203 Fake St. Mountain View, San Francisco, California, USA',
                btn: 'Join Us',
            },
            {
                img: event4,
                time: '8:30am - 11:30am',
                head: 'Sharing Our Faith & Gospel',
                icon: 'fa fa-user',
                title1: 'by pastor:',
                title2: 'Jerry Simon',
                p: '203 Fake St. Mountain View, San Francisco, California, USA',
                btn: 'Join Us',
            },
            {
                img: event5,
                time: '8:30am - 11:30am',
                head: 'Sharing Our Faith & Gospel',
                icon: 'fa fa-user',
                title1: 'by pastor:',
                title2: 'Jerry Simon',
                p: '203 Fake St. Mountain View, San Francisco, California, USA',
                btn: 'Join Us',
            },
            {
                img: event6,
                time: '8:30am - 11:30am',
                head: 'Sharing Our Faith & Gospel',
                icon: 'fa fa-user',
                title1: 'by pastor:',
                title2: 'Jerry Simon',
                p: '203 Fake St. Mountain View, San Francisco, California, USA',
                btn: 'Join Us',
            },
        ],
        causes: [
            {
                img: cause1,
                head: 'Health care, Food',
                icon: 'fa fa-user',
                title1: '$80,000',
                title2: 'Target',
                title3: '/ $55,000',
                title4: 'Goal',
                p: 'A small river named Duden flows by their place and supplies it with the necessary.',
                btn: 'Donate Now',
            },
            {
                img: cause2,
                head: 'Restored the Old City Church',
                icon: 'fa fa-user',
                title1: '$80,000',
                title2: 'Target',
                title3: '/ $55,000',
                title4: 'Goal',
                p: 'A small river named Duden flows by their place and supplies it with the necessary.',
                btn: 'Donate Now',
            },
            {
                img: cause3,
                head: 'Save Childern For Hunger',
                icon: 'fa fa-user',
                title1: '$80,000',
                title2: 'Target',
                title3: '/ $55,000',
                title4: 'Goal',
                p: 'A small river named Duden flows by their place and supplies it with the necessary.',
                btn: 'Donate Now',
            },
            {
                img: cause4,
                head: 'Save Childern For Hunger',
                icon: 'fa fa-user',
                title1: '$80,000',
                title2: 'Target',
                title3: '/ $55,000',
                title4: 'Goal',
                p: 'A small river named Duden flows by their place and supplies it with the necessary.',
                btn: 'Donate Now',
            },
        ],
        blog: [
            {
                img: blog1,
                head: 'Why Lead Generation is Key for Business Growth',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                btn: 'Read More ->',
                title1: 'Admin',
                title2: '3',
            },
            {
                img: blog2,
                head: 'Why Lead Generation is Key for Business Growth',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                btn: 'Read More ->',
                title1: 'Admin',
                title2: '3',
            },
            {
                img: blog3,
                head: 'Why Lead Generation is Key for Business Growth',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                btn: 'Read More ->',
                title1: 'Admin',
                title2: '3',
            },
        ],
        pastor: [
            {
                img: staff1,
                head: 'Lloyd Wilson',
                p: 'Lead Pastor',
            },
            {
                img: staff2,
                head: 'Rachel Parker',
                p: 'Lead Pastor',
            },
            {
                img: staff3,
                head: 'Ian Smith',
                p: 'Lead Pastor',
            },
            {
                img: staff4,
                head: 'Alicia Henderson',
                p: 'Lead Pastor',
            },
        ],
        contactimg: [
            { img: gallery1 },
            { img: gallery2 },
            { img: gallery3 },
            { img: gallery4 },
        ],
        footer1: [
            { p: 'Staff' }, { p: 'Beliefs' }, { p: 'History' }, { p: 'Mission' }, { p: 'Wedding & Funerals' }, { p: 'Jobs & Internship' }, { p: 'Fellowships' },
        ],
        footer2: [
            { p: 'Home Groups' }, { p: 'Recovery Groups' }, { p: 'Memberships' }, { p: 'Children & Students' }, { p: 'Volunteer' }, { p: 'Counseling' }, { p: 'Assistance' },
        ],
    };

    return (
        <div className='home'>
            <section id='Home'>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <div className="bg-bgImage1 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid">
                                <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))' }}>
                                    <Container className='py-64'>
                                        <Row className='px-5'>
                                            <Col lg={12} data-aos="fade-up" data-aos-duration="1000">
                                                <div className='text-center'>
                                                    <h2 className='text-uppercase text-white tracking-widest'>Christian Church</h2>
                                                    <h1 className="text-uppercase fs-1 text-white font-serif fw-bold py-4 tracking-widest">Following <span className="text-warning">Jesus<br /></span> wherever we are</h1>
                                                    <p className='text-white leading-8 text-lg tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts.</p>
                                                    <div className='py-4'>
                                                        <button className="btn btn-warning text-white px-4 mx-1 rounded-5">Be part of us</button>
                                                        <button className="btn btn-outline-warning hover:text-white px-4 mx-1 rounded-5">Read more</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="bg-bgImage2 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid">
                                <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))' }}>
                                    <Container className='py-64'>
                                        <Row className='px-5'>
                                            <Col lg={12} data-aos="fade-up" data-aos-duration="1000">
                                                <div className='text-center'>
                                                    <h2 className='text-uppercase text-white tracking-widest'>Christian Church</h2>
                                                    <h1 className="text-uppercase fs-1 text-white font-serif fw-bold py-4 tracking-widest">We <span className="text-warning">Love</span> God, We <br />Believe in God</h1>
                                                    <p className='text-white leading-8 text-lg tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts.</p>
                                                    <div className='py-4'>
                                                        <button className="btn btn-warning text-white px-4 mx-1 rounded-5">Be part of us</button>
                                                        <button className="btn btn-outline-warning hover:text-white px-4 mx-1 rounded-5">Read more</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='About'>
                <Row className='g-0'>
                    <Col lg={6} md={12}>
                        <img src={about} alt="about" className='w-100 pb-0 mb-0 img-fluid' style={{ height: '38rem' }} />
                    </Col>
                    <Col lg={6} md={12} className='p-20  border-bottom' data-aos="fade-up" data-aos-duration="2000">
                        <h1 className="fs-3 font-serif fw-bold py-5 tracking-widest" >Welcome to <span className="text-warning">Christian </span> Church</h1>
                        <p className='leading-7 text-neutral-400 tracking-wider'>Far far away,<strong>creative</strong> behind the word mountains, far from the <br />countries Vokalia and Consonantia, there live the <strong>success</strong> blind texts. <br />Separated they live in Bookmarksgrove</p>
                        <p className='py-4 leading-7 text-neutral-400 tracking-wider'>A small river named Duden flows by their place and supplies it with <br />the necessary regelialia. It is a paradisematic country, in which <br />roasted parts of sentences fly into your mouth.</p>
                        <div className='d-flex py-1'>
                            <i className="fa-solid fa-check text-white bg-warning rounded-circle mt-1 px-1 text-xs" ></i>
                            <h1 className='ps-4 text-neutral-400 tracking-wider'>Even the all-powerful Pointing</h1>
                        </div>
                        <div className='d-flex py-1'>
                            <i className="fa-solid fa-check text-white bg-warning rounded-circle mt-1 px-1 text-xs" ></i>
                            <h1 className='ps-4 text-neutral-400 tracking-wider'>Behind the word mountains</h1>
                        </div>
                        <div className='d-flex py-1'>
                            <i className="fa-solid fa-check text-white bg-warning rounded-circle mt-1 px-1 text-xs" ></i>
                            <h1 className='ps-4 text-neutral-400 tracking-wider'>Separated they live in Bookmarksgrove</h1>
                        </div>
                    </Col>
                </Row>

                <div className='border-bottom ps-5' data-aos="fade-up" data-aos-duration="2000">
                    <Row className='g-0 text-center ps-5'>
                        {data.users.map((item, index) => (
                            <Col lg={3} md={6} key={item.title + index} className='d-flex ps-4' >
                                <div className='text p-5'>
                                    <i className={item.icon + ' text-warning text-5xl'}></i>
                                    <h1 className='pt-4 fs-2 fw-bold'>{item.num}</h1>
                                    <h4 className='pt-3 text-uppercase font-serif fw-bold text-sm text-neutral-600 tracking-widest'>{item.title}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                <Container>
                    <div className='text-center py-20' data-aos="fade-up" data-aos-duration="2000">
                        <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Services</h1>
                        <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Christian Church Services</h1>
                        <h1 className=' text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>
                    </div>
                </Container>

                <Container className='pb-20' data-aos="fade-up" data-aos-duration="2000">
                    <Row className='text-center'>
                        {data.services.map((item, index) => (
                            <Col lg={3} md={6} key={item.title + index} className='d-flex' >
                                <div className='py-5 px-3'>
                                    <div className='flex justify-center'>
                                        <img src={item.img} className='w-14' />
                                    </div>
                                    <h1 className='pt-4 font-serif text-xl' >{item.head}</h1>
                                    <h4 className='pt-3 text-neutral-400'>{item.title}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id='Sermons'>
                <div className='py-28 bg-neutral-100'>
                    <Container>
                        <div className='text-center py-20' data-aos="fade-up" data-aos-duration="2000">
                            <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Services</h1>
                            <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Christian Church Sermons</h1>
                            <h1 className=' text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>
                        </div>
                    </Container>

                    <Container className='px-5'>
                        <Row className='px-5'>
                            <Col lg={4} md={12} className='py-5'>
                                <div data-aos="fade-up" data-aos-duration="500">
                                    <div className="bg-sermon1 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid rounded-1">
                                        <div className='text-center text-white py-44'>
                                            <h1 className='text-uppercase text-white text-xs tracking-widest'>by pastor:</h1>
                                            <h1 className='pt-2 pb-4 fw-bold text-3xl' style={{ fontFamily: 'Harrington' }}>Jerry Simon</h1>
                                            <div>
                                                <a href='https://vimeo.com/45830194' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase tracking-widest text-white px-3 mx-1 rounded-3 text-xs"><i className="fa-solid fa-play"></i> Watch</button></a>
                                                <a href='#' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase text-white px-3 mx-1 rounded-3 text-xs tracking-widest"><i className="fa-solid fa-download"></i> Download</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center py-3'>
                                        <h1 className='fs-4 font-serif'>Let the Sunset Inspire You</h1>
                                        <h1 className='py-2 text-neutral-400 tracking-widest'>July 01, 2019</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} className='py-5'>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="bg-sermon2 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid rounded-1">
                                        <div className='text-center text-white py-44'>
                                            <h1 className='text-uppercase text-white text-xs tracking-widest'>by pastor:</h1>
                                            <h1 className='pt-2 pb-4 fw-bold text-3xl' style={{ fontFamily: 'Harrington' }}>Jerry Simon</h1>
                                            <div>
                                                <a href='https://vimeo.com/45830194' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase tracking-widest text-white px-3 mx-1 rounded-3 text-xs"><i className="fa-solid fa-play"></i> Watch</button></a>
                                                <a href='#' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase text-white px-3 mx-1 rounded-3 text-xs tracking-widest"><i className="fa-solid fa-download"></i> Download</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center py-3'>
                                        <h1 className='fs-4 font-serif'>Developing Spiritual Mentality</h1>
                                        <h1 className='py-2 text-neutral-400 tracking-widest'>July 01, 2019</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} className='py-5'>
                                <div data-aos="fade-up" data-aos-duration="2000">
                                    <div className="bg-sermon3 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid rounded-1">
                                        <div className='text-center text-white py-44'>
                                            <h1 className='text-uppercase text-white text-xs tracking-widest'>by pastor:</h1>
                                            <h1 className='pt-2 pb-4 fw-bold text-3xl' style={{ fontFamily: 'Harrington' }}>Jerry Simon</h1>
                                            <div>
                                                <a href='https://vimeo.com/45830194' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase tracking-widest text-white px-3 mx-1 rounded-3 text-xs"><i className="fa-solid fa-play"></i> Watch</button></a>
                                                <a href='#' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase text-white px-3 mx-1 rounded-3 text-xs tracking-widest"><i className="fa-solid fa-download"></i> Download</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center py-3'>
                                        <h1 className='fs-4 font-serif'>Let the Bible Motivate You</h1>
                                        <h1 className='py-2 text-neutral-400 tracking-widest'>July 01, 2019</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className='px-5'>
                        <Row className='px-5'>
                            <Col lg={4} md={12}>
                                <div data-aos="fade-up" data-aos-duration="500">
                                    <div className="bg-sermon4 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid rounded-1">
                                        <div className='text-center text-white py-44'>
                                            <h1 className='text-uppercase text-white text-xs tracking-widest'>by pastor:</h1>
                                            <h1 className='pt-2 pb-4 fw-bold text-3xl' style={{ fontFamily: 'Harrington' }}>Jerry Simon</h1>
                                            <div>
                                                <a href='https://vimeo.com/45830194' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase tracking-widest text-white px-3 mx-1 rounded-3 text-xs"><i className="fa-solid fa-play"></i> Watch</button></a>
                                                <a href='#' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase text-white px-3 mx-1 rounded-3 text-xs tracking-widest"><i className="fa-solid fa-download"></i> Download</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center py-3'>
                                        <h1 className='fs-4 font-serif'>Let the Sunset Inspire You</h1>
                                        <h1 className='py-2 text-neutral-400 tracking-widest'>July 01, 2019</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12}>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="bg-sermon5 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid rounded-1">
                                        <div className='text-center text-white py-44'>
                                            <h1 className='text-uppercase text-white text-xs tracking-widest'>by pastor:</h1>
                                            <h1 className='pt-2 pb-4 fw-bold text-3xl' style={{ fontFamily: 'Harrington' }}>Jerry Simon</h1>
                                            <div>
                                                <a href='https://vimeo.com/45830194' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase tracking-widest text-white px-3 mx-1 rounded-3 text-xs"><i className="fa-solid fa-play"></i> Watch</button></a>
                                                <a href='#' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase text-white px-3 mx-1 rounded-3 text-xs tracking-widest"><i className="fa-solid fa-download"></i> Download</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center py-3'>
                                        <h1 className='fs-4 font-serif'>Developing Spiritual Mentality</h1>
                                        <h1 className='py-2 text-neutral-400 tracking-widest'>July 01, 2019</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12}>
                                <div data-aos="fade-up" data-aos-duration="2000">
                                    <div className="bg-sermon6 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid rounded-1">
                                        <div className='text-center text-white py-44'>
                                            <h1 className='text-uppercase text-white text-xs tracking-widest'>by pastor:</h1>
                                            <h1 className='pt-2 pb-4 fw-bold text-3xl' style={{ fontFamily: 'Harrington' }}>Jerry Simon</h1>
                                            <div>
                                                <a href='https://vimeo.com/45830194' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase tracking-widest text-white px-3 mx-1 rounded-3 text-xs"><i className="fa-solid fa-play"></i> Watch</button></a>
                                                <a href='#' className='text-decoration-none'><button className="btn btn-outline-warning text-uppercase text-white px-3 mx-1 rounded-3 text-xs tracking-widest"><i className="fa-solid fa-download"></i> Download</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center py-3'>
                                        <h1 className='fs-4 font-serif'>Let the Bible Motivate You</h1>
                                        <h1 className='py-2 text-neutral-400 tracking-widest'>July 01, 2019</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section id='Events'>
                <div className="bg-bgImage3 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid">
                    <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))' }}>
                        <div className='text-center text-white py-40'>
                            <h1 className='text-uppercase fw-bold text-white text-xs tracking-widest'>Events</h1>
                            <h1 className='pt-2 fs-1 font-serif tracking-widest'>Upcoming Events</h1>
                        </div>
                    </div>
                </div>

                <Row className='g-0 pb-5'>
                    {data.events.map((item, index) => (
                        <Col lg={4} md={6} key={item.item + index} className='position-relative bottom-10'>
                            <div className="max-w-md mx-auto bg-white d-flex shadow-md mb-4" data-aos="fade-up" data-aos-duration="2000">
                                <div className="relative">
                                    <img src={item.img} alt='event' className='w-96 h-100' />
                                </div>
                                <div className="justify-between py-4">
                                    <h1 className='text-white bg-warning ps-3 py-1 position-relative tracking-widest right-4'>{item.time}</h1>
                                    <h1 className='px-3 pt-4 tracking-wider'>{item.head}</h1>
                                    <div className='d-flex py-3 px-3'>
                                        <i className={item.icon}></i>
                                        <h1 className='fw-bold px-2 text-xs text-neutral-400 tracking-wider'>{item.title1}</h1>
                                        <h1 className='text-warning fw-bold text-xs tracking-wider'>{item.title2}</h1>
                                    </div>
                                    <h1 className='px-3 text-neutral-400 tracking-wider'>{item.p}</h1>
                                    <a href='#'><button className="btn btn-warning text-white tracking-widest rounded-5 mt-4 mx-3">{item.btn}</button></a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section id='Causes'>
                <Container>
                    <div className='text-center py-20' data-aos="fade-up" data-aos-duration="2000">
                        <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Donate Charity</h1>
                        <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Causes Needs Our Help</h1>
                        <h1 className=' text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>
                    </div>
                </Container>

                <Container className='p-5'>
                    <Row>
                        {data.causes.map((item, index) => (
                            <Col lg={3} md={6} key={item.item + index} className='position-relative bottom-10'>
                                <div className="max-w-md mx-auto shadow-md mb-4" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="relative">
                                        <img src={item.img} alt='event' className='w-full h-80' />
                                    </div>
                                    <div className="justify-between py-4">
                                        <h1 className='px-3 font-serif fw-bold leading-6 tracking-wider'>{item.head}</h1>
                                        <div className='d-flex py-3 px-3 text-xs text-neutral-400 tracking-wider'>
                                            <h1 className='fw-bold pe-2'>{item.title1}</h1>
                                            <h1>{item.title2}</h1>
                                            <h1 className='fw-bold px-2'>{item.title3}</h1>
                                            <h1>{item.title4}</h1>
                                        </div>
                                        <h1 className='px-3 text-neutral-400 tracking-wider'>{item.p}</h1>
                                        <a href='#'><button className="btn btn-warning text-white tracking-widest rounded-5 mt-4 mx-3">{item.btn}</button></a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Container className='px-40'>
                    <div className=' py-10 px-5 position-relative top-10 bg-neutral-900'>
                        <h1 className='fs-2 fw-bold text-white tracking-wider'>Donation so far <span className='text-warning'>$9,891,000</span></h1>
                        <p className='py-4 text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <a href='#'><button className="btn p-3 mb-3 btn-outline-warning tracking-widest text-white rounded-5">Donate Now</button></a>
                    </div>
                </Container>

                <div className="bg-bgImage4 h-100 w-screen bg-no-repeat bg-cover bg-center img-fluid">
                    <div style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' }}>
                        <div className='text-white py-32 col-lg-6 offset-4 '>
                            <h1 className='fw-bold text-white text-lg tracking-widest' style={{ fontFamily: 'Harrington' }}>Jesus Christ Said:</h1>
                            <h1 className='py-4 text-warning font-mono fw-bold leading-6'>"16 For God so loved the world, that he gave his only begotten Son, that whosoever <br />believeth in him should not perish, but have everlasting life."</h1>
                            <h1 className='text-slate-2 fs-5 font-serif tracking-widest'><span className='text-neutral-400'>Bible:</span> John 3:16 KJV</h1>
                        </div>
                    </div>
                </div>



            </section>

            <section id='Blog'>
                <div className='py-5 bg-neutral-100'>
                    <Container>
                        <div className='text-center pt-20' data-aos="fade-up" data-aos-duration="2000">
                            <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Blog</h1>
                            <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Read the Latest Blog</h1>
                            <h1 className=' text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>
                        </div>
                    </Container>


                    <Container className='p-5'>
                        <Row className='px-5'>
                            {data.blog.map((item, index) => (
                                <Col lg={4} md={12} key={item.item + index}>
                                    <div className="max-w-md mx-auto mb-4" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="relative">
                                            <div className='d-flex text-white position-relative top-12'>
                                                <h1 className='fs-1 px-2'>04</h1>
                                                <div className='pt-2 tracking-widest'>
                                                    <h1>2019</h1>
                                                    <h1>June</h1>
                                                </div>
                                            </div>
                                            <img src={item.img} alt='event' className='w-full h-80' />
                                        </div>
                                        <div className="justify-between py-4">
                                            <a href='#'><h1 className='px-3 font-serif tracking-wider hover:text-yellow-500 pb-2 fw-bold leading-6'>{item.head}</h1></a>
                                            <h1 className='px-3 text-neutral-400 tracking-widest'>{item.p}</h1>
                                            <div className='d-flex justify-between pt-4 px-3'>
                                                <a href='#'><button className="btn btn-warning tracking-widest text-white rounded-5">{item.btn}</button></a>
                                                <div className='d-flex pt-2 text-sm text-neutral-400'>
                                                    <a href='#' className='d-flex'>
                                                        <h1 className='pe-3 fs-6 tracking-widest'>{item.title1}</h1>
                                                        <i className="fa-solid fa-message pe-2 pt-1"></i>
                                                        <h1 className='fs-6'>{item.title2}</h1>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </section>

            <section id='Pastor'>
                <Container>
                    <div className='text-center pt-20' data-aos="fade-up" data-aos-duration="2000">
                        <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Pastors</h1>
                        <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Church Pastor</h1>
                        <h1 className=' text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>
                    </div>
                </Container>

                <Container className='p-5'>
                    <Row className='px-5'>
                        {data.pastor.map((item, index) => (
                            <Col lg={3} md={6} sm={12} key={item.item + index}>
                                <div className="max-w-md mx-auto py-5" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="relative">
                                        <img src={item.img} alt='event' className='h-80 w-96' />
                                    </div>
                                    <div className="text-center py-3">
                                        <h1 className='px-3 font-serif tracking-widest text-lg'>{item.head}</h1>
                                        <h1 className='px-3 pt-2 tracking-widest text-uppercase text-sm text-neutral-400'>{item.p}</h1>
                                        <div className='d-flex justify-around pt-4 text-sm'>
                                            <a href='#' className='d-flex justify-around'>
                                                <i className="fa-brands fa-twitter px-2"></i>
                                                <i className="fa-brands fa-facebook px-2"></i>
                                                <i className="fa-brands fa-google px-2"></i>
                                                <i className="fa-brands fa-instagram px-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id='Contact'>
                <Container>
                    <div className='text-center pb-20' data-aos="fade-up" data-aos-duration="2000">
                        <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Contact</h1>
                        <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Contact Me</h1>
                        <h1 className=' text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>
                    </div>
                </Container>

                <Container>
                    <Row className='px-32'>
                        <Col lg={5} data-aos="fade-up" data-aos-duration="1000">
                            <div className='d-flex p-4 mb-2 bg-neutral-100'>
                                <i className="fa-solid fa-signs-post text-warning pt-2 text-sm"></i>
                                <div>
                                    <h1 className='px-3 font-serif text-lg tracking-widest'>Address</h1>
                                    <h1 className='ps-3 pt-3 pb-2 tracking-widest text-sm text-neutral-400'>198 West 21th Street, Suite 721 New York NY 10016</h1>
                                </div>
                            </div>
                            <div className='d-flex p-4 my-2 bg-neutral-100'>
                                <i className="fa-solid fa-phone text-warning pt-2 text-sm"></i>
                                <div>
                                    <h1 className='px-3 font-serif text-lg tracking-widest'>Contact Number</h1>
                                    <h1 className='px-3 pt-3 pb-2 tracking-widest text-warning text-sm text-neutral-400'><a href="tel://1234567920">+ 1235 2355 98</a></h1>
                                </div>
                            </div>
                            <div className='d-flex p-4 my-2 bg-neutral-100'>
                                <i className="fa-solid fa-paper-plane text-warning pt-2 text-sm"></i>
                                <div>
                                    <h1 className='px-3 font-serif text-lg tracking-widest'>Email Address</h1>
                                    <h1 className='px-3 pt-3 pb-2 tracking-widest text-warning text-sm text-neutral-400'><a href="mailto:info@yoursite.com">info@yoursite.com</a></h1>
                                </div>
                            </div>
                            <div className='d-flex p-4 my-2 bg-neutral-100'>
                                <i className="fa-solid fa-globe text-warning pt-2 text-sm"></i>
                                <div>
                                    <h1 className='px-3 font-serif text-lg tracking-widest'>Website</h1>
                                    <h1 className='px-3 pt-3 pb-2 tracking-widest text-warning text-sm text-neutral-400'><a href="#">yoursite.com</a></h1>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} data-aos="fade-up" data-aos-duration="2000">
                            <form id="contact-form" className='p-10 pb-44 bg-neutral-100'>
                                <Row className='text-sm'>
                                    <Col lg={12}>
                                        <input type="name" placeholder="Your Name" className='w-100 p-2 my-2 border rounded tracking-widest' />
                                    </Col>
                                    <Col lg={12}>
                                        <input type="text" placeholder="Your E-mail" className='w-100 p-2 my-2 border rounded tracking-widest' />
                                    </Col>
                                    <Col lg={12}>
                                        <input type="subject" placeholder="Subject" className='w-100 p-2 my-2 border rounded tracking-widest' />
                                    </Col>
                                    <Col lg={12}>
                                        <textarea placeholder="Message" className='w-100 h-100 p-2 my-3 border rounded tracking-widest'></textarea>
                                    </Col>
                                    <a href='#'><button className="btn btn-warning tracking-widest text-white rounded-5 mt-5 px-4 py-2">Send Message</button></a>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>

                <div className='text-center p-28 bg-gray-200'>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <div className='flex justify-center'>
                            <img src={error} alt="error" />
                        </div>
                        <h3 className='fs-5 py-2 text-gray-700 tracking-wider'>Sorry! Something went wrong.</h3>
                        <p className='text-gray-500 text-xs pt-3 tracking-wider'>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                    </div>
                </div>

                <Container>
                    <div className='text-center pt-20 pb-16' data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='text-uppercase text-sm text-neutral-400 tracking-widest'>Gallery</h1>
                        <h1 className='pt-3 pb-4 fs-1 font-serif fw-bold'>Christian Church Photo Gallery</h1>
                    </div>
                </Container>

                <Row className='g-0'>
                    {data.contactimg.map((item, index) => (
                        <Col lg={3} md={6} key={item.item + index} className='position-relative bottom-10'>
                            <a href={item.img}><img src={item.img} alt='event' className='w-full h-96 px-3' data-aos="fade-up" data-aos-duration="2000" /></a>
                        </Col>
                    ))}
                </Row>

                <footer className='bg-neutral-900 p-28 px-40'>
                    <Container>
                        <Row className='g-0'>
                            <Col lg={3} md={6} sm={12}>
                                <h1 className='text-white fs-3' style={{ fontFamily: 'Harrington' }}><span className='text-warning'>Christian</span> Church</h1>
                                <p className='py-4 text-neutral-400 tracking-wider'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <a href="#"><i className="fa-brands fa-twitter me-3 text-zinc-300 fs-5 p-3 my-3 bg-neutral-700 rounded-5"></i></a>
                                    <a href="#"><i className="fa-brands fa-facebook me-3 text-zinc-300 fs-5 p-3 my-3 bg-neutral-700 rounded-5"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram me-3 text-zinc-300 fs-5 p-3 my-3 bg-neutral-700 rounded-5"></i></a>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className='px-5'>
                                <h1 className='text-white fs-5 pb-3 fw-bold tracking-widest'>About</h1>
                                <div className='text-neutral-400 pt-3'>
                                    {data.footer1.map((item, index) => (
                                        <a href='#' className='d-flex' key={item.item + index}>
                                            <i className="fa-solid fa-chevron-right pe-2 text-xs pt-1"></i>
                                            <p className='hover:text-amber-300 pb-3'>{item.p}</p>
                                        </a>
                                    ))}
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} className='px-4'>
                                <h1 className='text-white fs-5 pb-3 fw-bold tracking-widest'>Connect</h1>
                                <div className='text-neutral-400 pt-3'>
                                    {data.footer2.map((item, index) => (
                                        <a href='#' className='d-flex' key={item.item + index}>
                                            <i className="fa-solid fa-chevron-right pe-2 text-xs pt-1"></i>
                                            <p className='hover:text-amber-300 pb-3'>{item.p}</p>
                                        </a>
                                    ))}
                                </div></Col>
                            <Col lg={3} md={6} sm={12} className='px-4'>
                                <h1 className='text-white fs-5 pb-3 fw-bold tracking-widest'>Service Hours</h1>
                                <h1 className='text-xl pb-2 pt-3 text-zinc-600 font-serif'>Saturday Prayer Meeting:</h1>
                                <h1 className='text-xl pb-2 text-amber-300 font-serif'>10:00 am to 11:30 am</h1>
                                <h1 className='text-xl pb-2 pt-3 text-zinc-600 font-serif'>Sunday Service:</h1>
                                <h1 className='text-xl pb-2 text-amber-300 font-serif'>8:30 am to 11:30 am</h1>
                            </Col>
                        </Row>
                        <h1 className='text-neutral-400 text-center pt-5 text-lg'>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <a href='http://colorlib.com/' className='hover:text-amber-300'>Colorlib</a></h1>
                    </Container>
                </footer>
            </section>




        </div>
    );
};

export default Home;