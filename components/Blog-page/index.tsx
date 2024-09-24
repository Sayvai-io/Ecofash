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
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Get the blog ID from the route parameters
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching blog details:', error);
          setError('Blog not found');
        } else {
          setTitle(data.title);
          setContent(data.content);
          setTags(data.tags);
          setImagePreview(data.image_url);
        }
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Additional handling (image upload, form submission, etc.) goes here

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">
        <h1>{id}</h1>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{tags}</p>
        {/* Add more post details as needed */}
      </section>
    </>
  );
};

export default BlogDetailpage;
