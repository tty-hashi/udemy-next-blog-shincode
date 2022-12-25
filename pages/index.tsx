import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import { getPostData } from "../lib/post";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData, //これをHomeに渡す
    },
  };
}
type AllPostsData = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
  }[];
};
const Home: React.FC<AllPostsData> = (props) => {
  const { allPostsData } = props;

  return (
    <>
      <Layout home={true}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <p>私は、フロントエンドエンジニア１年目です</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2 className="">✍　エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={thumbnail} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
