import React from 'react';
import './Footer.css';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Epyc <span className="text-accent">Games</span></h3>
                        <p>Your ultimate destination for ready-to-play PlayStation games, custom PC builds, and premium gaming gear.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Github"><Github size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="/shop">PlayStation Games</a></li>
                            <li><a href="/pc-builds">Custom PCs</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Steering Hubs</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Epyc Games. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
