import Head from "next/head";

import styles from "./layout.module.css";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

export const siteTitle = "Blob";

export default function Layout({  children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Blob</title>
        <link rel="icon" href="/logo1.png" />
        <meta name="description" content="Our personal blog using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <navbar>
        <Navbar></Navbar>
      </navbar>
      <main className={styles.container}>
        <div className="grid">{children}</div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
