import { Post } from "../interfaces/post";
import { Card } from "./card";

type Props = {
  posts: Post[];
};

export default function BlogPostCard({posts} : Props) {
  return (
   <>
   {posts.map((post) => {
    <Card
      key={post.slug}
      title={post.title}
      coverImage={post.coverImage}
      date={post.date}
      excerpt={post.excerpt}
      author={post.author}
      slug={post.slug}
    />
   })}
   </>
  );
}
