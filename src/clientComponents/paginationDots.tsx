// PaginationDots.tsx
import React from 'react';

interface PaginationDotsProps {
    total: number;
    activeIndex: number;
    onDotClick: (index: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ total, activeIndex, onDotClick }) => {
    return (
        <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => onDotClick(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${activeIndex === index ? 'bg-highlight' : 'bg-highlight/20'}`}
                />
            ))}
        </div>
    );
};

export default PaginationDots;
