import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
    const {
        cartItems,
        isCartOpen,
        toggleCart,
        removeFromCart,
        updateQuantity,
        getCartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay" onClick={toggleCart}>
            <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>

                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button className="close-cart-btn" onClick={toggleCart} aria-label="Close cart">
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items-container">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={48} className="empty-cart-icon" />
                            <p>Your cart is empty.</p>
                            <button className="btn btn-primary" onClick={toggleCart}>Continue Shopping</button>
                        </div>
                    ) : (
                        <ul className="cart-items-list">
                            {cartItems.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />

                                    <div className="cart-item-details">
                                        <div className="cart-item-title-row">
                                            <h4>{item.name}</h4>
                                            <button
                                                className="remove-item-btn"
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label="Remove item"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>

                                        <span className="cart-item-price">${item.price.toFixed(2)}</span>

                                        <div className="cart-item-actions">
                                            <div className="cart-quantity-selector">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                ><Minus size={14} /></button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                ><Plus size={14} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span className="cart-subtotal">${getCartTotal().toFixed(2)}</span>
                        </div>
                        <p className="shipping-note">Taxes and shipping calculated at checkout</p>
                        <button className="btn btn-primary checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CartSidebar;
