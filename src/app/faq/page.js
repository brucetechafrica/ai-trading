// src/app/faq/page.js
import Link from "next/link";

const FAQ = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-900 to-black text-white min-h-screen p-10 pt-32"> {/* Increased to pt-32 for more top padding */}
            <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">What is AI-Trading?</h2>
                <p className="text-lg">AI-Trading is a platform that leverages artificial intelligence to optimize cryptocurrency trading strategies and maximize returns for investors.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">How do I get started?</h2>
                <p className="text-lg">To get started, sign up for an account, choose a trading plan that suits your needs, and start investing in the future of finance with AI-Trading.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">Is my investment secure?</h2>
                <p className="text-lg">Yes, we prioritize the security of your funds using industry-leading security measures to protect your investments.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">How will my withdrawals work?</h2>
                <p className="text-lg">Withdrawals are processed quickly and securely. You can request a withdrawal at any time, and the funds will be transferred to your designated account promptly.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">What trading strategies does AI-Trading use?</h2>
                <p className="text-lg">AI-Trading utilizes advanced AI algorithms and big data analytics to develop trading strategies that adapt to market conditions and optimize your investment returns.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">How does AI-Trading ensure the security of my funds?</h2>
                <p className="text-lg">We use state-of-the-art security measures, including encryption and multi-factor authentication, to protect your funds and personal information.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">Can I track the performance of my investments?</h2>
                <p className="text-lg">Yes, you can access detailed performance reports and market analysis through our platform, allowing you to track the performance of your investments in real-time.</p>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">What support options are available if I need help?</h2>
                <p className="text-lg">Our customer support team is available 24/7 to assist you with any questions or issues you may have. You can reach us via email, live chat, or phone.</p>
            </div>
            <Link href="/">
                <p className="text-blue-500 cursor-pointer">Back to Home</p>
            </Link>
        </div>
    );
};

export default FAQ;
