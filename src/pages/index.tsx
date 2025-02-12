import { Geist, Geist_Mono } from "next/font/google";
import {client} from "@/libs/client"
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";

import { MicroCMSListResponse } from "microcms-js-sdk";

type BlogList = {
  title: string;
  body: string;
}

type HomeProps = {
  blog: MicroCMSListResponse<BlogList>;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: NextPage<HomeProps> = ({blog}) => {
  console.log(blog)
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1>hello world</h1>
      <p>hearty plus+ のサイト</p>
      <ul>
        {blog.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data,
    },
  };
};

export default Home;
