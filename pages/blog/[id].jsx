import Image from 'next/image';
import Meta from '../../compornents/meta';
import {client} from '../../libs/client';
import {parseISO, format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import Router from 'next/router';

export default function Blog({ blog }) {
  return (
    <>
      <Meta title={blog.title}/>
      <div className='article-wrapper'>
        <h2 id='article-title'>{blog.title}</h2>
        <p id='article-date-line'>
          <span id='article-date'>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</span>
          <span id='article-category'>{blog.category.name}</span>
        </p>
        <article id='article-content'
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
        <div id='article-btn-line'>
          <button className='btn' onClick={() => Router.back()}>
            戻る
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