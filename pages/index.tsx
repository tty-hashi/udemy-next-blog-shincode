import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>私は、フロントエンドエンジニア１年目です</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2 className=''>✍　エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyle.boldText}>これは１つ目のタイトルです</Link>
              <br />
              <small className={utilStyle.lightText}>2022.12.24</small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail02.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyle.boldText}>これは１つ目のタイトルです</Link>
              <br />
              <small className={utilStyle.lightText}>2022.12.24</small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail03.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyle.boldText}>これは１つ目のタイトルです</Link>
              <br />
              <small className={utilStyle.lightText}>2022.12.24</small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail04.jpg" className={styles.thumbnailImage} />
              </Link>
              <Link href="/" className={utilStyle.boldText}>これは１つ目のタイトルです</Link>
              <br />
              <small className={utilStyle.lightText}>2022.12.24</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
