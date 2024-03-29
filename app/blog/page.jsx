import Link from "next/link";
import Image from "next/image";
import { getList } from "../../libs/client";
import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja';

export default async function Blog() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h2>No contents</h2>;
  }

  const list = {
    laravel:'Laravel',
    php:'PHP',
    nextjs:'Next.js',
    react:'React',
    javascript:'JavaScript',
    htmlcss:'HTML/CSS',
    others:'その他'
  };

  return (
    <ul className="my-8 lg:my-12 grid grid-cols-1 lg:grid-cols-4">
      {contents.map((blog) => {
        const img = "/img/blog/" + blog.category + ".png";
        return (
          <li key={blog.id} className="border border-gray-400 m-6">
            <Link className="block" href={`/blog/${blog.id}`}>
              <Image
                src={img}
                alt={blog.category}
                width={300}
                height={300}
                className="m-auto w-full h-auto"
              />
              <p className="mx-2 mt-2 flex justify-between">
                <span>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</span>
                <span>{list[blog.category]}</span>
              </p>
              <p className="block p-2">{blog.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
