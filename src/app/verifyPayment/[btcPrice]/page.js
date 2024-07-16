"use client";
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

const VerifyPayment = () => {
    const params = useParams();
    const router = useRouter();
    const btcPrice = params.btcPrice;

    const [btcValue, setBtcValue] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchBtcRate = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const rate = response.data.bitcoin.usd;
                setBtcValue(btcPrice);
                setTotalAmount((btcPrice * rate).toFixed(2)); // Convert BTC to USDT and round to 2 decimal places
            } catch (error) {
                console.error('Error fetching BTC rate:', error);
            }
        };

        fetchBtcRate();
    }, [btcPrice]);

    function copy(val) {
        navigator.clipboard.writeText(val);
        alert("Copied");
    }

    function verify() {
        alert("Wait while we confirm your transaction...");
        router.push("/dashboard");
    }

    return (
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[610px]:px-20 max-[472px]:px-10 max-[390px]:px-5 pt-20 flex items-center justify-center text-black">
            <div className="bg-white rounded-xl p-5 w-[500px]">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-xl">Transaction Verification</h3>
                    <div>
                        <h4 className="font-semibold text-sm">One-time secure USDT TRC20 Address</h4>
                        <div className="flex gap-3 items-center">
                            <input type="text" value="TYr1RUMH753rw9X6nTNoiTqY8QfjPESUBV" className="border border-slate-500 p-2 rounded-md w-full" readOnly />
                            <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 h-10 rounded-md text-sm" onClick={() => copy("TYr1RUMH753rw9X6nTNoiTqY8QfjPESUBV")}>Copy</button>
                        </div>
                        <h4 className="font-semibold text-[10px] text-red-500">Please ensure you send USDT TRC20 to prevent loss of funds</h4>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">BTC Amount</h4>
                        <div className="flex gap-3 items-center">
                            <input type="text" value={btcValue} className="border border-slate-500 p-2 rounded-md w-full" readOnly />
                            <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 h-10 rounded-md text-sm" onClick={() => copy(btcValue)}>Copy</button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm">USDT TRC20 Amount</h4>
                        <div className="flex gap-3 items-center">
                            <input type="text" value={totalAmount} className="border border-slate-500 p-2 rounded-md w-full" readOnly />
                            <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 h-10 rounded-md text-sm" onClick={() => copy(totalAmount)}>Copy</button>
                        </div>
                    </div>
                    <div>
                        <div className="w-full">
                            <h4 className="font-semibold text-sm">Your Wallet Address</h4>
                            <input type="text" className="border border-slate-500 p-2 rounded-md w-full" />
                        </div>
                    </div>
                    <button className="bg-gradient-to-tl from-blue-900 to-black text-white p-2 flex w-full justify-center rounded-full" onClick={verify}>Verify Payment</button>
                </div>
            </div>
        </div>
    );
}

export default VerifyPayment;
