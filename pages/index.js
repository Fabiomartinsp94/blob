import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import Photo from "../components/round_photo/rount_photo";
import PostsList from "../components/post_list/post_list";

import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts'


export default function Home({ allPostsData }) {
  const names = ["Guilherme", "Fabio"];

  const header = {
    date: "18 de Março, 2021",
    author: "Guilherme",
  };

  const title = "Test title";
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            sodales sem, vitae vulputate mauris. Suspendisse in rhoncus sapien,
            sed aliquet quam. Etiam sit amet tempus velit. Curabitur justo
            justo, semper eget consequat in, malesuada nec sem. Ut id dui vel
            velit laoreet viverra eu sit amet tortor.`;

  return (
    <Layout>
      <section>
        <div className={utilStyles.title}>
          <div>
            <Image
              priority
              src={`/blob.png`}
              height={70}
              width={180}
              alt="logo"
              objectFit="fill"
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className={utilStyles.liner}>News</h1>
        <PostsList data={allPostsData} slice={2}></PostsList>
      </section>
      <section>
        <h1 className={utilStyles.liner}>Devs</h1>
        <Photo names={names}
              height={200}>
        </Photo>
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