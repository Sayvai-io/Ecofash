"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation"; // Import useParams
import { createClient } from "@supabase/supabase-js";

import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify";

const BlogDetailpage = () => {
  const sanitizeHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const router = useRouter();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          .from("blogs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching blog details:", error);
          setError("Blog not found");
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
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32 xl:py-30">
        <h1
          className="mb-6 mt-10 text-center text-4xl font-bold text-[#0b0b0b] sm:mb-10 sm:mt-6 sm:text-5xl md:mt-8 md:text-6xl"
          dangerouslySetInnerHTML={sanitizeHTML(title)}
        ></h1>{" "}
       
        {imagePreview && ( // Display image if available
          <div className="mb-4 flex justify-center px-4 sm:px-8 md:px-12 lg:px-32">
            {" "}
            
            <img
              src={imagePreview}
              alt={title}
              className="w-full max-w-3xl h-96 rounded-lg" // Large width, reduced height, responsive
            />
          </div>
        )}
        <h1
          className="mb-4 mt-10 px-4 text-3xl font-bold text-gray-700 sm:px-8 md:px-12 lg:px-50"
          dangerouslySetInnerHTML={sanitizeHTML(title)}
        ></h1>{" "}
        
        <p
          className="mb-4 px-4 text-lg text-gray-700 sm:px-8 md:px-12 lg:px-50"
          dangerouslySetInnerHTML={sanitizeHTML(content)}
        ></p>{" "}
       
        {tags.length > 0 && (
          <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-50">
            {" "}
          
            <h2 className="text-lg font-semibold">Tags:</h2>
            <div className="mt-2 flex flex-wrap">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="mb-2 mr-2 rounded bg-gray-200 px-2 py-1 text-gray-700"
                >
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
