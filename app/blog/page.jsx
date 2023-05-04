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
    <div className="my-4">
      <ul className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {contents.map((blog) => {
          const img = "/img/blog/" + blog.category[0] + ".png";
          return (
            <li key={blog.id} className="border border-gray-400 mx-10">
              <Image
                src={img}
                alt={blog.category}
                width={300}
                height={300}
                className="m-auto w-full h-auto"
              />
              <Link className="block" href={`/blog/${blog.id}`}>
                <div className="flex justify-between mx-8">
                  <p>{blog.category}</p>
                  <p>{format(parseISO(blog.publishedAt), 'yyyy/MM/dd', {locale:ja})}</p>
                </div>
                <p className="block p-2">{blog.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
