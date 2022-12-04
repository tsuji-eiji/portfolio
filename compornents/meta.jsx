import Head from "next/head"

export default function Meta({title}) {
  return (
    <>
      <Head>
        <title>{title} - Tech24</title>
        <meta name="description" content="大阪市内在住のエンジニア ツジエイジのポートフォリオサイト" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content="大阪市内在住のエンジニア ツジエイジのポートフォリオサイト" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tsuji-eiji.vercel.app/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Tech24 - 大阪市内在住のエンジニア ツジエイジのポートフォリオ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}