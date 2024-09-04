import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './About.css'
import { Container,Row,Col,Button, CarouselCaption } from 'react-bootstrap';
import img4 from "./images/logo.png"
import img5 from "./images/female.jpg"
import { BiWindowAlt } from "react-icons/bi";
import { BiLogoTwitch } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Home from "./Home.jsx"
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const About = () => {
  return (
    <>
   
   <main>
   <header className="site-header">
   <div className="section-overlay"></div>
   <Container className='container'>
    <Row className="row">
    <div className="col-lg-12 col-12 text-center">
    <h1 className="">About Gotto</h1>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
    </nav>
    </div>
    </Row>
   </Container>
   </header>
   <section className="about-section mt-5">
               <Container className='container'>
               <Row className='row'>
                    <div class="row justify-content-center align-items-center">

                        <div class="col-lg-5 col-12">
                            <div class="about-info-text">
                                <h2 class="mb-0">Introducing Gotto Job</h2>

                                <h4 class="mb-2">Get hired. Get your new job</h4>

                                <p>Thank you for visiting our Gotto Job website. Are you looking for best HTML templates? Please visit Tooplate website to download free templates.</p>

                                <div class="d-flex align-items-center mt-4">
                                    <a href="#services-section" class="custom-btn custom-border-btn btn me-4">Explore Services</a>

                                    <a href="contact.html" class="custom-link smoothscroll">Contact</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12 mt-5 mt-lg-0">
                            <div className="about-image-wrap">
                                <img src={img5} alt=""style={{width:"100%"}}/>

                                <div className="about-info d-flex">
                                    <h4 className=" mb-0 me-2">20</h4>

                                    <p className=" mb-0">years of experience</p>
                                </div>
                            </div>
                        </div>
</div>
                        </Row>
                </Container>
                
            </section>
            <section class="services-section section-padding" id="services-section">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="mb-5">We deliver best services</h2>
                        </div>

                        <div class="services-block-wrap col-lg-4 col-md-6 col-12">
                            <div class="services-block">
                                <div class="services-block-title-wrap">
                               
                                <i class="services-block-icon bi-twitch"> <BiWindowAlt style={{width:"100%"}} className='service-block-icon' /></i>
                                    <h4 class="services-block-title">Website design</h4>
                                </div>

                                <div class="services-block-body">
                                    <p>Tooplate provides a variety of free Bootstrap 5 website templates for your commercial or business websites.</p>
                                </div>
                            </div>
                        </div>

                        <div class="services-block-wrap col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
                            <div class="services-block">
                                <div class="services-block-title-wrap">
                                
                                <i class="services-block-icon bi-twitch">  <BiLogoTwitch style={{width:"100%"}} className='service-block-icon'/></i>
                                    <h4 class="services-block-title">Marketing</h4>
                                </div>

                                <div class="services-block-body">
                                    <p>You can download any free template for your website. Please tell your friends about Tooplate.</p>
                                </div>
                            </div>
                        </div>

                        <div class="services-block-wrap col-lg-4 col-md-6 col-12">
                            <div class="services-block">
                                <div class="services-block-title-wrap">
                                    <i class="services-block-icon bi-play-circle-fill"><BiPlayCircle style={{width:"100%"}} className='service-block-icon'/></i>
                                
                                    <h4 class="services-block-title">Video</h4>
                                </div>

                                <div class="services-block-body">
                                    <p>You are not allowed to redistribute the template ZIP file on any other template collection website.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section class="reviews-section section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <h2 class="text-center mb-5">Happy customers</h2>
{/* <Container>
    <Row className='justify-content-center align-item-center'>
        <Col lg={6}>
        <Carousel>
            <Carousel.Item>
                <img src={img4} alt="" />
                <CarouselCaption>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio, aut labore delectus non molestias repudiandae doloribus assumenda velit quia!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda.</p>
                </CarouselCaption>
            </Carousel.Item>
        </Carousel>
        </Col>
    </Row>
</Container> */}
                            {/* <div class="owl-carousel owl-theme reviews-carousel">
                                <div class="reviews-thumb">
                                
                                    <div class="reviews-info d-flex align-items-center">
                                       <img src="" alt="" />

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Susan L</strong>
                                                <small>Product Manager</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src="images/left-quote.png" class="quote-icon img-fluid" alt=""/>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src="images/avatar/medium-shot-smiley-senior-man.jpg" class="avatar-image img-fluid" alt=""/>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Jack</strong>
                                                <small>Technical Lead</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star"></i>
                                                <i class="bi-star"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src="images/left-quote.png" class="quote-icon img-fluid" alt=""/>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">

                                    <div class="reviews-info d-flex align-items-center">
                                        <img src="images/avatar/portrait-beautiful-young-woman-studying-table-with-laptop-computer-notebook-home-studying-online-e-learning-system.jpg" class="avatar-image img-fluid" alt=""/>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Haley</strong>
                                                <small>Sales & Marketing</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src="images/left-quote.png" class="quote-icon img-fluid" alt=""/>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src="images/avatar/blond-man-happy-expression.jpg" class="avatar-image img-fluid" alt=""/>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Jackson</strong>
                                                <small>Dev Ops</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star"></i>
                                                <i class="bi-star"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src="images/left-quote.png" class="quote-icon img-fluid" alt=""/>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>

                                <div class="reviews-thumb">
                                    <div class="reviews-info d-flex align-items-center">
                                        <img src="images/avatar/university-study-abroad-lifestyle-concept-satisfied-happy-asian-male-student-glasses-shirt-showing-thumbs-up-approval-likes-studying-college-holding-laptop-backpack.jpg" class="avatar-image img-fluid" alt=""/>

                                        <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                            <p class="mb-0">
                                                <strong>Kevin</strong>
                                                <small>Internship</small>
                                            </p>

                                            <div class="reviews-icons">
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                                <i class="bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="reviews-body">
                                        <img src="images/left-quote.png" class="quote-icon img-fluid" alt=""/>

                                        <h4 class="reviews-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>
            <section class="cta-section">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-10">
                            <h2 class="text-white mb-2">Over 10k opening jobs</h2>

                            <p class="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai</p>
                        </div>

                        <div class="col-lg-4 col-12 ms-auto">
                            <div class="custom-border-btn-wrap d-flex align-items-center mt-lg-4 mt-2">
                                <a href="#" class="custom-btn custom-border-btn btn me-4">Create an account</a>

                                <a href="#" class="custom-link">Post a job</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <footer class="site-footer">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-6 col-12 mb-3">
                        <div class="d-flex align-items-center mb-4">
                            <img src={img4} class="img-fluid logo-image"/>

                            <div class="d-flex flex-column">
                                <strong class="logo-text">Gotto</strong>
                                <small class="logo-slogan">Online Job Portal</small>
                            </div>
                        </div>  

                        <p class="mb-2">
                            <i class="custom-icon bi-globe"><BiGlobe /></i>

                            <a href="#" class="site-footer-link">
                                www.jobbportal.com
                            </a>
                        </p>

                        <p class="mb-2">
                            <i class="custom-icon bi-telephone me-1"><BsTelephone /></i>

                            <a href="tel: 305-240-9671" class="site-footer-link">
                                305-240-9671
                            </a>
                        </p>

                        <p>
                            <i class="custom-icon bi-envelope me-1"><BsEnvelopeOpen /></i>

                            <a href="mailto:info@yourgmail.com" class="site-footer-link">
                                info@jobportal.co
                            </a>
                        </p>

                    </div>

                    <div class="col-lg-2 col-md-3 col-6 ms-lg-auto">
                        <h6 class="site-footer-title">Company</h6>

                        <ul class="footer-menu">
                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">About</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Blog</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Jobs</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 col-6">
                        <h6 class="site-footer-title">Resources</h6>

                        <ul class="footer-menu">
                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Guide</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">How it works</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Salary Tool</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-8 col-12 mt-3 mt-lg-0">
                        <h6 class="site-footer-title">Newsletter</h6>

                        <form class="custom-form newsletter-form" action="#" method="post" role="form">
                            <h6 class="site-footer-title">Get notified jobs news</h6>

                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1"><i class="bi-person"><IoPersonOutline /></i></span>

                                <input type="text" name="newsletter-name" id="newsletter-name" class="form-control" placeholder="yourname@gmail.com" required/>

                                <button type="submit" class="form-control">
                                    <i class="bi-send"><BsSend /></i>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <div class="site-footer-bottom">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-4 col-12 d-flex align-items-center">
                            <p class="copyright-text">Copyright © Gotto Job 2048</p>

                            <ul class="footer-menu d-flex">
                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Privacy Policy</a></li>

                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Terms</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-5 col-12 mt-2 mt-lg-0">
                            <ul class="social-icon">
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-twitter"><BiLogoTwitter /></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-facebook"><BiLogoFacebookSquare /></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-linkedin"><FaLinkedin /></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-instagram"><FaSquareInstagram /></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-youtube"><FaYoutube /></a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-12 mt-2 d-flex align-items-center mt-lg-0">
                            <p>Design: <a class="sponsored-link" rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a></p>
                        </div>

                        <a class="back-top-icon bi-arrow-up smoothscroll d-flex justify-content-center align-items-center" href="#top"></a>

                    </div>
                </div>
            </div>
        </footer>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>
   </main>
   
    </>
  )
}

export default About