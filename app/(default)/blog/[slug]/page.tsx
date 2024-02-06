import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import PostTags from "@/components/post-tags";
import { PostMdx } from "@/components/mdx/post-mdx";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description } = post;

  return {
    title,
    description,
  };
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <article>
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">
                    {post.title}
                  </h1>
                  <p
                    className="text-xl text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {post.summary}
                  </p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-3">
                  {/* Author meta */}
                  <div
                    className="flex items-center justify-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <Link href="#">
                      <Image
                        className="rounded-full shrink-0 mr-4"
                        src={post.authorImg}
                        width={40}
                        height={40}
                        alt={post.author}
                      />
                    </Link>
                    <div>
                      <Link
                        href="#"
                        className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {post.author}
                      </Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500">
                        <PostDate dateString={post.publishedAt} />
                      </span>
                    </div>
                  </div>
                  {/* Article tags */}
                  {/* {post.tags && (
                    <div
                      className="flex justify-center mt-4 md:mt-0"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <PostTags tags={post.tags} />
                    </div>
                  )} */}
                </div>
              </header>

              {/* Article image */}
              {post.image && (
                <figure
                  className="mb-8 lg:-ml-32 lg:-mr-32"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Image
                    className="w-full"
                    src={post.image}
                    width={1024}
                    height={576}
                    alt={post.title}
                    priority
                  />
                </figure>
              )}

              {/* Article content */}
              <PostMdx code={post.body.code} />

              {/* Article footer */}
              <footer>
                <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                  <div className="text-lg text-gray-400 italic">
                    Originally published at{" "}
                    <Link
                      href="https://opsflowlabs.com/"
                      className="text-gray-200"
                    >
                      https://opsflowlabs.com/
                    </Link>
                    .
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
