"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from 'next/navigation'; // Import useParams
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const BlogDetailpage = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the blog ID from the route parameters
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching blog:', error);
        return;
      }

      setBlog(data);
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">
        <h1>{id}</h1>
        {/* Add more post details as needed */}
      </section>
    </>
  );
};

export default BlogDetailpage;
