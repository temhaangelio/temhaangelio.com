import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import glob from "glob";
import Layout from "../../components/Layout";
import Link from "next/link";
import Reklam from "../../components/Reklam";

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  return (
    <Layout className="mb-10" siteTitle={siteTitle}>
      <article>
        <figure>
          <Image
            width="1920"
            height="1080"
            src={frontmatter.hero_image}
            alt={`blog_hero_${frontmatter.title}`}
            className="rounded-2xl"
          />
        </figure>
        <div className="my-10">
          <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
          <h3 className="text-gray-500">{reformatDate(frontmatter.date)}</h3>
        </div>
        <div className="flex flex-col gap-5 text-xl">
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
        </div>
        <Reklam />
      </article>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const config = await import(`../../data/config.json`);
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogs = glob.sync("posts/**/*.md");
  const blogSlugs = blogs.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );
  const paths = blogSlugs.map((slug) => {
    return { params: { slug: slug } };
  });
  return {
    paths,
    fallback: false,
  };
}
