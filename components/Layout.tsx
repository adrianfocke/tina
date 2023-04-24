import Head from "next/head";
import Link from "next/link";
import { APP_DESCRIPTION, APP_TITLE } from "../constants";
import { STYLES_PADDING, STYLES_PADDING_DOUBLE } from "../constants/styles";
import { StyleSheet } from "../types/other";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br />
      <br />

      <main>{props.children}</main>

      <header>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        <Link href="/imprint" style={styles.link}>
          Imprint
        </Link>
      </header>
    </>
  );
};

const styles: StyleSheet = {
  link: {
    padding: STYLES_PADDING,
    paddingBottom: STYLES_PADDING_DOUBLE,
  },
};
