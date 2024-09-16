import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
