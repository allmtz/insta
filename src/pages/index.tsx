//next
import Head from "next/head";
import Image from "next/image";

//types
import type { NextPage } from "next";
import { Post } from "../tipos/types";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addPost, postsSelector } from "../features/Post/postsSlice";

//components
import { Feed } from "../components/Feed";
import { Nav } from "../components/Nav";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";

//assets
import mockImage from "../assets/nature.jpg";

const IndexPage: NextPage = () => {
  const posts = useSelector(postsSelector);
  const dispatch = useDispatch();

  const postsDisplayed = posts.map((post: Post) => (
    <>
      <Image src={mockImage} alt="" height={300} width={320}></Image>
      <p>{post.content}</p>
    </>
  ));

  const onAddPost = () => {
    dispatch(
      addPost("this is username", "this is content", "unknown", mockImage)
    );
  };

  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Nav></Nav>
        <Feed></Feed>
        {postsDisplayed && postsDisplayed}
      </Layout>
    </>
  );
};

export default IndexPage;
