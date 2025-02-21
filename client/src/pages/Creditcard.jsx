import { useState } from "react";

export default function CreditCard() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-800 rounded-lg bg-gray-950 p-6">
        <div className="mb-6">
          <h2 className="text-2xl text-white font-semibold">
            Credit Card details
          </h2>
          <p className="text-gray-400 mt-1">
            Do you want to benefit with your credit card?
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">
              Card Holder Name
            </label>
            <input
              id="text"
              type="text"
              placeholder="Enter your Name"
              className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="cardType" className="block text-white">
              Card Type
            </label>
            <select
              id="cardType"
              className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            >
              <option value="sbi">SBI</option>
              <option value="hdfc">HDFC</option>
              <option value="axis">Axis</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">
              Card Number
            </label>
            <input
              id="text"
              type="text"
              placeholder="Enter your Card Number"
              className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">
              Card Holder Mobile
            </label>
            <input
              id="text"
              type="text"
              placeholder="Enter your Mobile Number"
              className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#2596be] hover:bg-[#1c7a9e] text-white rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <button className="text-[#2596be] hover:underline">
            Skip this & continue later?
          </button>
        </div>
      </div>
    </div>
  );
}
