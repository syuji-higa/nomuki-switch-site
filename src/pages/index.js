import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '飲む前にタップ',
    imageUrl: 'img/illust-1.png',
    description: (
      <>
        お酒を飲む前にスイッチを押して、楽しい気持ちに切り替えて飲み始めよう！
      </>
    ),
  },
  {
    title: '飲み過ぎに気をつける',
    imageUrl: 'img/illust-2.png',
    description: (
      <>
        1週間以内に飲んだ回数を確認して、体のことを考えながら飲もう。
      </>
    ),
  },
  {
    title: '面倒な管理はなし',
    imageUrl: 'img/illust-3.png',
    description: (
      <>
        とりあえずタップ、そして回数を確認する。それだけ。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              href="#" target="_blank">
              アプリを取得
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
