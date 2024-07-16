// src/app/whitepaper/page.js
"use client";
import ProgressBar from '../components/ProgressBar';

const Whitepaper = () => {
    return (
        <div className="min-h-screen p-10 bg-gradient-to-tl from-blue-900 to-black text-white mt-20">
            <h1 className="text-4xl font-bold mb-8">Whitepaper</h1>
            <p className="mb-5 text-lg">Discover the journey and future plans of AI-Trading.</p>
            <ProgressBar />
        </div>
    );
};

export default Whitepaper;