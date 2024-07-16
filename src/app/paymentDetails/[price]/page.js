"use client";
import Link from "next/link";
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PaymentDetails = () => {
    const params = useParams();
    const [btcRate, setBtcRate] = useState(0);
    const [amtConversion, setAmtConversion] = useState(0);
    const [totalAmtConversion, setTotalAmtConversion] = useState(0);
    const price = parseInt(params.price);
    const totalAmount = price + 10;

    useEffect(() => {
        const fetchBtcRate = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const rate = response.data.bitcoin.usd;
                setBtcRate(rate);
                setAmtConversion((price / rate).toFixed(4));
                setTotalAmtConversion((totalAmount / rate).toFixed(4));
            } catch (error) {
                console.error('Error fetching BTC rate:', error);
            }
        };

        fetchBtcRate();
    }, [price, totalAmount]);

    return (
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[610px]:px-20 max-[472px]:px-10 max-[390px]:px-5 pt-20 flex items-center justify-center text-black">
            <div className="bg-white rounded-xl p-5 max-[450px]:p-3 w-[500px] ">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-xl">Commencing Transaction...</h3>
                    <div className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Amount to deposit (Proposed) :</h4>
                        <h4 className="font-bold">${price} USD ({amtConversion} BTC)</h4>
                    </div>
                    <div className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Total Fees :</h4>
                        <h4 className="font-bold">$10 USD</h4>
                    </div>
                    <div className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Sum Total :</h4>
                        <h4 className="font-bold">${totalAmount} USD ({totalAmtConversion} BTC)</h4>
                    </div>
                    <div className="flex gap-5 items-center">
                        <h4 className="max-[450px]:text-[13px]">Proposed Transaction Duration :</h4>
                        <h4 className="font-bold">10 mins</h4>
                    </div>
                    <Link href={`/verifyPayment/${totalAmtConversion}`}>
                        <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 flex w-full justify-center rounded-full">Continue to Payment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PaymentDetails;
