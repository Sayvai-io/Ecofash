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
        <h1 className="font-bold text-[#0b0b0b] text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 text-center mt-10 sm:mt-6 md:mt-8">{title}</h1> {/* Responsive title */}
        {imagePreview && ( // Display image if available
          <div className="flex justify-center mb-4 px-4 sm:px-8 md:px-12 lg:px-32"> {/* Responsive padding on left and right */}
            <img 
              src={imagePreview} 
              alt={title} 
              className="max-w-full h-auto rounded-lg" // Responsive size with rounded corners
            />
          </div>
        )}
        <h1 className="font-bold text-gray-700 text-3xl mt-10 mb-4 px-4 sm:px-8 md:px-12 lg:px-50">{title}</h1> {/* Bold title with responsive padding */}
        <p className="text-lg text-gray-700 mb-4 px-4 sm:px-8 md:px-12 lg:px-50">{content}</p> {/* Content with larger font size and responsive padding */}
        
        {/* Display tags if available */}
        {tags.length > 0 && (
          <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-50"> {/* Responsive padding for tags section */}
            <h2 className="text-lg font-semibold">Tags:</h2>
            <div className="flex flex-wrap mt-2">
              {tags.map((tag: string) => (
                <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogDetailpage;
