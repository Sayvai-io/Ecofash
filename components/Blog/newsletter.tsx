import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className="bg-[#D9D9D9] pb-12 pt-12">
      <div className="relative p-8 max-w-6xl mx-auto my-12 rounded-xl overflow-hidden h-[400px] flex items-center justify-center">
        <Image
          src="/images/blog/newsletter.jpg"
          alt="Newsletter background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-white max-w-xl ">
          <h2 className="text-3xl font-bold mb-4">Sign Up for Our Newsletters</h2>
          <p className="text-lg mb-6">Get the freshest news on sustainability</p>
          
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 pr-24 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-black rounded-md"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 border border-gray-300 text-gray-500 px-4 hover:bg-gray-300 transition duration-300"
              >
                Subscribe
              </button>
            </div>
            
            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1" required />
              <label htmlFor="terms" className="text-xs text-left">
                By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
