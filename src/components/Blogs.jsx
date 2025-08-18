import { FiExternalLink } from "react-icons/fi";
import Container from "./Container";

const blogs = [
  {
    title: "Dangerous site on Github Pages",
    link: "https://medium.com/@rachitk29/dangerous-site-on-git-pages-d81d119fe796",
  },
];

const BlogList = () => (
  <Container>
    <div className="pt-4 space-y-4 font-figtree border-t border-[#27272a] tracking-wider">
      <p className="text-gray-400 mb-2 text-sm">
        Here are some <b>blogs</b> I've written
      </p>

      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center w-full border border-white/10 rounded-md px-4 py-3 hover:border-white/30 transition-colors duration-200"
        >
          <span className="text-gray-400 text-sm">{blog.title}</span>
          <FiExternalLink className="text-gray-400" size={18} />
        </a>
      ))}
    </div>
  </Container>
);

export default BlogList;
