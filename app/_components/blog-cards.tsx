import { Post } from "@/app/interfaces/post";
import { Card } from "@/app/_components/card";

type Props = {
  posts: Post[];
};

export default function BlogPostCard({posts} : Props) {
   
  return (
   <>

   {posts.map((post) => (
             <Card
               key={post.slug}
               title={post.title}
               coverImage={post.coverImage}
               date={post.date}
               author={post.author}
               slug={post.slug}
               excerpt={post.excerpt}
             />
           ))}


   </>
  );
}
