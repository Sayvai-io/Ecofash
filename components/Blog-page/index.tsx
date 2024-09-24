"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Change to next/navigation
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const BlogDetailpage = () => {
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Get the ID from the URL using window.location
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    setId(postId);
  }, []);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
        if (error) {
          console.error(error);
        } else {
          setPost(data);
        }
      };
      fetchPost();
    }
  }, [id]);

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
