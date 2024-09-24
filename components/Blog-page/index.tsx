"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router'; // Import useRouter
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const BlogDetailpage = () => {
  const router = useRouter(); // Initialize router
  const { id } = router.query; // Get post ID from URL
  const [post, setPost] = React.useState<any>(null); // State to hold the post data

  // Ensure the component is wrapped in a useEffect to avoid router not mounted error
  React.useEffect(() => {
    if (!router.isReady) return; // Wait for router to be ready
    const { id } = router.query; // Get post ID from URL

    // Fetch post details based on ID
    const fetchPost = async () => {
      if (id) {
        const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
        if (error) {
          console.error(error);
        } else {
          setPost(data);
        }
      }
    };
    fetchPost();
  }, [router.isReady, router.query]); // Add router.isReady to dependencies

  if (!post) {
    return <p>Loading...</p>; // Show loading state
  }

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">
        <h1>{post.title}</h1>
        <img src={post.image_url} alt={post.title} />
        <p>{post.content}</p>
        {/* Add more post details as needed */}
      </section>
    </>
  );
};

export default BlogDetailpage;
