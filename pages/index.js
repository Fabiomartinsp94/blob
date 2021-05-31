import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import Post from "../components/post/post";
import Photo from "../components/round_photo/rount_photo";

import utilStyles from "../styles/utils.module.css";

export default function Home() {
  const names = ["Guilherme", "Fabio", "Juliane"];

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
        <Post header={header} title={title} description={description}></Post>
        <Post header={header} title={title} description={description}></Post>
        <Post header={header} title={title} description={description}></Post>
      </section>
      <section>
        <h1 className={utilStyles.liner}>Devs</h1>
        <Photo names={names}></Photo>
      </section>
    </Layout>
  );
}
