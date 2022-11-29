import Image from 'next/image';
import Meta from '../compornents/meta';
import {client} from '../libs/client';
import Link from 'next/link';

export default function Works({works}) {
  return (
    <>
      <Meta title='Works'/>
      <div>
        <h2 id='page-title'>Works</h2>
        <div className='work-wrapper'>
          {works.map((work) => (
          <div key={work.id} className='work-card'>
            <Image src={work.img.url} alt="" width={1200} height={600} onError={() => setState({ src: 'img/noimage.png'})} id="eyecatch" />
            <h3>{work.text}</h3>
            <Link href={work.url} target="_blank">
              <button className='btn'>Link</button>
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
  const data = await client.get({ endpoint: "works" });
  return {
    props: {
      works: data.contents,
    },
  };
};