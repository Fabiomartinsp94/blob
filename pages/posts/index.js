import Image from "next/image";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from 'next/link'
import Date from '../../components/date'
import { getSortedPostsData } from '../../lib/posts'
import Post from "../../components/post/post";

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <section>
        <h1 className={utilStyles.liner}>Recent content</h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author, description }) => (
            //<Link href={`/posts/${id}`}>
              <Post date={date} title={title} author={author} description={description} key={id}><p>{id}</p></Post>
            //</Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}