"use client";

import React, { useState, useRef, useEffect } from "react";

import { useRouter } from "next/navigation"; // Change this import

import { supabase } from "../../supabase_config/supabaseClient";
import Image from "next/image"; // Ensure you have this import
import DOMPurify from "dompurify";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[] | null>(null); // State to hold blog posts
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Keep this line
  const [bgImage, setBgImage] = useState<string>(""); // State for background image
  const [bannerTitle, setBannerTitle] = useState<string>(""); // State for banner title
  const [bannerSubquotes, setBannerSubquotes] = useState<string>(""); // State for banner subquotes


  // Fetch blog posts from Supabase
  const sanitizeHTML = (html: string) => {
    if (typeof window !== "undefined") {
      return {
        __html: DOMPurify.sanitize(html),
      };
    }
    return { __html: html }; // Fallback for server-side rendering
  };
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from("blogs").select("*");
      if (error) throw error;
      setPosts(data);
      setIsLoading(false);

      // Set the background image from the first blog post
      if (data.length > 0) {
        setBgImage(data[0].bg_image); // Adjust the field name as necessary
        setBannerTitle(data[0].banner_title); // Fetch banner title
        setBannerSubquotes(data[0].banner_subquotes); // Fetch banner subquotes
      }
    } catch (error) {
      setPosts([]);
      setIsLoading(false);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
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
    <div>
      {/* Banner Section */}
      <section className="relative h-screen sm:h-[70vh] md:h-[70vh] lg:h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog/newsletter.jpg"
            alt="Blog Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-10 sm:px-10 md:px-10 lg:px-20 mt-96">
          <div className="rounded-md border-l-8 border-[#609641] px-5 text-left">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Blogs
            </h1>
          </div>
        </div>
      </section>

      {/* Render blog posts here */}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 lg:grid-cols-3 lg:px-30">
          {/* Ensure grid layout for posts */}
          {posts != null &&
            posts.map((post) => (
              <div
                key={post.id}
                onClick={() => handlePostClick(post.id)}
                className="rounded-lg border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200 p-4 cursor-pointer"
              >
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="mb-2 h-auto w-full rounded-lg" // Responsive image
                  />
                )}
                <h2
                  className="mb-2 text-xl font-bold text-[#030303]"
                  dangerouslySetInnerHTML={sanitizeHTML(post.title)}
                ></h2>
                <p
                  className="line-clamp-3 flex-grow text-gray-700"
                  dangerouslySetInnerHTML={sanitizeHTML(post.content + "...")}
                ></p>
                <div className="tags mt-2 flex flex-wrap">
                  {post.tags.map((tag: string) => (
                    <div
                      key={tag}
                      className="tag mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-sm sm:text-base md:text-lg lg:text-xl"
                    >
                      {tag}
                    </div>
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
