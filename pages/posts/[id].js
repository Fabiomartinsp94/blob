import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from "next/head";
import Photo from "../../components/round_photo/rount_photo";

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';



export default function Post({ postData }) {
  const content = unified()
    .use(parse)
    .use(remark2react)
    .processSync(postData.contentHtml).result;
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <div className={utilStyles.liner}>
        <h1 className={utilStyles.title}>{postData.title}</h1>
          <Date dateString={postData.date} />
        </div>
        <div>
            {content}
        </div>
      </article>
      <section>
      <Photo names={[postData.author]}
              height={100}>
      </Photo>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
