"use client";

import React, { useState, useRef, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import ComingSoon from './coming-soon'; // Assuming ComingSoon is in the same directory
import Link from 'next/link'; // Import Link from next/link
import { useRouter } from 'next/navigation'; // Change this import

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // State to hold blog posts
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Keep this line

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

  // Add this new function
  const handlePostClick = (postId: string) => {
    router.push(`/blogdetailpage/${postId}`);
  };

  return (
    <div className="px-30 py-30"> {/* Grid layout with 3 columns */}
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {posts.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="posts-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Ensure grid layout for posts */}
          {posts.map((post) => (
            <div 
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className="cursor-pointer  p-4 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              {post.image_url && (
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-auto mb-2 rounded-lg" // Responsive image
                />
              )}
              <h2 className="text-xl text-[#030303] font-bold mb-2">{post.title}</h2>
              <p className="flex-grow text-gray-700">
                {post.content.split(' ').slice(0, 10).join(' ') + (post.content.split(' ').length > 10 ? '...' : '')}
              </p>
              <div className="tags mt-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="tag bg-gray-200 px-2 py-1 rounded mr-2">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
