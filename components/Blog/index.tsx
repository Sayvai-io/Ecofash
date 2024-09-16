import BlogData from "./blogData";
import BlogItem from "./BlogItem";
import SectionHeader from "../Common/SectionHeader";
import Newsletter from "./newsletter";

const Blog = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="container">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.slice(0, 6).map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="mt-12 text-center mb-12">
          <button className="border-2 border-gray-600  text-gray-600 hover:text-white hover:bg-gray-500 font-semibold py-3 px-8 transition duration-300 ease-in-out">
            Load More
          </button>
        </div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Blog;
