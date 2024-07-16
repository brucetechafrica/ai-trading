// src/components/ProgressBar.js
"use client";
import React from 'react';

const phases = [
    { id: 'Q1 2023', title: 'Platform Creation', description: 'Establishment of the AI-Trading platform.' },
    { id: 'Q2 2023', title: 'AI Integration', description: 'Integrating AI algorithms for trading.' },
    { id: 'Q3 2023', title: 'Big Data Accessibility', description: 'Enabling access to big data for AI.' },
    { id: 'Q4 2023', title: 'Beta Testing', description: 'Conducting beta testing with selected users.' },
    { id: 'Q1 2024', title: 'Official Launch', description: 'Official launch of AI-Trading platform.', current: true },
    { id: 'Q2 2024', title: 'User Expansion', description: 'Expanding the user base and improving features.', current: true },
    { id: 'Q3 2024', title: 'Stock Trading Introduction', description: 'Adding stock trading options for companies like Netflix and Apple.' },
    { id: 'Q4 2024', title: 'AI Optimization', description: 'Optimizing AI algorithms for better performance.' },
    { id: 'Q1 2025', title: 'Advanced Analytics', description: 'Introducing advanced analytics tools.' },
    { id: 'Q2 2025', title: 'Global Expansion', description: 'Expanding AI-Trading to global markets.' },
    { id: 'Q3 2025', title: 'Continuous Improvement', description: 'Ongoing improvements and feature updates.' },
];

const ProgressBar = () => {
    return (
        <div className="relative w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-r-2 border-gray-300"></div>
            {phases.map((phase, index) => (
                <div key={phase.id} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8 relative`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-10' : 'pr-10'} flex items-center`}>
                        <div className={`p-4 rounded shadow-lg w-full ${phase.current ? 'bg-yellow-300' : 'bg-white'}`}>
                            <h3 className={`text-xl font-semibold ${phase.current ? 'text-black' : 'text-black'}`}>{phase.id}</h3>
                            <h4 className={`text-lg font-medium ${phase.current ? 'text-black' : 'text-black'} mt-1`}>{phase.title}</h4>
                            <p className={`mt-2 ${phase.current ? 'text-black' : 'text-gray-700'}`}>{phase.description}</p>
                        </div>
                    </div>
                    <div className={`absolute ${index % 2 === 0 ? '-left-2' : '-right-2'} w-4 h-4 ${phase.current ? 'bg-yellow-300' : 'bg-gray-300'} rounded-full border border-gray-500`}></div>
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
