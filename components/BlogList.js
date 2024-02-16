import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import React from "react";
import Reklam from "./Reklam";

function truncateSummary(content) {
  return content.slice(0, 160).trimEnd();
}

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogList = ({ allBlogs }) => {
  return (
    <ul className="flex flex-col gap-10 mb-24">
      {allBlogs &&
        allBlogs.length > 0 &&
        allBlogs.map((post, index) => (
          <React.Fragment key={post.slug}>
            <li>
              <Link href={{ pathname: `/blog/${post.slug}` }}>
                <div className="bg-gray-50 w-full h-96 relative mb-10">
                  <Image
                    fill
                    sizes="100vw"
                    src={post.frontmatter.hero_image}
                    alt={post.frontmatter.hero_image}
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl border border-indigo-100"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-indigo-950">
                    {post.frontmatter.title}
                  </h2>
                  <h3 className="text-gray-500 mb-5">
                    {reformatDate(post.frontmatter.date)}
                  </h3>
                  <ReactMarkdown
                    className="text-xl text-indigo-950"
                    disallowedElements={["a"]}
                  >
                    {truncateSummary(post.markdownBody)}
                  </ReactMarkdown>
                </div>
              </Link>
            </li>
            {index % 3 === 2 && ( // Her üç blog postundan sonra
              <li key={`ad-${index}`}>
                <Reklam />
              </li>
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};

export default BlogList;
