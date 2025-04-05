import { use } from "react";
import Post from "./post";

export default function Posts({ postPromise }) {
  // console.log(postPromise);
  const posts = use(postPromise);

  return (
    <div className="border-2 border-green-500 rounded-xl m-2.5 p-2.5">
      <h2>All Posts are here: {posts.length} </h2>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
