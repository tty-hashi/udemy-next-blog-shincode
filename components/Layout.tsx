import Head from "next/head";
import styles from "./layout.module.css";
import utileStyles from "../styles/utils.module.css";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  home?: boolean;
};

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout(props: Props) {
  const { children, home } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utileStyles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={utileStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={utileStyles.borderCircle} />
            <h1 className={utileStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="">
          <Link href="/">ホームへもどる</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
