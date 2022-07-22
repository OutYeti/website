import Link from "next/link";
import React from "react";
import PostType from "../interfaces/post";
import CoverImage from "./cover-image";

interface Props {
  post: PostType;
}

const PostPreview: React.FC<Props> = ({ post }) => {
  return (
    <div className="mb-10 lg:mb-14 cursor-pointer text-center">
      <Link href={`/posts/${post.slug}`}>
        <div>
          <div className="mb-4">
            <CoverImage title={post.title} src={post.coverImage} />
          </div>
          <h1 className="text-3xl mb-2 font-semibold text-slate-200">
            {post.title}
          </h1>
          <p className="text-slate-400">{post.excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
