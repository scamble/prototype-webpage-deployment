import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, ShoppingCart, User, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop Games', path: '/shop' },
        { name: 'PC Builds', path: '/pc-builds' },
        { name: 'Accessories', path: '/accessories' },
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Gamepad2 className="logo-icon" />
                    <span>Epyc <span className="text-accent">Games</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="navbar-actions border-left desktop-only">
                    <button className="icon-btn" aria-label="Cart">
                        <ShoppingCart size={20} />
                    </button>
                    <button className="icon-btn" aria-label="Account">
                        <User size={20} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-nav-link"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
