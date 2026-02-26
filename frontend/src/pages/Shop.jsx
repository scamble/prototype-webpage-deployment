import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './Shop.css';

const MOCK_PRODUCTS = [
    { id: 1, name: "Spider-Man 2", category: "PlayStation", price: 69.99, image: "https://images.unsplash.com/photo-1601205625482-eb0ae6486259?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Logitech G923 Wheel", category: "Accessories", price: 349.99, image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Epyc Beast Builder", category: "PC Builds", price: 3499.99, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "DualSense Wireless", category: "Accessories", price: 69.99, image: "https://images.unsplash.com/photo-1606144042871-2ed44aa321b0?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "God of War Ragnarök", category: "PlayStation", price: 59.99, image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Xbox Series X", category: "Consoles", price: 499.99, image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=500&auto=format&fit=crop&q=60" },
];

const Shop = () => {
    return (
        <div className="shop-page">
            <div className="shop-header">
                <h1>Shop Games & Gear</h1>
                <p>Premium hardware and software delivered straight to you.</p>
            </div>

            <div className="shop-container">
                {/* Sidebar Filter */}
                <aside className="shop-sidebar">
                    <h3>Filters</h3>
                    <div className="filter-group">
                        <h4>Categories</h4>
                        <label><input type="checkbox" /> PlayStation Games</label>
                        <label><input type="checkbox" /> Xbox Consoles</label>
                        <label><input type="checkbox" /> PC Parts</label>
                        <label><input type="checkbox" /> Accessories</label>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="clean-product-grid">
                    {MOCK_PRODUCTS.map(product => (
                        <div key={product.id} className="clean-product-card">
                            <div className="clean-image-box">
                                <img src={product.image} alt={product.name} loading="lazy" />
                                <button className="clean-add-to-cart" aria-label="Add to cart">
                                    <ShoppingCart size={20} strokeWidth={2.5} />
                                </button>
                            </div>
                            <div className="clean-product-info">
                                <h3 className="clean-product-name">{product.name}</h3>
                                <span className="clean-product-price">${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
