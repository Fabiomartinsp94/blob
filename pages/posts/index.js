import Image from "next/image";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Posts() {
  return (
    <Layout>
      <section>
        <h1 className={utilStyles.liner}>Recent content</h1>
      </section>
    </Layout>
  );
}
