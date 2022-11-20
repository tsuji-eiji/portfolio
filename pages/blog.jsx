import Image from 'next/image';
import Meta from '../compornents/meta';
import {client} from '../libs/client';
import {parseISO, format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import Link from 'next/link';

export default function Blog({ blogs }) {
  return (
    <>
      <Meta title='Blog'/>
      <div id='wrapper'>
      <h2 id='page-title'>Blog</h2>
        <div className='blog-wrapper'>
        {blogs.map((blog) => (
          <div key={blog.id} className='blog-card'>
            <Image src={blog.eyecatch.url} alt="" width={240} height={126} onError={() => setState({ src: 'img/noimage.png'})} id="eyecatch" />
            <div className='blog-card-dateline'>
              <p>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</p>
              <p>{blog.category.name}</p>
            </div>
            <Link href={`/blog/${blog.id}`}>
              <h3>{blog.title}</h3>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};