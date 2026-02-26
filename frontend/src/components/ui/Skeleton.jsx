import React from 'react';
import './Skeleton.css';

const Skeleton = ({ className, style }) => {
    return (
        <div
            className={`skeleton-loader ${className || ''}`}
            style={style}
        ></div>
    );
};

export const ProductCardSkeleton = () => {
    return (
        <div className="clean-product-card skeleton-card">
            <div className="clean-image-box skeleton-box">
                <Skeleton className="skeleton-image-fill" />
                <Skeleton className="skeleton-btn" />
            </div>
            <div className="clean-product-info skeleton-info">
                <Skeleton className="skeleton-text skeleton-title" />
                <Skeleton className="skeleton-text skeleton-price" />
            </div>
        </div>
    );
};

export default Skeleton;
