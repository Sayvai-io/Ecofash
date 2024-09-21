import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - EcoFash",
  description: "This is Blog page for EcoFash",
  // other metadata
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
