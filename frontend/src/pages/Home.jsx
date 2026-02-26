import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Cpu, Headphones } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title"
                    >
                        Power Up Your <br />
                        <span className="text-accent">Gaming Experience</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Premium PlayStation games, extreme custom PC builds, and elite accessories to conquer every lobby.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-actions"
                    >
                        <button className="btn btn-primary">
                            Shop Now <ChevronRight size={18} />
                        </button>
                        <button className="btn btn-secondary">
                            Build a PC
                        </button>
                    </motion.div>
                </div>
                <div className="hero-image-container">
                    {/* We will add an amazing 3D render or styled image here */}
                    <div className="placeholder-hero-glow"></div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="categories-section">
                <div className="container">
                    <h2 className="section-title">Explore Categories</h2>
                    <div className="categories-grid">
                        <div className="category-card">
                            <Gamepad2 size={48} className="category-icon" />
                            <h3>PlayStation Games</h3>
                            <p>Ready to play titles</p>
                        </div>
                        <div className="category-card">
                            <Cpu size={48} className="category-icon" />
                            <h3>Custom PCs</h3>
                            <p>Built for extreme performance</p>
                        </div>
                        <div className="category-card">
                            <Headphones size={48} className="category-icon" />
                            <h3>Accessories</h3>
                            <p>Logitech steering hubs & more</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
