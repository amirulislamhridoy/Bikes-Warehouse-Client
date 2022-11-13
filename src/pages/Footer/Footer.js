import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div class="row m-0">
            <div class="col-md-12 p-0">
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 m-b-30">
                                <div class="footer-title m-t-5 m-b-20 p-b-8">
                                    About us
                                </div>
                                <p class="white-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
                                </p>
                            </div>
                            <div class="col-md-3 m-b-30">
                                <div class="footer-title m-t-5 m-b-20 p-b-8">
                                    Latest Bike
                                </div>
                                <div class="footer-links">
                                    <a href="#">
                                        Contact Us
                                    </a>
                                    <a href="#">
                                        Service Center
                                    </a>
                                    <a href="#">
                                        Quality
                                    </a>
                                    <a href="#">
                                        Wallstreet
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3 m-b-30">
                                <div class="footer-title m-t-5 m-b-20 p-b-8">
                                    Quick Links
                                </div>
                                <div class="footer-links">
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                    <a href="#">
                                        FAQ
                                    </a>
                                    <a href="#">
                                        Terms & conditions
                                    </a>
                                    <a href="#">
                                        Privacy policy
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3 m-b-30">
                                <div class="footer-title m-t-5 m-b-20 p-b-8">
                                    Support
                                </div>
                                <div class="footer-links">
                                    <Link to="">
                                        Offer
                                    </Link>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                    <Link to="/register">
                                        Sign Up
                                    </Link>
                                    <a href="#">
                                        Support forum
                                    </a>
                                </div>

                                <div class="footer-social-links m-t-30">
                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                        <a href="#">
                                        <i class="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="footer-bottom">
                    Copyright © 2022, All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;