import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Link from "next/link";

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
        <div>
          {allPosts.map((post) => (
            <Link href={`/posts/${post.slug}`}>
              <div>
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
              </div>
            </Link>
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
