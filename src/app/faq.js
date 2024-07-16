// src/app/faq.js

import React from 'react';

const FAQ = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-900 to-black text-white flex flex-col items-center py-20 px-10">
            <h1 className="text-4xl mb-10">Frequently Asked Questions</h1>
            <div className="max-w-4xl w-full">
                <div className="mb-5">
                    <h2 className="text-2xl mb-3">What is AI-Trading?</h2>
                    <p className="text-lg leading-loose">
                        AI-Trading is a platform that leverages advanced artificial intelligence algorithms to optimize cryptocurrency trading strategies and maximize investment returns.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className="text-2xl mb-3">How does AI-Trading ensure security?</h2>
                    <p className="text-lg leading-loose">
                        We employ robust security measures, including encryption and secure data storage practices, to ensure the safety of your funds and personal information.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className="text-2xl mb-3">Can I track my investments?</h2>
                    <p className="text-lg leading-loose">
                        Yes, our platform provides detailed performance reports and real-time market analysis to help you track your investments and make informed decisions.
                    </p>
                </div>
                <div className="mb-5">
                    <h2 className="text-2xl mb-3">How do I get started?</h2>
                    <p className="text-lg leading-loose">
                        Getting started is easy! Simply sign up on our platform, choose an investment plan that suits your needs, and start trading with the power of AI.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
