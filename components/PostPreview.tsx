import Link from "next/link";
import React from "react";
import PostType from "../interfaces/post";

interface Props {
  post: PostType;
}

const PostPreview: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
