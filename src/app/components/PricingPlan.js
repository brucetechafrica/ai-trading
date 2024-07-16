import Link from 'next/link';
import { BsCheck2All } from 'react-icons/bs';

const PricingPlan = ({ title, price, features, link, isSelected, onChange }) => {
    return (
        <div className='flex flex-col max-[825px]:w-full gap-3 bg-white p-5 rounded-lg'>
            <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-blue-600" 
                checked={isSelected} 
                onChange={onChange} 
            />
            <div className=''>
                <h3 className='text-2xl font-semibold mb-1'>{title}</h3>
                <p className='text-[13px]'>{title} plan</p>
                <h3 className='text-5xl p-3 shadow-sm shadow-slate-400 my-3 w-72 max-[1100px]:w-60 max-[910px]:w-52 max-[825px]:w-full max-[910px]:text-4xl rounded-lg text-black'>${price}</h3>
            </div>
            <div className='flex flex-col gap-3'>
                {features.map((feature, index) => (
                    <span key={index} className='flex items-center gap-2'><BsCheck2All /><p>{feature}</p></span>
                ))}
            </div>
            <Link href={link}><button className="bg-blue-900 p-3 w-full rounded-lg text-white mt-5 font-semibold text-[13px]">Invest Plan</button></Link>
        </div>
    );
}

export default PricingPlan;
