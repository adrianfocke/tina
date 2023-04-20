import Link from "next/link";
import Head from "next/head";
import { APP_DESCRIPTION, APP_TITLE } from "../constants";
import styles from "./Layout.module.scss";

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
          {/* // TODO think about applying classes, remove this one also */}
          <a className={styles.links}>Home</a>
        </Link>
        <Link href="/imprint">
          <a className={styles.links}>Imprint</a>
        </Link>
      </header>

      <main>
        {props.children}
      </main>
    </>
  );
};
