import Link from "next/link";
import Reviews from "../components/reviews";

const About = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[650px]:px-20 max-[550px]:px-10 pt-28">
            <div className="h-20"></div> {/* Added spacing */}
            <div className="flex max-[950px]:flex-col justify-center gap-5">
                <div className="text-white w-1/2 max-[950px]:w-full">
                    <h3 className="text-4xl mb-3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 ">About Us</h3>
                    <p className="text-[13px] mb-5 leading-loose">
                        At AI-Trading, we are dedicated to revolutionizing the world of cryptocurrency trading through the power of artificial intelligence. With over five years of experience in the industry, we have developed a competitive portfolio that demonstrates our commitment to excellence and innovation. Our platform leverages advanced AI algorithms to provide precise and data-driven trading strategies, ensuring our clients achieve optimal investment outcomes. We believe in the transformative potential of AI in trading and strive to make cutting-edge technology accessible to all investors.
                    </p>
                    <h4 className="text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Our Mission</h4>
                    <p className="text-[13px] mb-5 leading-loose">
                        Our mission is to empower investors with state-of-the-art AI-driven tools and strategies that enhance their trading experience and maximize their returns. We aim to democratize access to advanced trading techniques, making sophisticated and reliable AI technology available to both novice and experienced traders. By continuously innovating and improving our platform, we seek to provide our clients with unparalleled insights and opportunities in the fast-paced world of cryptocurrency.
                    </p>
                </div>
                <div>
                    <img src="/Design sans titre.png" alt="About Us" className="w-1/2 max-[950px]:w-1/2" />
                </div>
            </div>
            <div className="flex max-[550px]:flex-col gap-5 text-white mx-5 mb-10">
                <div>
                    <h4 className="text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Our Values</h4>
                    <ul style={{ listStyleType: "circle" }} className="text-[13px] flex flex-col gap-1 mb-5">
                        <li>Innovation: We are committed to staying at the forefront of technological advancements, continuously integrating the latest AI developments into our platform to provide our users with the best trading solutions.</li>
                        <li>Transparency: We believe in maintaining open and honest communication with our clients, ensuring that our processes, strategies, and results are transparent and easily understandable.</li>
                        <li>Security: The safety of our clients' investments is our top priority. We employ robust security measures and utilize big data analytics to protect assets and ensure every investment is strategically managed.</li>
                        <li>Integrity: We conduct our business with the highest ethical standards, building trust and fostering strong relationships with our clients, partners, and stakeholders.</li>
                        <li>Excellence: We strive for excellence in everything we do, from the performance of our trading algorithms to the quality of our customer service. Our goal is to deliver outstanding results and exceed our clients' expectations.</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/img1.png" alt="Innovation" className="w-3/4 max-[950px]:w-full mb-5" />
                </div>
            </div>
            <div className="text-white mx-5 mb-10">
                <h4 className="text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Our AI Strategy</h4>
                <p className="text-[13px] mb-5 leading-loose">
                    At AI-Trading, our strategies are deeply rooted in advanced big data analysis and artificial intelligence. We utilize complex algorithms to analyze vast amounts of data, identifying patterns and trends that are not immediately apparent to human traders. This allows us to make informed and strategic decisions that maximize our clients' investment returns.
                </p>
                <div className="flex justify-center mb-5">
                    <img src="/img2.png" alt="Big Data Analysis" className="w-1/3 max-[950px]:w-full mb-5" />
                </div>
                <p className="text-[13px] mb-5 leading-loose">
                    Our AI system is also designed to track the activities of major market players, known as "whales". By monitoring their trades and market movements, we gain valuable insights into market trends and potential investment opportunities. This enables us to adjust our strategies dynamically, ensuring our clients always stay ahead of the market.
                </p>
                <div className="flex justify-center mb-5">
                    <img src="/img3.png" alt="Tracking Market Whales" className="w-1/3 max-[950px]:w-full mb-5" />
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center gap-5 mt-20 text-white">
                    <h3 className="text-2xl">Our Recent Reviews</h3>
                    <p className="text-center text-sm leading-loose text-slate-500 w-[800px] max-[850px]:w-[500px] max-[550px]:w-full mb-5">
                        Each review is especially valuable to us. After all, a long joint path has been done for this. Success consists of trust, willingness to develop and change.
                    </p>
                </div>
                <Reviews />
            </div>
        </div>
    );
}

export default About;
