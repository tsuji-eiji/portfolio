import Image from 'next/image';
import Meta from '../../compornents/meta';
import {client} from '../../libs/client';
import {parseISO, format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import Link from 'next/link';

export default function Blog({ blog }) {
  return (
    <>
      <Meta title={blog.title}/>
      <div id='wrapper' className='article-wrapper'>
        <h2 id='article-title'>{blog.title}</h2>
        <p id='article-date-line'>
          <span id='article-date'>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</span>
          <span id='article-category'>{blog.category.name}</span>
        </p>
        <Image src={blog.eyecatch.url} alt="" width={240} height={126} onError={() => setState({ src: 'img/noimage.png'})} id="eyecatch" />
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
        <div id='article-btn-line'>
          <button>
            <Link href={'/blog'}>戻る</Link>
          </button>
        </div>
      </div>
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};