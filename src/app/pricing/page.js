'use client';  // Ajoutez cette ligne au début du fichier

import { useState } from 'react';
import PricingPlan from '../components/PricingPlan';

const Pricing = () => {
    const [selectedPlans, setSelectedPlans] = useState([]);

    const handlePlanChange = (plan) => {
        setSelectedPlans((prevSelectedPlans) =>
            prevSelectedPlans.includes(plan)
                ? prevSelectedPlans.filter((selectedPlan) => selectedPlan !== plan)
                : [...prevSelectedPlans, plan]
        );
    };

    const plans = {
        standard: [
            {
                title: 'Basic',
                price: '200',
                features: [
                    '50% Returns',
                    '14 days duration',
                    'Affordable pocket size',
                    'No investment bonus',
                    'Standard Customer support',
                    'Access to basic AI-driven trading tools',
                    'No Market analysis'
                ],
                link: '/paymentDetails/200'
            },
            {
                title: 'Standard',
                price: '500',
                features: [
                    '75% Returns',
                    '14 days duration',
                    'Most popular investment',
                    '$20 investment bonus',
                    'Priority Customer support',
                    'Access to advanced AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/500'
            },
            {
                title: 'Extended Standard',
                price: '1500',
                features: [
                    '85% Returns',
                    '21 days duration',
                    'Extended investment size',
                    '$50 investment bonus',
                    'Priority Customer support',
                    'Access to advanced AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/1500'
            },
            {
                title: 'Advanced Standard',
                price: '2500',
                features: [
                    '100% Returns',
                    '45 days duration',
                    'Big investors size',
                    '$100 investment bonus',
                    '24/7 dedicated Customer support',
                    'Access to all AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/2500'
            }
        ],
        intermediate: [
            {
                title: 'Intermediate',
                price: '3500',
                features: [
                    '100% Returns',
                    '45 days duration',
                    'Big investors size',
                    '$100 investment bonus',
                    '24/7 dedicated Customer support',
                    'Access to all AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/3500'
            },
            {
                title: 'Advanced',
                price: '5000',
                features: [
                    '100% Returns',
                    '45 days duration',
                    'Big investors size',
                    '$100 investment bonus',
                    '24/7 dedicated Customer support',
                    'Access to all AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/5000'
            },
            {
                title: 'Pro',
                price: '7000',
                features: [
                    '100% Returns',
                    '45 days duration',
                    'Big investors size',
                    '$100 investment bonus',
                    '24/7 dedicated Customer support',
                    'Access to all AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/7000'
            }
        ],
        premium: [
            {
                title: 'Elite',
                price: '10000',
                features: [
                    '110% Returns',
                    '60 days duration',
                    'Exclusive investment size',
                    '$1000 investment bonus',
                    '24/7 elite Customer support',
                    'Access to premium AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/10000'
            },
            {
                title: 'Platinum',
                price: '25000',
                features: [
                    '110% Returns',
                    '60 days duration',
                    'Exclusive investment size',
                    '$1000 investment bonus',
                    '24/7 elite Customer support',
                    'Access to premium AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/25000'
            },
            {
                title: 'Diamond',
                price: '50000',
                features: [
                    '110% Returns',
                    '60 days duration',
                    'Exclusive investment size',
                    '$1000 investment bonus',
                    '24/7 elite Customer support',
                    'Access to premium AI-driven trading tools',
                    'Exclusive monthly market analysis'
                ],
                link: '/paymentDetails/50000'
            }
        ]
    };

    return (
        <div className="bg-gradient-to-tl from-blue-900 to-black pb-10 px-28 max-[610px]:px-20 max-[472px]:px-10 max-[390px]:px-5 pt-20 text-black">
            <div className="flex flex-col items-center gap-5 justify-center pt-10">
                <h3 className="text-white text-6xl max-[610px]:text-5xl max-[350px]:text-4xl font-semibold">Pricing plans</h3>
                <p className="text-center text-[14px] max-[350px]:text-[12px] text-slate-400">Our pricing plans are designed to be affordable, flexible, and tailored to fit into the pockets of people</p>
            </div>
            <div className="mt-20">
                <h4 className="text-white text-4xl mb-10">Standard Plans</h4>
                <div className='flex max-[825px]:flex-col justify-center items-center gap-5'>
                    {plans.standard.map(plan => (
                        <PricingPlan
                            key={plan.title}
                            title={plan.title}
                            price={plan.price}
                            features={plan.features}
                            link={plan.link}
                            isSelected={selectedPlans.includes(plan.title)}
                            onChange={() => handlePlanChange(plan.title)}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-20">
                <h4 className="text-white text-4xl mb-10">Intermediate Plans</h4>
                <div className='flex max-[825px]:flex-col justify-center items-center gap-5'>
                    {plans.intermediate.map(plan => (
                        <PricingPlan
                            key={plan.title}
                            title={plan.title}
                            price={plan.price}
                            features={plan.features}
                            link={plan.link}
                            isSelected={selectedPlans.includes(plan.title)}
                            onChange={() => handlePlanChange(plan.title)}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-20">
                <h4 className="text-white text-4xl mb-10">Premium Plans</h4>
                <div className='flex max-[825px]:flex-col justify-center items-center gap-5'>
                    {plans.premium.map(plan => (
                        <PricingPlan
                            key={plan.title}
                            title={plan.title}
                            price={plan.price}
                            features={plan.features}
                            link={plan.link}
                            isSelected={selectedPlans.includes(plan.title)}
                            onChange={() => handlePlanChange(plan.title)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pricing;
