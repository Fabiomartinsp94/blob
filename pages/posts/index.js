
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from '../../lib/posts'
import PostsList from "../../components/post_list/post_list";

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <section>
        <h1 className={utilStyles.liner}>Recent content</h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <PostsList data={allPostsData}></PostsList>
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