import Head from "next/head";
import styles from './layout.module.css'
import utileStyles from '../styles/utils.module.css'

type Props = {
  children: React.ReactNode;
};

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout(props: Props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img  src="./images/profile.png" className={utileStyles.borderCircle} />
        <h1 className={utileStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
