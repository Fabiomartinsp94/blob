
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from 'next/link'
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
            <li className={utilStyles.withLink}>
                <Link href={`/posts/${id}`}>
                  <a>
                  <Post date={date} title={title} author={author} description={description}></Post>
                  </a>
                </Link>
              
            </li>
            
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