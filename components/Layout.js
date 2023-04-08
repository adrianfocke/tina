import Link from "next/link";
import Head from "next/head";
import ResponsiveImage from "./ResponsiveImage";
import { APP_DESCRIPTION, APP_TITLE } from "../constants";

import muffin from "../public/uploads/muffin.jpg";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        {" | "}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </header>

      <main>
        {props.children}
        <div style={{ width: "100%", height: "50vh" }}>
          <ResponsiveImage image={muffin} withBoxShadow priority />
        </div>
      </main>
    </>
  );
};
