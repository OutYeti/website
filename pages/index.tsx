import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Link from "next/link";
import PostPreview from "../components/PostPreview";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Jamie Hughes | Portfolio</title>
        </Head>
        <div className="mx-4 lg:mx-auto gap-10 max-w-xl my-20">
          {allPosts.map((post) => (
            <PostPreview post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
