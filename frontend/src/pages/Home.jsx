import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background-shape"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-title"
                        >
                            Consoles
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hero-subtitle"
                        >
                            Discover everything you need to know about your gaming setup, treat your gear with kindness and it will take care of your ranked games.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hero-actions"
                        >
                            <button className="btn btn-primary">
                                Explore More
                            </button>
                        </motion.div>
                    </div>
                    <div className="hero-image-container">
                        {/* Replace with an actual PS5 or controller image with transparent background */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                            alt="PlayStation 5"
                            className="hero-main-img"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Products List */}
            <section className="featured-section">
                <div className="container">
                    <div className="products-carousel">

                        {/* Product 1 */}
                        <div className="product-card-clean">
                            <div className="product-image-box">
                                <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=400" alt="Xbox Series X" />
                            </div>
                            <h4>Xbox Series X</h4>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card-clean">
                            <div className="product-image-box">
                                <img src="https://images.unsplash.com/photo-1606144042871-2ed44aa321b0?auto=format&fit=crop&q=80&w=400" alt="DualSense Controller" />
                            </div>
                            <h4>DualSense Controller</h4>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card-clean">
                            <div className="product-image-box">
                                <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400" alt="PC Build" />
                            </div>
                            <h4>Custom PC Build</h4>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
