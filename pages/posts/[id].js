import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from "next/head";
import Photo from "../../components/round_photo/rount_photo";
import Link from "next/link";


export default function Post({ postData }) {
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      
        <h1 className={utilStyles.title}>{postData.title}</h1>
        
        <div className={utilStyles.marginBottom}>
          <div class={`${utilStyles.centerLink} ${utilStyles.withLink}`}>
            <Link href={`/bios/${postData.author.toLowerCase()}`}>{postData.author}</Link>
          </div>
          <div>
           <Date dateString={postData.date} />
          </div>
        </div>

        
        
        <article className={utilStyles.article}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
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