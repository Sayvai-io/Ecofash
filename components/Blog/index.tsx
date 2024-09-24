"use client";

import React, { useState, useRef, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import ComingSoon from './coming-soon'; // Assuming ComingSoon is in the same directory
import Link from 'next/link'; // Import Link from next/link
import { useRouter } from 'next/router'; // Add this import

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // State to hold blog posts
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize router

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
    <div className=" px-30 py-30"> {/* Grid layout with 3 columns */}
      {isLoading && <p>Loading...</p>}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {posts.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="posts-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Ensure grid layout for posts */}
          {posts.map((post) => (
            <button 
            onClick={() => {
              
             
              router.push(`/blogdetailpage/${post.id}`); // Use post.id instead of blog.id
            }}
            >
              <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200"> {/* Added hover effect */}
                {post.image_url && (
                  <img 
                    src={post.image_url} 
                    alt={post.title} 
                    className="w-full h-auto mb-2" // Responsive image
                  />
                )}
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="flex-grow text-gray-700">{post.content}</p>
                <div className="tags mt-2">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="tag bg-gray-200 px-2 py-1 rounded mr-2">{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
