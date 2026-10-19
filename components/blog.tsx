import { allPosts } from "../.contentlayer/generated";
import PostItem from "./post-item";
import ScheduleButton, { CtaProps } from "./schedule-button";

// Keep fewer than 3 posts centered instead of left-aligned in a 3-column grid
const gridClasses: Record<number, string> = {
  1: "grid gap-12 items-start md:max-w-md md:mx-auto",
  2: "grid gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8 items-start md:max-w-3xl md:mx-auto",
};

type NewsProps = {
  // Show these posts in this order; defaults to the 3 most recent
  slugs?: string[];
  heading?: React.ReactNode;
  cta?: CtaProps;
};

export default function News({
  slugs,
  heading = "Success Stories",
  cta,
}: NewsProps) {
  let posts;
  if (slugs) {
    posts = slugs.map((slug) => {
      const post = allPosts.find((p) => p.slug === slug);
      if (!post) throw new Error(`Unknown case study slug: ${slug}`);
      return post;
    });
  } else {
    // Sort posts by date
    allPosts.sort((a, b) => {
      return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
    });

    posts = allPosts.slice(0, 3);
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              {heading}
            </h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div
              className={
                gridClasses[posts.length] ??
                "grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start"
              }
            >
              {posts.map((post, postIndex) => (
                <PostItem key={postIndex} {...post} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex grow justify-center mb-20 flex-wrap items-center">
          <ScheduleButton {...cta} />
        </div>
      </div>
    </section>
  );
}
