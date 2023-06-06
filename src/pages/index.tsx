import type { NextPage } from "next";
import Head from "next/head";
import { Feed } from "../components/Feed";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feed></Feed>
    </>
  );
};

export default IndexPage;
