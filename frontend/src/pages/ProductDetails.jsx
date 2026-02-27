import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Heart, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

// Using the same mock data for consistency, but expanded with details.
const MOCK_PRODUCTS = {
    "1": {
        id: 1, name: "Spider-Man 2", category: "PlayStation", price: 69.99,
        image: "https://images.unsplash.com/photo-1601205625482-eb0ae6486259?w=800&auto=format&fit=crop&q=80",
        description: "Experience an original Marvel's Spider-Man single player story. Switch between two playable Spider-Men, Peter Parker and Miles Morales, while exploring Marvel's New York. Wield Peter Parker's new symbiote abilities and Miles Morales' explosive bio-electric venom powers.",
        features: [
            "Haptic feedback: Feel the power of Spider-Man! The responsive vibrations of the DualSense™ wireless controller bring Peter Parker's symbiote abilities and Miles Morales' bio-electric skills to your fingertips.",
            "Adaptive triggers: Master acrobatic moves, execute thrilling combos, and experience the breathtaking excitement of web-swinging through a gorgeous 4K city.",
            "Ultra high-speed SSD: Experience the power of the PS5 console with lightning-fast load times for near-instant character switching."
        ],
        specs: { Platform: "PS5", Publisher: "PlayStation Studios", Genre: "Action-Adventure", ReleaseDate: "Oct 20, 2023" },
        stock: true, rating: 4.9, reviews: 1245
    },
    "2": {
        id: 2, name: "Logitech G923 Racing Wheel", category: "Accessories", price: 349.99,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80",
        description: "Feel the future of racing. Meet the next generation of racing wheels. The award-winning Logitech G design is reengineered to dial into your game physics, delivering unprecedented realism. Feel the pistons pumping, the gravel crunching, and every shift, drift, and hairpin turn like never before.",
        features: [
            "TRUEFORCE High-Definition Force Feedback",
            "Premium Build: Brushed aluminum steering wheel with hand-stitched leather cover",
            "Programmable dual clutch launch assist",
            "Built-in Rev Indicator LEDs"
        ],
        specs: { Brand: "Logitech G", Compatibility: "PS5, PS4, PC", Connection: "Wired USB", Weight: "2.25 kg" },
        stock: true, rating: 4.8, reviews: 856
    },
    "3": {
        id: 3, name: "Epyc Beast Builder (RTX 4090)", category: "PC Builds", price: 3499.99,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=80",
        description: "Dominate 4K gaming and heavy creative workloads with the mastercrafted Epyc Beast. We hand-build this system using only top-tier components to ensure maximum airflow, minimal noise, and frame rates that defy logic.",
        features: [
            "Custom Watercooling loop for CPU and GPU",
            "CableMod Pro sleeved cables for a pristine interior",
            "Professional overclocking and stress testing included",
            "3-Year Epyc Elite Warranty & Support"
        ],
        specs: { CPU: "Intel Core i9-14900K", GPU: "NVIDIA GeForce RTX 4090 24GB", RAM: "64GB DDR5 6400MHz", Storage: "4TB NVMe Gen4 SSD", Motherboard: "Z790 Premium Board", PSU: "1200W 80+ Platinum" },
        stock: false, rating: 5.0, reviews: 42
    },
};

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulate API fetch based on ID
        const fetchProduct = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 800)); // Short delay
            // In a real app, you would fetch by ID. Here we fallback to Spider-Man if ID not found in mock map
            setProduct(MOCK_PRODUCTS[id] || MOCK_PRODUCTS["1"]);
            setLoading(false);
        };
        fetchProduct();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return <div className="product-details-page loading-state"><div className="loader"></div></div>;
    }

    return (
        <div className="product-details-page">
            <div className="container">
                <Link to="/shop" className="back-link">
                    <ArrowLeft size={18} /> Back to Shop
                </Link>

                <div className="product-layout">
                    {/* Left: Image Gallery (Single image for now) */}
                    <div className="product-image-section">
                        <div className="main-image-container">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="product-info-section">
                        <div className="product-badges">
                            <span className="badge category-badge">{product.category}</span>
                            {product.stock ? (
                                <span className="badge stock-badge in-stock"><CheckCircle2 size={14} /> In Stock</span>
                            ) : (
                                <span className="badge stock-badge out-stock">Out of Stock</span>
                            )}
                        </div>

                        <h1 className="product-title">{product.name}</h1>

                        <div className="product-meta">
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#FFD700" : "none"} color={i < Math.floor(product.rating) ? "#FFD700" : "#cbd5e1"} />
                                ))}
                                <span className="rating-score">{product.rating}</span>
                                <span className="review-count">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <div className="product-price-block">
                            <span className="price">${product.price.toFixed(2)}</span>
                        </div>

                        <p className="product-description">{product.description}</p>

                        <div className="purchase-actions">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button
                                className="btn btn-primary add-to-cart-btn"
                                disabled={!product.stock}
                                onClick={() => addToCart(product, quantity)}
                            >
                                <ShoppingCart size={20} />
                                {product.stock ? 'Add to Cart' : 'Sold Out'}
                            </button>
                            <button className="wishlist-btn" aria-label="Add to wishlist">
                                <Heart size={24} />
                            </button>
                        </div>

                        <div className="delivery-info">
                            <div className="info-item">
                                <Truck size={20} />
                                <div>
                                    <strong>Free Express Delivery</strong>
                                    <span>Enter postal code for Delivery Availability</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <ShieldCheck size={20} />
                                <div>
                                    <strong>Return Delivery</strong>
                                    <span>Free 30 Days Delivery Returns.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Tabs for Specs and Features */}
                <div className="product-details-tabs">
                    <div className="tabs-header">
                        <button className="tab-btn active">Key Features</button>
                        <button className="tab-btn">Specifications</button>
                    </div>
                    <div className="tab-content">
                        <div className="features-list">
                            <ul>
                                {product.features.map((feature, idx) => (
                                    <li key={idx}><CheckCircle2 size={18} className="text-accent" /> {feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="specs-table">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div className="spec-row" key={key}>
                                    <div className="spec-key">{key}</div>
                                    <div className="spec-value">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
