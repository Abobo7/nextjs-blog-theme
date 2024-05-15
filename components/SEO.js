import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4665717025325085"
        crossorigin="anonymous"></script>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
