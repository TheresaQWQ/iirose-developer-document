import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/start">
            Get Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "20px 0",
          flexFlow: "column",
          alignItems: "center"
        }}>
          <img style={{
            height: "60px",
            width: "48px"
          }} src={require('@site/static/img/fox-tail.gif').default} />
          <p>是什么呢~</p>
        </div>
      </main>
    </Layout>
  );
}
