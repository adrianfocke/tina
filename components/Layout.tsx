import Link from "next/link";
import Head from "next/head";
import { APP_DESCRIPTION, APP_TITLE } from "../constants";
import styles from "./Layout.module.scss";

export const Layout = (props) => {
  return <>
    <Head>
      <title>{APP_TITLE}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <br /><br />

    <main>
      {props.children}
    </main>

    <header>
      <Link href="/" className={styles.links}>
        {/* // TODO think about applying classes, remove this one also */}
        Home
      </Link>
      <Link href="/imprint" className={styles.links}>
        Imprint
      </Link>
    </header>
  </>;
};
