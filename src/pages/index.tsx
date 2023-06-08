//next
import Head from "next/head";

//types
import type { NextPage } from "next";

//components
import { Feed } from "../components/Feed";
import { Nav } from "../components/Nav";
import { Layout } from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Nav></Nav>
        <Feed></Feed>
      </Layout>
    </>
  );
};

export default IndexPage;
