import Image from 'next/image';
import Meta from '../../compornents/meta';
import {client} from '../../libs/client';
import {parseISO, format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import Link from 'next/link';

export default function CategoryId({ blogs, categories }) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blogs.length === 0) {
    return (
      <>
        <Meta title='ブログエントリーがありません'/>
        <div className='blog-wrapper'>
          <div className='blog-article'>
            ブログエントリーがありません
          </div>
          <div className='blog-search'>
            <h3>カテゴリ</h3>
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={`/category/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Meta title={blogs[0].category.name}/>
      <div className='blog-wrapper'>
        <div className='blog-article'>
        {blogs.map((blog) => (
          <div key={blog.id} className='blog-card'>
            <Link href={`/blog/${blog.id}`}>
              <Image src={blog.category.image.url} alt="" width={480} height={252} onError={() => setState({ src: 'img/noimage.png'})} id="eyecatch" />
              <div className='blog-card-dateline'>
                <p>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</p>
                <p>{blog.category.name}</p>
              </div>
              <h3>{blog.title}</h3>
            </Link>
          </div>
          ))}
        </div>
        <div className='blog-search'>
          <h3>カテゴリ</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.name}>
                <Link href={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", queries: { filters: `category[equals]${id}` } });
  const categoryData = await client.get({ endpoint: "categories" });
  
  return {
    props: {
      blogs: data.contents,
      categories: categoryData.contents,
    },
  };
};