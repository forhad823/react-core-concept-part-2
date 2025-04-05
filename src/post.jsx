export default function Post({post}) {
    return (
      <div className="border-2 border-green-500 rounded-xl m-2.5 p-2.5">
        <p>{post.body}</p>
      </div>
    );
}