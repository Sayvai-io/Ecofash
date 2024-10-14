// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import ComingSoon from "./coming-soon"; // Assuming ComingSoon is in the same directory
// import Link from "next/link"; // Import Link from next/link
// import { useRouter } from "next/navigation"; // Change this import

// import { supabase } from "../../supabase_config/supabaseClient";
// import DOMPurify from "dompurify";

// const Blog: React.FC = () => {
//   const [posts, setPosts] = useState<any[] | null>(null); // State to hold blog posts
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter(); // Keep this line

//   // Fetch blog posts from Supabase
//   const sanitizeHTML = (html: string) => {
//     return {
//       __html: DOMPurify.sanitize(html),
//     };
//   };
//   const fetchPosts = async () => {
//     setIsLoading(true);
//     try {
//       const { data, error } = await supabase.from("blogs").select("*");
//       if (error) throw error;
//       setPosts(data);
//       setIsLoading(false);
//     } catch (error) {
//       setPosts([]);
//       setIsLoading(false);
//       setError(
//         error instanceof Error ? error.message : "An unknown error occurred",
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(); // Fetch posts on component mount
//   }, []);

//   // Add this new function
//   const handlePostClick = (postId: string) => {
//     router.push(`/blogdetailpage/${postId}`);
//   };

//   return (
//     <div className="!h-full px-17 py-30 md:px-30">
//       {" "}
//       {/* Grid layout with 3 columns */}
//       {error && <div className="mb-4 text-red-500">{error}</div>}
//       {posts == null && (
//         <div className="grid h-full grid-cols-3 gap-4">
//           <div className="col-span-3 h-[500px]  animate-pulse    cursor-pointer rounded-lg p-4 shadow-md  transition-shadow duration-200 hover:shadow-lg md:col-span-2 lg:col-span-1">
//             <div className="h-3/4 rounded bg-gray-100"></div>
//           </div>
//           <div className="col-span-3 h-[500px]  animate-pulse    cursor-pointer rounded-lg p-4 shadow-md  transition-shadow duration-200 hover:shadow-lg md:col-span-2 lg:col-span-1">
//             <div className="h-3/4 rounded bg-gray-100"></div>
//           </div>
//           <div className="col-span-3 h-[500px]  animate-pulse    cursor-pointer rounded-lg p-4 shadow-md  transition-shadow duration-200 hover:shadow-lg md:col-span-2 lg:col-span-1">
//             <div className="h-3/4 rounded bg-gray-100"></div>
//           </div>
//         </div>
//       )}
//       {posts && posts.length == 0 ? (
//         <ComingSoon />
//       ) : (
//         <div className="grid grid-cols-3 gap-4">
//           {" "}
//           {/* Ensure grid layout for posts */}
//           {posts != null &&
//             posts.map((post) => (
//               <div
//                 key={post.id}
//                 onClick={() => handlePostClick(post.id)}
//                 className="col-span-3 cursor-pointer rounded-lg p-4 transition-shadow  duration-200 hover:shadow-lg md:col-span-2 lg:col-span-1"
//               >
//                 {post.image_url && (
//                   <img
//                     src={post.image_url}
//                     alt={post.title}
//                     className="mb-2 h-auto w-full rounded-lg" // Responsive image
//                   />
//                 )}
//                 <h2
//                   className="mb-2 text-xl font-bold text-[#030303]"
//                   dangerouslySetInnerHTML={sanitizeHTML(post.title)}
//                 ></h2>
//                 <p
//                   className="line-clamp-3 flex-grow text-gray-700"
//                   dangerouslySetInnerHTML={sanitizeHTML(post.content + "...")}
//                 ></p>
//                 {/* <p className="flex-grow text-gray-700">
//                   {post.content.split(" ").slice(0, 10).join(" ") +
//                     (post.content.split(" ").length > 10 ? "..." : "")}
//                 </p> */}
//                 <div className="tags mt-2 flex flex-wrap">
//                   {post.tags.map((tag: string) => (
//                     <div
//                       key={tag}
//                       className="tag mb-2 mr-2 rounded bg-gray-200 px-2 py-1"
//                     >
//                       {tag}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blog;


"use client";

import React, { useState, useEffect } from "react";
import ComingSoon from "./coming-soon";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase_config/supabaseClient";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import translationData from "../../app/store/translation.json";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const language = useSelector((state: any) => state.language.language);

  const sanitizeHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const translateContent = (content: string) => {
    return language === "en" ? content : translationData[content] || content;
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from("blogs").select("*");
      if (error) throw error;
      setPosts(data);
    } catch (error) {
      setPosts([]);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [language]);

  const handlePostClick = (postId: string) => {
    router.push(`/blogdetailpage/${postId}`);
  };

  return (
    <div className="!h-full px-17 py-30 md:px-30">
      {error && <div className="mb-4 text-red-500">{translateContent(error)}</div>}
      {isLoading && (
        <div className="grid h-full grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="col-span-3 h-[500px] animate-pulse cursor-pointer rounded-lg p-4 shadow-md transition-shadow duration-200 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <div className="h-3/4 rounded bg-gray-100"></div>
            </div>
          ))}
        </div>
      )}
      {!isLoading && posts && posts.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {posts != null &&
            posts.map((post) => (
              <div
                key={post.id}
                onClick={() => handlePostClick(post.id)}
                className="col-span-3 cursor-pointer rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg md:col-span-2 lg:col-span-1"
              >
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={translateContent(post.title)}
                    className="mb-2 h-auto w-full rounded-lg"
                  />
                )}
                <h2
                  className="mb-2 text-xl font-bold text-[#030303]"
                  dangerouslySetInnerHTML={sanitizeHTML(translateContent(post.title))}
                ></h2>
                <p
                  className="line-clamp-3 flex-grow text-gray-700"
                  dangerouslySetInnerHTML={sanitizeHTML(translateContent(post.content) + "...")}
                ></p>
                <div className="tags mt-2 flex flex-wrap">
                  {post.tags.map((tag: string) => (
                    <div
                      key={tag}
                      className="tag mb-2 mr-2 rounded bg-gray-200 px-2 py-1"
                    >
                      {translateContent(tag)}
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