import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostDataId } from "../../lib/post";
import utilStyle from "../../styles/utils.module.css";

export const getStaticPaths = () => {
  const paths = getAllPostIds();
  if (paths !== undefined) {
    return {
      paths,
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }: any) => {
  if (params !== undefined && params.id !== undefined && typeof params.id === "string") {
    const postData = await getPostDataId(params.id);
    return {
      props: {
        postData,
      },
    };
  }
};

type Props = {
  postData: {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
    blogContentHTML: string;
  };
};

export default function Post(props: Props) {
  const { postData } = props;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}>{/* <Date dateString={postData.date} /> */}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
