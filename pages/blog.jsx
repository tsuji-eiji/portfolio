import Image from 'next/image';
import Meta from '../compornents/meta';
import {client} from '../libs/client';
import {parseISO, format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import Link from 'next/link';

export default function Blog({ blogs, categories }) {
  return (
    <>
      <Meta title='Blog'/>
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
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs"});
  const categoryData = await client.get({ endpoint: "categories" });
  return {
    props: {
      blogs: data.contents,
      categories: categoryData.contents,
    },
  };
};