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

  return (
    <ul className="my-8 lg:my-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {contents.map((blog) => {
        const img = "/img/blog/" + blog.category + ".png";
        return (
          <li key={blog.id} className="border border-gray-400 mx-10">
            <Link className="block" href={`/blog/${blog.id}`}>
              <Image
                src={img}
                alt={blog.category}
                width={300}
                height={300}
                className="m-auto w-full h-auto"
              />
              <p>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</p>
              <p className="block p-2">{blog.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
