
import BlogPostCard from '../_components/blog-cards';
import { getAllPosts } from '../lib/api';
const Blogs = () => {
debugger
   const allPosts = getAllPosts();
    // const  = allPosts[0];
    const morePosts = allPosts.slice(1);

  return (
     <BlogPostCard posts={morePosts} />
    )
  };


  export default Blogs;