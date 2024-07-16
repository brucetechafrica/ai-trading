import Link from "next/link";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className="w-full flex justify-between items-center mt-10 max-[680px]:mt-5 max-[600px]:mt-10 max-[310px]:mt-5">
      <div className="text-white w-1/2 max-[680px]:w-[360px] max-[600px]:w-full mt-10 flex flex-col justify-center gap-5">
        <h1 className="text-5xl max-[875px]:text-4xl leading-tight font-semibold">
          Empower your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Investments</span> with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">AI-Trading</span>
        </h1>
        <p className="text-slate-400 max-w-[450px] max-[720px]:max-w-[600px]">
          Discover advanced AI-driven strategies tailored to optimize your investment portfolio on our intuitive platform
        </p>
        <div className="flex gap-5">
          <Link href="/signup">
            <button className="bg-blue-500 p-3 w-40 max-[720px]:w-36 max-[350px]:w-28 max-[350px]:h-10 max-[350px]:text-[13px] rounded-full">Get Started</button>
          </Link>
          <Link href="/about">
            <button className="flex items-center justify-center bg-white text-black p-3 w-40 max-[720px]:w-36 max-[350px]:w-28 max-[350px]:h-10 max-[350px]:text-[13px] rounded-full">How it works</button>
          </Link>
        </div>
        <div className="flex gap-10 max-[875px]:gap-5 mt-5">
          <span>
            <h2 className="text-4xl max-[875px]:text-3xl">
              $<CountUp end={3500000} duration={2} separator="," /> +
            </h2>
            <p className="text-[13px] text-slate-400">in assets under management</p>
          </span>
          <span>
            <h2 className="text-4xl max-[875px]:text-3xl">
              $<CountUp end={500000} duration={2} separator="," /> +
            </h2>
            <p className="text-[13px] text-slate-400">in monthly trading volume</p>
          </span>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src="/Ai.png" alt="AI Illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
