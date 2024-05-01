import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {
  
  

  // console.log(blogs)
  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          
          {/* <button onClick={() => {
            handleDelete(blog.id)
          }}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
