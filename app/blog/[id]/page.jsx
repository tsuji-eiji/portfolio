import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../libs/client";
import parse from "html-react-parser";
import Link from "next/link";
import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja';

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  
  return [...paths];
}

export default async function StaticDetailPage({ params }) {
  const post = await getDetail(params.id);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-center text-2xl my-8 mx-4">{post.title}</h2>
      <p className="text-right my-4 mr-4">{format(parseISO(post.publishedAt), 'yyyy/MM/dd', {locale:ja})}</p>
      <div className="m-2">{parse(post.content)}</div>
      <div className="text-center my-8">
        <Link href='/blog' className="text-center">一覧へ戻る</Link>
      </div>
    </div>
  );
}
