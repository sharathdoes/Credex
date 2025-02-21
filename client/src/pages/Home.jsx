import React from "react";
import Navbar from "../helpers/Navbar";
import { DollarSign, CreditCard, Gift, Shield, TrendingUp, Users, CheckCircle, ArrowRight, ArrowDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
    const scrollToFeatures = () => {
        document.getElementById('fetures')?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-dark-100 to-black">
      <Navbar/>
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 hero-icon">
            <CreditCard className="w-32 h-32 text-[#2596be]/20" />
          </div>
          <div className="absolute top-40 right-40 hero-icon">
            <Gift className="w-24 h-24 text-[#2596be]/20" />
          </div>
          <div className="absolute bottom-20 left-1/3 hero-icon">
            <DollarSign className="w-40 h-40 text-[#2596be]/20" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl font-black text-white sm:text-6xl mb-8 leading-tight">
              Transform Your Unused <span className="text-[#2596be] glow">Cards</span><br />
              Into <span className="text-[#2596be] glow">Passive Income</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join thousands earning rewards by sharing their unused benefits
            </p>
            <div className="flex justify-center gap-6">
              <button className="cta-button bg-[#2596be] text-white px-5 pl-6 py-3 rounded-xl  font-extrabold hover:bg-[#2596be]/90 transition-colors flex items-center group">
                Start Earning Now <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button onClick={scrollToFeatures} className="border-2 border-[#2596be] text-[#2596be] px-4 py-3 rounded-xl  font-bold hover:bg-[#2596be]/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 mt-40 bg-dark-200/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="stat-number">
              <p className="text-6xl font-black text-[#2596be] mb-2">$2.5M+</p>
              <p className="text-xl text-gray-300">Earned by our users</p>
            </div>
            <div className="stat-number" style={{ animationDelay: '0.2s' }}>
              <p className="text-6xl font-black text-[#2596be] mb-2">50K+</p>
              <p className="text-xl text-gray-300">Active users</p>
            </div>
            <div className="stat-number" style={{ animationDelay: '0.4s' }}>
              <p className="text-6xl font-black text-[#2596be] mb-2">98%</p>
              <p className="text-xl text-gray-300">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fetures" className="min-h-screen  pb-20 pt-20 mt-10 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full ">
          <div className="feature-mega-crd  bg-gray-1000 backdrop-blur-xl p-12 lg:p-20 rounded-3xl shadow-2xl relative overflow-hidden glow">
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black text-white mb-8">
                    Unlock the Power of <span className="text-[#2596be] glow">Shared Benefits</span>
                  </h1>
                  <p className="text-xl lg:text-xl text-gray-300 mb-8">
                    Our platform connects people with unused credit card rewards and coupons to those who need them, creating a win-win marketplace that benefits everyone.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-[#2595be] mr-3" />
                      <span className="text-white text-lg">Share Card Benefits</span>
                    </div>
                    <div className="flex items-center">
                      <Gift className="w-5 h-5 text-[#2595be] mr-3" />
                      <span className="text-white text-lg">Trade Coupons</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-[#2595be] mr-3" />
                      <span className="text-white text-lg">Earn Passively</span>
                    </div>
                  </div>
                  <button onClick={() => navigate('/auth')} className="mt-12 cta-button bg-[#2596be] text-white px-6 py-3 rounded-xl text-xl font-bold hover:bg-[#2596be]/90 transition-colors inline-flex items-center group">
                    Discover More <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform" />
                  </button>   
                </div>
                <div className="relative">
               <div className="aspect-square rounded-full bg-[#2596be]/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-8 relative">
                    <div className="feature-icon-box bg-dark-300/80 p-8 rounded-2xl transform hover:scale-105 transition-transform">
                      <CreditCard className="w-4 h-4 text-[#2596be] mb-4" />
                      <p className="text-white font-semibold">Credit Card Rewards</p>
                    </div>
                    <div className="feature-icon-box bg-dark-300/80 p-8 rounded-2xl transform hover:scale-105 transition-transform">
                      <Gift className="w-4 h-4 text-[#2596be] mb-4" />
                      <p className="text-white font-semibold">Digital Coupons</p>
                    </div>
                    <div className="feature-icon-box bg-dark-300/80 p-8 rounded-2xl transform hover:scale-105 transition-transform">
                      <DollarSign className="w-4 h-4 text-[#2596be] mb-4" />
                      <p className="text-white font-semibold">Instant Earnings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-dark-100/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">
          Join thousands of smart users earning passive income

          </h2>
          {/* <p className="text-lg text-gray-300 mb-12">
            Join thousands of smart users earning passive income
          </p> */}
          <button className="cta-button bg-[#2596be] text-white px-4 py-2 rounded-xl text-2xl font-bold hover:bg-[#2596be]/90 transition-colors inline-flex items-center group">
            Create Free Account <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
