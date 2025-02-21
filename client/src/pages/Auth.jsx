"use client"

import { useState } from "react"

export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true)

  const toggleForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-800 rounded-lg bg-gray-950 p-6">
        <div className="mb-6">
          <h2 className="text-2xl text-white font-semibold">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <p className="text-gray-400 mt-1">
            {isSignIn ? "Welcome back! Please sign in to your account." : "Create a new account to get started."}
          </p>
        </div>
        <form className="space-y-4">
          {!isSignIn && (
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
              />
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#2596be] hover:bg-[#1c7a9e] text-white rounded-md transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={toggleForm} className="text-[#2596be] hover:underline">
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  )
}

