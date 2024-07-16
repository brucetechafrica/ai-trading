"use client"
import Link from "next/link";
import Reviews from "./reviews";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

const Body = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    
    return ( 
        <div className="bg-white text-black mt-24 max-[875px]:mt-10 max-[720px]:mt-5  flex flex-col items-center justify-center px-28 max-[875px]:px-10  gap-5 pt-20">
            <h3 className="text-2xl" data-aos="fade-zoom-in">What is AI-Trading?</h3>
            <p className="text-center text-sm leading-loose text-slate-500" data-aos="fade-zoom-in">
            AI-Trading represents the next evolution in investment management, harnessing the power of artificial intelligence to optimize trading strategies and enhance portfolio performance. By leveraging advanced machine learning algorithms and real-time data analysis, AI-Trading identifies trends and opportunities in the cryptocurrency market that human traders might miss. This technology-driven approach increases the efficiency and accuracy of trades, providing investors with tailored strategies to maximize returns and minimize risks
            </p>
            
            <div className="flex gap-20 max-[450px]:flex-col" data-aos="fade-zoom-in">
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/1.png" alt="img" className="w-33"/>
                    <h3 className="font-bold min-[450px]:hidden">Transarency</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">AI-Trading is committed to transparency. We believe that it is important to be open and honest with our customers, employees, and other stakeholders. We believe that transparency builds trust and allows us to build stronger relationships.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/2.png" alt="img" className="w-33"/>
                    <h3 className="font-bold min-[450px]:hidden">Transarency</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">AI-Trading is committed to transparency. We believe that it is important to be open and honest with our customers, employees, and other stakeholders. We believe that transparency builds trust and allows us to build stronger relationships.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/3.png" alt="img" className="w-33"/>
                    <h3 className="font-bold min-[450px]:hidden">Experience</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">AI-Trading is a reliable and trustworthy business that has been in operation for many years. We have a proven track record of providing quality products and services to our customers. We are committed to meeting our customers' needs and expectations, and we strive to provide them with the best possible experience.</p>
                </div>
            </div>

            <div className="flex max-[660px]:flex-col justify-between gap-20 max-[720px]:gap-10 mt-20 overflow-hidden">
  <div className="w-1/2 max-[660px]:w-full flex flex-col gap-5" data-aos="slide-right">
    <h3 className="text-4xl font-serif">With AI-Trading,<br/>Security is Paramount</h3>
    <p className="text-sm text-left text-slate-500 leading-loose">
      At AI-Trading, the security of your investments is our top priority. Leveraging the power of big data, our advanced AI systems continuously analyze market trends and patterns to ensure no opportunity is missed. This comprehensive approach means that every trade is backed by extensive data and cutting-edge technology, minimizing risks and maximizing returns.
    </p>
    <Link href="/about">
      <button className="bg-blue-500 p-3 w-40 rounded-full text-white text-sm">Learn More</button>
    </Link>
  </div>
  <div className="w-1/2 max-[660px]:w-full max-[660px]:flex max-[660px]:justify-center relative" data-aos="slide-left">
    <img src="/secu_invest.png" alt="" className="w-120"/>
    <p className="text-sm text-left text-slate-500 leading-loose mt-5">
      Furthermore, our platform ensures that even the smallest investments are strategically managed alongside larger ones, creating a unified investment strategy that benefits from collective market insights. By combining state-of-the-art security measures with intelligent investment algorithms, AI-Trading provides a robust and secure environment for your cryptocurrency investments, giving you peace of mind and the confidence to invest boldly.
    </p>
  </div>
</div>

            <div className=" w-full flex flex-col justify-center items-center gap-5 mt-10">
                <p className="text-xl">Our company Pathners</p>
                <div className="flex max-[550px]:flex-wrap justify-between w-full gap-2">
                    <img src="/btc.png" alt="btc" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="eth.png" alt="eth" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="lite.png" alt="lite" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="ton.png" alt="ton" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="tezos.png" alt="tezos" className="w-28  max-[720px]:w-20  max-[720px]:h-8h-10"/>
                    <img src="chainlink.png" alt="chainlink" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-5 mt-20">
                <h3 className="text-2xl">Our recent reviews</h3>
                <p className="text-center text-sm leading-loose text-slate-500 w-[500px] max-[510px]:w-[300px]">Each review is especially valuable to us. After all, a long joint path has been done for this. Success consists of trust, willingness to develop and change.</p>
            </div>
            <Reviews />
            <div className="flex mb-20"></div>
        </div>
     );
}
 
export default Body;