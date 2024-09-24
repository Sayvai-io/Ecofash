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

"use client";

import React, { useState, useRef, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import ComingSoon from './coming-soon'; // Assuming ComingSoon is in the same directory

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // State to hold blog posts
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch blog posts from Supabase
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from('blogs').select('*');
      if (error) throw error;
      setPosts(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-30">
      {isLoading && <p>Loading...</p>}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {posts.length === 0 ? ( // Check if there are no posts
        <ComingSoon /> // Render ComingSoon component
      ) : (
        <div className="posts-list">
          <section className="py-20 lg:py-25 xl:py-15 px-4 md:px-20">
            <div className="container">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3"> {/* Adjusted gap */}
                {posts.map((post) => (
                  <div 
                    key={post.id} 
                    className="post mb-4 p-4 border rounded w-[300px] h-[350px] flex flex-col justify-between mx-auto" // Fixed width and height
                  >
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="flex-grow">{post.content}</p>
                    <div className="tags mt-2">
                      {post.tags.map((tag: string) => (
                        <span key={tag} className="tag bg-gray-200 px-2 py-1 rounded mr-2">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Blog;

