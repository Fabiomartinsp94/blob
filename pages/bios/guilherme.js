import Layout from "../../components/layout";
import Identity from "../../components/bio/identity";


export default function GuilhermeBio() {
  const name = "Guilherme";
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
              sodales sem, vitae vulputate mauris. Suspendisse in rhoncus sapien,
              sed aliquet quam. Etiam sit amet tempus velit. Curabitur justo
              justo, semper eget consequat in, malesuada nec sem. Ut id dui vel
              velit laoreet viverra eu sit amet tortor.`;

  return (
    <Layout>
      <Identity name={name} description={description}></Identity>
    </Layout>
  );
}
